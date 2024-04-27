import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useEffect, useState } from "react";
import "../../../styles/home/HomeStyle.css";
import FooterLayout from "../footer/FooterLayout";
import NavBarLayout from "../otp/nav/NavBarLayout";
// import b1 from "../../../assets/img/b1.jpg";
// import cp from "../../../assets/img/cp.jpg";
import axios from "axios";
import mu from "../../../assets/img/mu.jpg";
export default function ProfileLayout() {
  const [fileList, setFileList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nid, setNid] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [mandatoryAddress, setMandatoryAddress] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userData = response.data;
        setEmail(userData.email);
        setName(userData.name);
        setPhone(userData.phoneNumber);
        setNid(userData.nid);
        setMandatoryAddress(userData.address);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

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
    // Validate email
    if (!email) {
      message.error({
        content: "Email is required",
      });
      return;
    }

    // Validate mandatory address
    if (!mandatoryAddress) {
      message.error({
        content: "Mandatory address is required",
      });
      return;
    }

    // Validate NID
    if (nid.length !== 11 || isNaN(nid)) {
      message.error({
        content: "NID must be a 11-digit number",
      });
      return;
    }

    // If all validations pass, submit successful
    message.success("Profile submitted successfully");
    // Implement your form submission logic here
  };

  return (
    <>
      <NavBarLayout />

      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Profile</h2>
          </div>
          <div className="row mt-7">
            <div className="col-md-6">
              {/* Left side image */}
              <img
                src={mu}
                alt="Left Side Image"
                width="500px"
                height="500px"
              />
            </div>
            <div className="col-md-6">
              {/* Form with inputs */}
              <form onSubmit={handleSubmit}>
                <div className="text-center" style={{ marginTop: "30px" }}>
                  <ImgCrop rotationSlider>
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-circle"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length < 1 && "+ Upload"}
                    </Upload>
                  </ImgCrop>
                </div>

                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3 mt-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="NID (11 digits)"
                  className="form-control mb-3"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                />
                <textarea
                  placeholder="Optional Address"
                  className="form-control mb-3"
                  rows="4"
                  value={optionalAddress}
                  onChange={(e) => setOptionalAddress(e.target.value)}
                ></textarea>
                <textarea
                  placeholder="Mandatory Address *"
                  className="form-control mb-3"
                  rows="4"
                  value={mandatoryAddress}
                  onChange={(e) => setMandatoryAddress(e.target.value)}
                  required
                ></textarea>
                <button
                  className="btn btn-block"
                  type="submit"
                  style={{ background: "#8FC8CD", color: "white" }}
                >
                  Update <i className="fas fa-edit"></i>
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
