import a1 from "../../assets/img/slider-bg.jpg";
import "../../styles/home/HomeStyle.css";
export default function HomeLayout() {
  return (
    <>
      <div className="hero_area">
        <header className="header_section long_section px-0">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Edgecut</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="furniture.html">
                      Furnitures
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                <a href="">
                  <span>Login</span>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>

        <section className="slider_section long_section">
          <div
            id="customCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Contact Us
                          </a>
                          <a href="" className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="img-box">
                        <img src={a1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Contact Us
                          </a>
                          <a href="" className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="img-box">
                        <img src="../../assets/img/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="detail-box">
                        <h1>
                          For All Your <br />
                          Furniture Needs
                        </h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minus quidem maiores perspiciatis, illo maxime
                          voluptatem a itaque suscipit.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            Contact Us
                          </a>
                          <a href="" className="btn2">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="img-box">
                        <img src="../../assets/img/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel" data-slide-to="1"></li>
              <li data-target="#customCarousel" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>

      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Furniture</h2>
            <p>
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't an
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>brown Chair Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 100.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Double Bed Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 200.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>House Chair Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 200.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>brown Table Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 100.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f5.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Blue Chair Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 200.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/f6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Brown Table Design</h5>
                  <div className="price_box">
                    <h6 className="price_heading">
                      <span>$</span> 200.00
                    </h6>
                    <a href="">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding long_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="../../assets/img/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti dolorem eum consequuntur ipsam repellat dolor soluta
                  aliquid laborum, eius odit consectetur vel quasi in quidem,
                  eveniet ab est corporis tempore.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Latest Blog</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/b1.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Look even slightly believable. If you are</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/b2.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Anything embarrassing hidden in the middle</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src="../../assets/img/b3.jpg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Molestias magni natus dolores odio commodi. Quaerat!</h5>
                  <p>
                    alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
          </div>
          <div
            id="carouselExample2Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="../../assets/img/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="../../assets/img/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="../../assets/img/client.jpg" alt="" />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                          <h6>Siaalya</h6>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable cIt is a long established
                          fact that a reader will be distracted by the readable
                          c
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a
                className="carousel-control-prev"
                href="#carouselExample2Controls"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample2Controls"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section  long_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info_section long_section">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +01 123455678990</span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : demo@gmail.com</span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>Location</span>
            </a>
          </div>

          <div className="info_top ">
            <div className="row ">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="info_links">
                  <h4>QUICK LINKS</h4>
                  <div className="info_links_menu">
                    <a className="" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                    <a className="" href="about.html">
                      {" "}
                      About
                    </a>
                    <a className="" href="furniture.html">
                      Furniture
                    </a>
                    <a className="" href="blog.html">
                      Blog
                    </a>
                    <a className="" href="contact.html">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
                <div className="info_post">
                  <h5>INSTAGRAM FEEDS</h5>
                  <div className="post_box">
                    <div className="img-box">
                      <img src="../../assets/img/f1.png" alt="" />
                    </div>
                    <div className="img-box">
                      <img src="../../assets/img/f2.png" alt="" />
                    </div>
                    <div className="img-box">
                      <img src="../../assets/img/f3.png" alt="" />
                    </div>
                    <div className="img-box">
                      <img src="../../assets/img/f4.png" alt="" />
                    </div>
                    <div className="img-box">
                      <img src="../../assets/img/f5.png" alt="" />
                    </div>
                    <div className="img-box">
                      <img src="../../assets/img/f6.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info_form">
                  <h4>SIGN UP TO OUR NEWSLETTER</h4>
                  <form action="">
                    <input type="text" placeholder="Enter Your Email" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <div className="social_box">
                    <a href="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </>
  );
}
