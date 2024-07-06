import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsApi } from "../apis/api";
import "../style/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("productName");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllProductsApi(sortBy, category)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        setError("Error fetching products. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sortBy, category]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="shop">
      <div className="container mt-5">
        <div className="header text-center mb-5">
          <h1>Welcome to Our Online Shop</h1>
          <div className="filter-section">
            <label htmlFor="sortBy">Sort By:</label>
            <select id="sortBy" value={sortBy} onChange={handleSortChange}>
              <option value="productName">Product Name</option>
              <option value="productPrice">Price</option>
            </select>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <>
            {currentProducts.length === 0 && <p>No products found.</p>}
            <div className="row">
              {currentProducts.map((item) => (
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
                      <Link
                        to={`/product/${item._id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="pagination">
          {Array.from({
            length: Math.ceil(products.length / productsPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
