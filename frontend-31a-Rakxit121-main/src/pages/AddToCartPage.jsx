import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCartItemsApi, getSingleProductApi } from "../apis/api";

const AddToCartPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productResponse, cartItemsResponse] = await Promise.all([
          getSingleProductApi(id),
          fetchCartItemsApi(user.userId),
        ]);

        const productData = productResponse.data.product;
        setProductName(productData.productName);
        setProductCategory(productData.productCategory);
        setProductPrice(productData.productPrice);
        setProductDescription(productData.productDescription);
        setProductImageUrl(productData.productImageUrl);

        if (
          cartItemsResponse &&
          cartItemsResponse.data &&
          cartItemsResponse.data.cartItems
        ) {
          setCartItems(
            cartItemsResponse.data.cartItems.map((item) => ({
              id: item.productId,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
              description: item.description, // Assuming 'description' is the key for the product description in the API response
            }))
          );
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user.userId]);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDeleteCartItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    console.log("Placing order:", cartItems);
  };

  const handleShippingChange = (event) => {
    // Handle the change in shipping option here
    console.log("Selected shipping option:", event.target.value);
    // You can update state or perform any other actions based on the selected shipping option
  };

  return (
    <div className="cart-container" style={{ padding: "20px" }}>
      <div className="container mt-5 card" style={{ padding: "20px" }}>
        <h2 className="mb-4">Your Cart</h2>
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {error && <p className="error-message">{error}</p>}

        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {cartItems.length} items
                  </div>
                </div>
              </div>
              {cartItems.map((item) => (
                <div className="row border-top border-bottom" key={item.id}>
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <div className="col-md-6">
                        <img
                          className="img-fluid mb-4 rounded shadow"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="row text-muted">{item.title}</div>
                      <div className="row">{item.description}</div>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span> {item.quantity} </span>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="col">
                      &euro; {item.price}{" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDeleteCartItem(item.id)}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="back-to-shop">
                <a href="#">
                  <span className="text-muted">Back to shop</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: "0" }}>
                  ITEMS {cartItems.length}
                </div>
                <div className="col text-right">
                  &euro; {calculateTotalPrice()}
                </div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select onChange={handleShippingChange}>
                  <option key="standard-shipping" className="text-muted">
                    Standard-Delivery- &euro;5.00
                  </option>
                </select>
              </form>
              <div
                className="row"
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: "2vh 0",
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">
                  &euro; {calculateTotalPrice()}
                </div>
              </div>
              <button className="btn" onClick={handlePlaceOrder}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
