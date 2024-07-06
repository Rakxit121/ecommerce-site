import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCartApi1,
  getAllProductsApi,
  getSingleProductApi,
} from "../apis/api";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [productReviews, setProductReviews] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  // const [productHighlights, setProductHighlights] = useState([]);
  // const [productDetails, setProductDetails] = useState("");
  // const [productIngredients, setProductIngredients] = useState("");
  // const [productUsage, setProductUsage] = useState("");

  useEffect(() => {
    getSingleProductApi(id).then((res) => {
      const productData = res.data.product;
      setProductName(productData.productName);
      setProductCategory(productData.productCategory);
      setProductPrice(productData.productPrice);
      setProductDescription(productData.productDescription);
      setProductImageUrl(productData.productImageUrl);
      // setProductRating(productData.productRating);
      // setProductReviews(productData.productReviews);
      // setSimilarProducts(productData.similarProducts);
      // setProductHighlights(productData.productHighlights);
      // setProductDetails(productData.productDetails);
      // setProductIngredients(productData.productIngredients);
      // setProductUsage(productData.productUsage);
    });
  }, [id]);

  // useEffect for fetching all products and show in the table
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    // if (!user || !user.userId) {
    //   toast.error("Please log in to add items to the cart.");
    //   return;
    // }

    const productId = id;

    const orderData = {
      userId: user._id,
      productId: id,
      quantity,
      status: "pending",
    };

    addToCartApi1(orderData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Item added to cart successfully:", response.data);
          toast.success("Item added to cart!");
        } else {
          console.error("Unexpected response status:", response.status);
          toast.error("Error adding item to cart. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        toast.error("Error adding item to cart. Please try again.");
      });
  };

  if (!productName) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid mb-4 rounded shadow"
            src={productImageUrl}
            alt={productName}
          />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">{productName}</h1>
              <p className="card-subtitle text-muted">
                Category: {productCategory}
              </p>
              <p className="card-text lead">Rs. {productPrice}</p>
              <p className="card-text">{productDescription}</p>

              <div className="row align-items-center mb-3">
                <label className="col-3 col-form-label">Quantity:</label>
                <div className="col-9">
                  <div className="input-group">
                    <div>
                      {" "}
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                    </div>
                    <span className="mx-2"> {quantity} </span>
                    <di>
                      {" "}
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </di>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <strong>Rating:</strong>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`mx-1 ${
                      index < productRating ? "text-warning" : "text-muted"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2>Similar Products</h2>
        <div className="row">
          {Array.isArray(products) &&
            products.slice(0, 3).map(
              (
                item // Limiting to first 9 items
              ) => (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={item.productImageUrl}
                      alt={item.name}
                      width={150}
                      height={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.productName}</h5>
                      <p className="card-text">{item.productCategory}</p>
                      <p className="card-text">Rs. {item.productPrice}</p>
                      {/* Move Link inside the map function */}
                      <Link
                        to={`/product/${item._id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
