import { useEffect, useState } from "react";
import tImage from "../../assets/img/e3.jpg";
import f1Image from "../../assets/img/e6.jpg";
import f2Image from "../../assets/img/t.jpg";
import "../../styles/home/HomeStyle.css";
import NavBarLayout from "../client/nav/NavBarLayout";
import CarSellCollection from "./CarSellCollection";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";
import FooterLayout from "../client/footer/FooterLayout";
import { NavLink } from "react-router-dom";
export default function HomeLayout() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [tImage, f1Image, f2Image]; // Use your images here

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      <div className="hero_area">
        <NavBarLayout />

        <section className="slider_section long_section">
          <div
            id="customCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  className={`carousel-item ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="detail-box">
                          <h1>
                            Your One-Stop <br />
                            Car Trading Platform
                          </h1>
                          <p>
                            Explore our extensive range of vehicles to find the
                            perfect match for your needs, or effortlessly sell
                            your car hassle-free. With our dedicated team and
                            seamless platform, we ensure a smooth and efficient
                            experience from start to finish.
                          </p>
                          <div className="btn-box">
                            <NavLink to="/#contact" className="btn1">
                              Contact Us
                            </NavLink>
                            <NavLink to="/#about" className="btn2">
                              About Us
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="img-box">
                          <img src={image} alt={`Slide ${index}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ol className="carousel-indicators">
              {images.map((_, index) => (
                <li
                  key={index}
                  data-target="#customCarousel"
                  data-slide-to={index}
                  className={index === currentImageIndex ? "active" : ""}
                ></li>
              ))}
            </ol>
            <a
              className="carousel-control-prev"
              href="#customCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#customCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>

      <CarSellCollection />

      <AboutSection />

      {/* <BlogSection /> */}

      <TestimonialSection />

      <ContactSection />

      <FooterLayout />
    </>
  );
}
