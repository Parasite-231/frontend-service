import React from 'react'
import as from "../../assets/img/as.jpg"
export default function AboutSection() {
  return (
    <>
      <section className="about_section layout_padding long_section" id='about'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={as} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Welcome to Car Market, your premier destination for buying and
                  selling cars. Whether you're looking to upgrade to a newer
                  model or find the perfect vehicle to suit your needs, we've
                  got you covered. Our platform connects buyers and sellers,
                  making it easy to find the car of your dreams or list your
                  vehicle for sale. With a wide selection of vehicles and
                  convenient search options, finding your next car has never
                  been easier.
                </p>
                {/* <a href="">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
