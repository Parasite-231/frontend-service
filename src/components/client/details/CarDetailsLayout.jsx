import React, { useState } from "react";
import { useParams } from "react-router-dom";
import c1test from "../../../assets/img/c1test2.jpg"; // Importing sample image for testing
import t2 from "../../../assets/img/t2.jpg";
import FooterLayout from "../footer/FooterLayout";
import NavBarLayout from "../nav/NavBarLayout";

export default function CarDetailsLayout() {
  const { id } = useParams();

  // Define images in state
  const [images, setImages] = useState([
    c1test, // Sample image for testing
    c1test, // Sample image for testing
    c1test, // Sample image for testing
  ]);

  return (
    <>
      <NavBarLayout />
      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Car Details (Car ID: {id})</h2>
          </div>
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
              {/* Left Side: Images */}
              <div className="col-md-6">
                {/* Main Image */}
                <img
                  src={images[0]} // Using the first image as the main image
                  alt={`Car 1`}
                  className="img-fluid mb-3"
                  style={{ width: "80%", height: "auto" }}
                />

                {/* Two Smaller Images */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <img
                      src={images[1]} // Using the second image
                      alt={`Car 2`}
                      className="img-fluid"
                      style={{ width: "90%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <img
                      src={images[2]} // Using the third image
                      alt={`Car 3`}
                      className="img-fluid"
                      style={{ width: "90%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ background: "" }}>
                      Car Details
                    </h5>
                    <hr />
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <b>Car Model:</b>
                          </td>
                          <td>Toyota Corolla Axio</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Car Color:</b>
                          </td>
                          <td>Red</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Registration Year:</b>
                          </td>
                          <td>2020</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Mileage:</b>
                          </td>
                          <td>30,000 km</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Price:</b>
                          </td>
                          <td>$15,000</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Paper:</b>
                          </td>
                          <td>Clean</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Accident History:</b>
                          </td>
                          <td>None</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card" style={{ marginTop: "40px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={t2} // Replace "..." with the URL of the car image
                        className="img-fluid rounded-start"
                        alt="Car Image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Seller Details</h5>
                        <hr />
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <b>Name:</b>
                              </td>
                              <td>John Doe</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Email:</b>
                              </td>
                              <td>johndoe@example.com</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Phone Number:</b>
                              </td>
                              <td>+1234567890</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Address:</b>
                              </td>
                              <td>New York, USA</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
