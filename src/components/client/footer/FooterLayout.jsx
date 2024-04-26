import React from "react";
import { NavLink } from "react-router-dom";
import cp2 from "../../../assets/img/cp2.jpg";

export default function FooterLayout() {
  return (
    <>
      <div className="container-fluid my-3">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "black" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#8FC8CD" }}
          >
            <div className="me-5">
              <span>Get Connected with us </span>
            </div>
            <div>
              <a href="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Astarion</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    Welcome to our platform where you can buy and sell cars
                    hassle-free. Find the perfect car for your needs or list
                    your own car for sale. Our platform connects buyers and
                    sellers to make the car buying and selling process easier
                    and more convenient.
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Quick links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <NavLink to="/home" className="text-white">
                      Home
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/client/car-sell" className="text-white">
                      Sell Posts
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/about" className="text-white">
                      About
                    </NavLink>
                  </p>
                  <p>
                    <NavLink to="/contact" className="text-white">
                      Contact Us
                    </NavLink>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> Address: BoardBazar,
                    Gazipur, Bangladesh
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> Mail:
                    aborgcube@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> Phone: +880-1306989578
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                  <img
                    src={cp2}
                    className="img-fluid"
                    alt="Astarion"
                    width="600px"
                  />
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:&nbsp;
            <NavLink className="text-white" to="/home">
              AborgCube
            </NavLink>
          </div>
        </footer>
      </div>
    </>
  );
}
