import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsApi } from "../apis/api";

const HomePage = () => {
  const handleLearnMoreClick = (title) => {
    alert(`Learn more about ${title}`);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    // You can add custom actions here based on the selected index
  };

  // useEffect for fetching all products and show in the table
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-ride="carousel"
        data-interval="false"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className={activeIndex === 0 ? "active" : ""}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            className={activeIndex === 1 ? "active" : ""}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            className={activeIndex === 2 ? "active" : ""}
          ></li>
        </ol>
        <div className="carousel-inner">
          <div
            className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleCarouselSlide(0)}
          >
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=1"
              alt="First slide"
            />
          </div>
          <div
            className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleCarouselSlide(1)}
          >
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=2"
              alt="Second slide"
            />
          </div>
          <div
            className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleCarouselSlide(2)}
          >
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=3"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          onClick={() => handleCarouselSlide(activeIndex - 1)}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          onClick={() => handleCarouselSlide(activeIndex + 1)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Card Group */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="https://picsum.photos/400/200?random=4"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleLearnMoreClick("Card title")}
                >
                  Learn More
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="https://picsum.photos/400/200?random=5"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleLearnMoreClick("Card title")}
                >
                  Learn More
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="https://picsum.photos/400/200?random=6"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <button
                  className="btn btn-primary "
                  onClick={() => handleLearnMoreClick("Card title")}
                >
                  Learn More
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jumbotron */}
      <div className="jumbotron mb-5"></div>

      {/* Add more sections as needed */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="container">
              <h1 className="display-4">
                Welcome to our Beauty Products Store!
              </h1>
              <p className="lead">
                Explore our wide range of beauty products to enhance your beauty
                and skincare routine.
              </p>
            </div>
            <div className="row">
              {Array.isArray(products) &&
                products.slice(0, 9).map(
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
            <hr />
            <div className="row"></div>
          </div>
        </div>
      </div>

      {/* Images info */}
      {/* justify left image */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="container">
              <h1 className="display-4">
                Welcome to our Beauty Products Store!
              </h1>
              <p className="lead">
                Explore our wide range of beauty products to enhance your beauty
                and skincare routine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: "10%" }}>
        <div className="col-lg-6 d-flex justify-content-start align-items-center">
          <img
            src="assets/glowing skin.png"
            alt="Glowing Skin"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          <img
            src="assets/CHECKLIST.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
