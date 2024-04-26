import React from "react";
import { Link, NavLink } from "react-router-dom";
import c1test from "../../assets/img/c1test2.jpg";
import NavBarLayout from "../client/nav/NavBarLayout";

const sellPosts = [
  {
    id: 1,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 100.0,
  },
  {
    id: 2,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 200.0,
  },
  {
    id: 3,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 200.0,
  },
  {
    id: 4,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 100.0,
  },
  {
    id: 5,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 200.0,
  },
  {
    id: 6,
    image: c1test,
    title: "Toyota Corolla Axio",
    price: 200.0,
  },
];

export default function CarSellCollection() {
  return (
    <>
      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Sell Posts</h2>
            <p>Here are the recent sell posts from our registered users!</p>
          </div>
          <div className="row">
            {sellPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="img-box">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{post.title}</h5>
                    <div className="price_box">
                      <h6 className="price_heading">
                        <span>$</span> {post.price}
                      </h6>
                      <NavLink
                        to={`/car-details/${post.id}`}
                        className="btn "
                        style={{ backgroundColor: "#8FC8CD", color:"white" }}
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
