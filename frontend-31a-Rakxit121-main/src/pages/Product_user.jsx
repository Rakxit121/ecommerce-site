import React, { useState } from "react";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Display products */}
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product">
            {/* Display product information here */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
