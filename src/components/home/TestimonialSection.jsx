import React from "react";
import t1 from "../../assets/img/t1.jpg";
import t2 from "../../assets/img/t2.jpg";
import t3 from "../../assets/img/t3.jpg"

export default function TestimonialSection() {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonials</h2>
        </div>
        <div className="row " style={{marginTop:"30px"}}>
          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={t2}
                    className="img-fluid rounded-start"
                    alt="Testimonial 1"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Md Muktadir</h5>
                    <p className="card-text">
                      "I sold my car through this platform and the process was
                      smooth and hassle-free. Highly recommended!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={t1}
                    className="img-fluid rounded-start"
                    alt="Testimonial 2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Abir Hossain</h5>
                    <p className="card-text">
                      "Buying a car has never been easier. Thanks to this
                      platform, I found the perfect car for me!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={t3}
                    className="img-fluid rounded-start"
                    alt="Testimonial 3"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Abdullah Noman</h5>
                    <p className="card-text">
                      "I was skeptical at first, but after using this platform
                      to sell my car, I'm impressed by how easy and efficient
                      the process was!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
