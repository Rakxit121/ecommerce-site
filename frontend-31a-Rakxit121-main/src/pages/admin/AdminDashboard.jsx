import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createProductApi,
  deleteProductApi,
  getAllProductsApi,
} from "../../apis/api";

const Admindashboard = () => {
  // State for product information
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("Flower"); // Default value is Flower
  const [productDescription, setProductDescription] = useState("");

  // make usestate for image
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // useEffect for fetching all products and show in table
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  // Function for image upload and preview
  const handleImageUpload = (event) => {
    const files = event.target.files[0];
    setProductImage(files);
    setPreviewImage(URL.createObjectURL(files));
  };

  // Handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // make logical form data
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage);

    // make api call
    createProductApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server error");
        console.log(err.message);
      });
  };

  // Delete product function
  const handleDelete = (id) => {
    const confirmDialog = window.confirm(
      "Are you sure you want to delete this product? "
    );
    if (!confirmDialog) {
      return;
    } else {
      // make api call
      deleteProductApi(id).then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Welcome to Admin Dashboard!</h1>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product +
        </button>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create new product
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Price</label>
                  <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Enter product price"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Category</label>
                  <select
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="Flower">Flower</option>
                    <option value="Decoration">Decoration</option>
                    <option value="Gift">Gift</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Description</label>
                  <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="form-control"
                    rows="3"
                    placeholder="Enter product description"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Image</label>
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    className="form-control"
                    placeholder="Enter product image"
                  />
                  {previewImage && (
                    <img
                      src={previewImage}
                      className="img-fluid mt-3 rounded"
                      alt="product preview"
                    />
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button onClick={handleSubmit} type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">Product Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.productImageUrl}
                  width={"130"}
                  height={"80"}
                  alt=""
                />
              </td>
              <td>{item.productName}</td>
              <td>Rs.{item.productPrice}</td>
              <td>{item.productCategory}</td>
              <td>{item.productDescription.slice(0, 20)}</td>
              <td>
                <div className="btn-group" role="group">
                  <Link
                    to={`/admin/edit/${item._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admindashboard;
