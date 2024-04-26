import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import "../../../styles/home/HomeStyle.css";
import FooterLayout from "../footer/FooterLayout";
import NavBarLayout from "../nav/NavBarLayout";

export default function CarSellLayout() {
  const [fileList, setFileList] = useState([]);
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [registrationYear, setRegistrationYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [paper, setPaper] = useState("");
  const [accidentHistory, setAccidentHistory] = useState("");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields
    if (
      !carModel ||
      !carColor ||
      !registrationYear ||
      !mileage ||
      !price ||
      !paper ||
      !accidentHistory
    ) {
      message.error({
        content: "All fields are required",
        style: {
          backgroundColor: "#ff4d4f", // Red background color
        },
      });
      return;
    }
    // If all validations pass, submit successful
    message.success("Car details submitted successfully");
    // Implement your form submission logic here
  };

  return (
    <>
      <NavBarLayout />

      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Sell Your Car</h2>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-3">
                  <ImgCrop rotationSlider>
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length < 3 && "+ Upload"}
                    </Upload>
                  </ImgCrop>
                  {fileList.length >= 3 && (
                    <p style={{ color: "red", margin:"40px" }}>
                      You can add at most 3 images of your car
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Car Model"
                  className="form-control mb-3"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Car Color"
                  className="form-control mb-3"
                  value={carColor}
                  onChange={(e) => setCarColor(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Registration Year"
                  className="form-control mb-3"
                  value={registrationYear}
                  onChange={(e) => setRegistrationYear(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mileage"
                  className="form-control mb-3"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="form-control mb-3"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Paper"
                  className="form-control mb-3"
                  value={paper}
                  onChange={(e) => setPaper(e.target.value)}
                />
                <textarea
                  placeholder="Accident History"
                  className="form-control mb-3"
                  rows="4"
                  value={accidentHistory}
                  onChange={(e) => setAccidentHistory(e.target.value)}
                  required
                ></textarea>
                <button className="btn btn-primary btn-block" type="submit">
                  Create Sell Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterLayout />
    </>
  );
}
