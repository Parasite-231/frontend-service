import React, { useState } from "react";
import { Upload, message, Spin } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import "../../../styles/home/HomeStyle.css";
import FooterLayout from "../footer/FooterLayout";
import NavBarLayout from "../nav/NavBarLayout";

export default function CarSellLayout() {
  const [fileList, setFileList] = useState([]);
  const [model, setCarModel] = useState("");
  const [color, setCarColor] = useState("");
  const [year, setRegistrationYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [paper, setPaper] = useState("");
  const [accident, setAccidentHistory] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append("files", file.originFileObj, 1);
      });
      const token = sessionStorage.getItem("accessToken");
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/product/upload-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      message.success("Images uploaded successfully");
    } catch (error) {
      console.error("Error uploading images:", error);
      message.error("Error uploading images");
    } finally {
      setLoading(false);
    }
  };

  const handleCarDetailsSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields
    if (
      !model ||
      !color ||
      !year ||
      !mileage ||
      !price ||
      !paper ||
      !accident
    ) {
      message.error({
        content: "All fields are required",
        style: {
          backgroundColor: "#ff4d4f",
        },
      });
      return;
    }
    try {
      setLoading(true);
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/product/post`,
        {
          model,
          color,
          year,
          mileage,
          price,
          paper,
          accident,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      message.success("Car details submitted successfully");
      // Extract car ID from the response
      const carId = response.data.id;
      console.log("Car details submit response:", response.data);
      // Use the car ID to upload images
      await uploadImages(carId);
    } catch (error) {
      console.error("Error submitting car details:", error);
      message.error("Error submitting car details");
    } finally {
      setLoading(false);
    }
  };

 const uploadImages = async (carId, name) => {
   try {
     setLoading(true);
     const formData = new FormData();

     // Convert each file to base64 and append to formData
     for (let i = 0; i < fileList.length; i++) {
       const file = fileList[i];
       const reader = new FileReader();
       reader.readAsDataURL(file.originFileObj);
       reader.onload = function () {
         formData.append("files", reader.result.split(",")[1], file.name);
         if (i === fileList.length - 1) {
           // When all files are appended, also append carId and name
           formData.append("carId", carId);
           formData.append("name", name);

           // Make the POST request with the FormData object
           postFormData(formData);
         }
       };
     }
   } catch (error) {
     console.error("Error uploading images:", error);
     message.error("Error uploading images");
     setLoading(false);
   }
 };

 const postFormData = async (formData) => {
   try {
     const token = sessionStorage.getItem("accessToken");
     await axios.post(
       `${import.meta.env.VITE_BASE_URL}/api/product/upload-image/text`,
       formData,
       {
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "multipart/form-data",
         },
       }
     );
     message.success("Images uploaded successfully");
   } catch (error) {
     console.error("Error uploading images:", error);
     message.error("Error uploading images");
   } finally {
     setLoading(false);
   }
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
              <form onSubmit={handleImageSubmit}>
                <div className="text-center mb-3">
                  <ImgCrop rotationSlider>
                    <Upload
                      action=""
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length < 3 && "+ Upload"}
                    </Upload>
                  </ImgCrop>
                  {fileList.length >= 3 && (
                    <p style={{ color: "red", margin: "40px" }}>
                      You can add at most 3 images of your car
                    </p>
                  )}
                </div>
                <button
                  className="btn btn-block"
                  type="submit"
                  style={{ background: "#8FC8CD", color: "white" }}
                  disabled={loading}
                >
                  {loading ? <Spin /> : "Upload Images"}
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleCarDetailsSubmit}>
                <input
                  type="text"
                  placeholder="Car Model"
                  className="form-control mb-3"
                  value={model}
                  onChange={(e) => setCarModel(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Car Color"
                  className="form-control mb-3"
                  value={color}
                  onChange={(e) => setCarColor(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Registration Year"
                  className="form-control mb-3"
                  value={year}
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
                  type="number"
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
                  value={accident}
                  onChange={(e) => setAccidentHistory(e.target.value)}
                  required
                ></textarea>
                <button
                  className="btn btn-block"
                  type="submit"
                  style={{ background: "#8FC8CD", color: "white" }}
                  disabled={loading}
                >
                  {loading ? <Spin /> : "Create Sell Post"}
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
