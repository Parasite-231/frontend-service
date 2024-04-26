import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import c1test from "../../assets/img/c1test2.jpg";
import LoaderLayout from "../loader/LoaderLayout";

export default function CarSellCollection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sellPosts, setSellPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const postsPerPage = 6;

  useEffect(() => {
    const fetchSellPosts = async () => {
      try {
        setLoading(true); // Set loading to true when fetching new data
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/product/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              page: currentPage,
              size: postsPerPage,
            },
          }
        );

        if (response.data && Array.isArray(response.data.data)) {
          setSellPosts(response.data.data);
          console.log(response.data.data)
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching sell posts:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchSellPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Sell Posts</h2>
            <p>Here are the recent sell posts from our registered users!</p>
          </div>
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <LoaderLayout />
            </div>
          ) : (
            <div className="row" style={{ marginTop: "40px" }}>
              {sellPosts.map((post) => (
                <div key={post.id} className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="img-box">
                      <img src={post.image || c1test} alt={post.title} />
                    </div>
                    <div className="detail-box">
                      <h5>{post.model}</h5>
                      <div className="price_box">
                        <h6 className="price_heading">
                          <span>$</span> {post.price}
                        </h6>
                        <NavLink
                          to={`/client/car-details/${post.id}/${post.ownerEmail}/${post.model}/${post.color}/${post.year}/${post.mileage}/${post.price}/${post.paper}/${post.accidentHistory}/${post.sellerName}/${post.sellerEmail}/${post.sellerPhoneNumber}/${post.sellerAddress}`}
                          className="btn"
                          style={{ backgroundColor: "#8FC8CD", color: "white" }}
                        >
                          View Details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              className="btn btn-secondary mx-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={handleNextPage}
              disabled={sellPosts.length < postsPerPage}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
