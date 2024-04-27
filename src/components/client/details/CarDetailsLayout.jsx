import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import c1test from "../../../assets/img/c1test2.jpg"; // Importing sample image for testing
import t2 from "../../../assets/img/t2.jpg";
import FooterLayout from "../footer/FooterLayout";
import NavBarLayout from "../otp/nav/NavBarLayout";

export default function CarDetailsLayout() {
  const {
    id,
    ownerEmail,
    model,
    color,
    year,
    mileage,
    price,
    paper,
    accidentHistory,
    sellerName,
    sellerEmail,
    sellerPhoneNumber,
    sellerAddress,
  } = useParams();

  // State to store owner information
  const [ownerInfo, setOwnerInfo] = useState(null);
  // State to store car image URL
  const [carImage, setCarImage] = useState(null);
  // State to track if image is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user/info?email=${ownerEmail}`
        );
        console.log("Owner Info Response:", response); // Log the response
        setOwnerInfo(response.data);
      } catch (error) {
        console.error("Error fetching owner information:", error);
      }
    };

    fetchOwnerInfo();
  }, [ownerEmail]);

  useEffect(() => {
    const fetchCarImage = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/product/get-image?carId=${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Car Image Response:", response.data); // Log the image response
        // Assuming the response contains the image URL
        setCarImage(response.data.imageUrl);
        setIsLoading(false); // Set isLoading to false once image is fetched
      } catch (error) {
        console.error("Error fetching car image:", error);
        setIsLoading(false); // Set isLoading to false in case of error
      }
    };

    fetchCarImage();
  }, [id]);

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
                {/* Display loading indicator if image is still loading */}
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  // Display image once loaded
                  <img
                    src={carImage } // Use the fetched image URL, fallback to sample image
                    alt={`Car ${id}`}
                    className="img-fluid mb-3"
                    style={{ width: "80%", height: "auto" }}
                  />
                )}

                {/* Two Smaller Images */}
                {/* <div className="row">
                  <div className="col-md-6 mb-3">
                    <img
                      src={c1test} // Sample image
                      alt={`Car 2`}
                      className="img-fluid"
                      style={{ width: "90%", height: "auto" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <img
                      src={c1test} // Sample image
                      alt={`Car 3`}
                      className="img-fluid"
                      style={{ width: "90%", height: "auto" }}
                    />
                  </div>
                </div> */}
              </div>

              {/* Right Side: Details */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Car Details</h5>
                    <hr />
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <b>Car Model:</b>
                          </td>
                          <td>{model}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Car Color:</b>
                          </td>
                          <td>{color}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Registration Year:</b>
                          </td>
                          <td>{year}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Mileage:</b>
                          </td>
                          <td>{mileage}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Price:</b>
                          </td>
                          <td>${price}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Paper:</b>
                          </td>
                          <td>{paper}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Accident History:</b>
                          </td>
                          <td>{accidentHistory}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card" style={{ marginTop: "40px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      {/* Display the seller's image here */}
                      <img
                        src={t2} // Sample image
                        className="img-fluid rounded-start"
                        alt="Seller Image"
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
                              <td>{ownerInfo ? ownerInfo.name : sellerName}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Email:</b>
                              </td>
                              <td>
                                {ownerInfo ? ownerInfo.email : sellerEmail}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Phone Number:</b>
                              </td>
                              <td>
                                {ownerInfo
                                  ? ownerInfo.phoneNumber
                                  : sellerPhoneNumber}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Address:</b>
                              </td>
                              <td>
                                {ownerInfo ? ownerInfo.address : sellerAddress}
                              </td>
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
