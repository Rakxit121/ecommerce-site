import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleProductApi, updateProductApi } from "../../apis/api";

const AdminEditProduct = () => {
  //recieve product id from url
  const { id } = useParams();

  //navigator
  const navigate = useNavigate();

  //use effect to fetch product details
  useEffect(() => {
    //making api call
    getSingleProductApi(id).then((res) => {
      const productData = res.data.product;
      setProductName(productData.productName);
      setProductCategory(productData.productCategory);
      setProductPrice(productData.productPrice);
      setProductDescription(productData.productDescription);
      setOldImage(productData.productImageUrl);
      setProductRating(productData.productRating);
      setProductReviews(productData.productReviews);
      setSimilarProducts(productData.similarProducts);
      setProductHighlights(productData.productHighlights);
      setProductDetails(productData.productDetails);
      setProductIngredients(productData.productIngredients);
      setProductUsage(productData.productUsage);
    });
  }, [id]);

  // make usestate
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // make useState for image
  const [productImage, setProductImage] = useState(null);
  const [PreviewImage, setPreviewImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [productRating, setProductRating] = useState(0);
  const [productReviews, setProductReviews] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [productHighlights, setProductHighlights] = useState([]);
  const [productDetails, setProductDetails] = useState("");
  const [productIngredients, setProductIngredients] = useState("");
  const [productUsage, setProductUsage] = useState("");

  // handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !productName ||
      !productPrice ||
      !productCategory ||
      !productDescription ||
      !productImage
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Logical form data
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage);
    formData.append("productRating", productRating);
    formData.append("productReviews", productReviews);
    formData.append("similarProducts", similarProducts);
    formData.append("productHighlights", productHighlights);
    formData.append("productDetails", productDetails);
    formData.append("productIngredients", productIngredients);
    formData.append("productUsage", productUsage);

    // Making API call
    updateProductApi(id, formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.success(res.data.message);
          navigate("/admin/dashboard");
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error); // Log the error for debugging
        alert("Server error. Please try again later."); // Display a generic error message
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="m-4">
          Updating product for{" "}
          <span className="text-danger">'{productName}'</span>
        </h2>
        <div
          className="row gap-4"
          style={{ display: "flex", flexWrap: "nowrap" }}
        >
          <div className="col-md-6 shadow p-4 edit-product-form">
            <form>
              <label className="mb-1">Product Name</label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control mb-2"
                placeholder="Enter Product name"
              />

              <label className="mb-1">Product Category</label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="form-control"
                id=""
              >
                <option className="Flower">Flower</option>
                <option className="Cake">Cake</option>
                <option className="Gift">Gift</option>
              </select>

              <label className="mb-1">Price</label>
              <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="form-control mb-2"
                type="number"
                placeholder="Enter Product Price"
              />

              <label className="mb-1">Product Description</label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                cols={3}
                className="form-control mb-2"
                type="text"
                placeholder="Write Product Description"
              />

              <label className="mb-1">Product Image</label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="form-control mb-2"
              />

              <label className="mb-1">Product Rating</label>
              <input
                value={productRating}
                onChange={(e) => setProductRating(e.target.value)}
                type="number"
                className="form-control mb-2"
                placeholder="Enter Product Rating"
              />

              <label className="mb-1">Product Details</label>
              <textarea
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                cols={3}
                className="form-control mb-2"
                placeholder="Write Product Details"
              />

              <label className="mb-1">Product Ingredients</label>
              <textarea
                value={productIngredients}
                onChange={(e) => setProductIngredients(e.target.value)}
                cols={3}
                className="form-control mb-2"
                placeholder="Write Product Ingredients"
              />

              <label className="mb-1">Product Usage</label>
              <textarea
                value={productUsage}
                onChange={(e) => setProductUsage(e.target.value)}
                cols={3}
                className="form-control mb-2"
                placeholder="Write Product Usage Instructions"
              />

              <label className="mb-1">Product Highlights</label>
              <input
                value={productHighlights}
                onChange={(e) => setProductHighlights(e.target.value)}
                type="text"
                className="form-control mb-2"
                placeholder="Enter Product Highlights (comma-separated)"
              />

              <button
                className="btn btn-primary w-100 mt-3 update-product-btn"
                onClick={handleSubmit}
              >
                Update Product
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6>Old Image</h6>
                <img
                  src={oldImage}
                  className="card-img-top object-fit-cover rounded-3"
                  alt=""
                  height={220}
                />
                <hr />
                <h6>New Image</h6>
                {PreviewImage && (
                  <img
                    src={PreviewImage}
                    className="card-img-top mt-3"
                    alt=""
                    height={220}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditProduct;
