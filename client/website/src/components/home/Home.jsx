import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Herocarousel from "../HeroCarousel/HeroCarousel";
import Features from "../features/Features";
import MyContact from "../contact/MyContact";
import Testimonials from "../../pages/testimonials/Testimonials";
import CTA from "../../pages/cta/CTA";
import Services from "../../pages/services/Services";
import { RxDoubleArrowRight } from "react-icons/rx";
import about__one from "../../assets/about/about-img-1.jpg";
import about__two from "../../assets/about/about-img-2.jpg";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate } from "react-router-dom";
import FAQ from "../../pages/faq/FAQ";
import constants from "../../constants/constants";

const Home = () => {
  const [latestBlog, setLatestBlog] = useState([]);
  const navigate=useNavigate();



  useEffect(() => {
    axios.get(constants.BASE_URL+'api/latest-blogs')
      .then((response) => {
        setLatestBlog(response.data);
      })
      .catch((error) => {
        console.log('Error fetching newest blog post:', error);
      });
  }, []);

  return (
    <>
      <Herocarousel />
      <Features />
      {/* ABOUT SECTION START */}
      <div className="about pb-lg-4 about__abstract__bg">
        <div className="container">
          <div className="about__wrapper">
            <div className="row gy-4 align-items-center about-item">
              <div className="col-lg-5 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200">
                <p className="about__right__small">Welcome to Osmossion</p>
                <h3 style={{color:'#44546d'}}>Best Care For Your Good Health</h3>
                <p>
                  we believe that quality dialysis care should be accessible to
                  everyone. That's why we work closely with insurance providers
                  and offer flexible payment options to ensure that our services
                  are affordable and accessible to all patients. We're also
                  committed to staying up-to-date with the latest advances in
                  kidney disease treatment, and we continually invest in
                  training and technology to provide the best possible care to
                  our patients.
                </p>
                <button className="about__get__started" onClick={()=>navigate("/about")} >
                  <span className="me-1">Know More</span> <RxDoubleArrowRight />
                </button>
              </div>
              <div
                className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <div className="image-stack">
                  <img src={about__one} alt="" className="stack-front" />
                  <img src={about__two} alt="" className="stack-back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Services />
      <Testimonials />

       {/* BLOG SECTION START */}
       
      <div className="blogs">
        <div className="container">
          <div className="blog__wrapper">
            <div className="blog__wrapper__title">
              <h3>Recent Blog Posts</h3>
              <p className="text-secondary">
              Discover a wealth of knowledge and inspiration in our blog section, covering dialysis insights, lifestyle tips, and more. Stay informed and empowered on your journey to optimal kidney health .
              </p>
            </div>
            <div className="blog__listing">
              <div className="row">
                {latestBlog.map((blogs) => {
                  // console.log(blogs);
                  return (
                    <div className="col-md-4 mt-3" key={blogs.blog_id} onClick={()=>{
                        navigate(`/blogs/${blogs.slug}`)
                    }}>
                      <div className="blog__small__box">
                        <Card>
                          <Card.Img
                            variant="top"
                            className="blogs__images"
                            src={blogs.image_url}
                          />
                          <Card.Body>
                            <p className="blog__category">{blogs.category_name}</p>
                            <Card.Title className="blog__title">{blogs.title.length > 74 ? blogs.title.substring(0,74) + '...' : blogs.title}</Card.Title>
                            <div className="blog__details">
                              <div className="row">
                                <div className="col-md-6">
                                <h6 className="blog__author">{blogs.author}</h6>
                                </div>
                                <div className="col-md-6 text-lg-end text-start">
                                  <div className="blog__details__author">
                                    <p className="text-secondary">
                                      {new Date(blogs.published_date).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-12 text-center mt-5">
                 <NavLink to="/blogs" className="view__all__blogs__button">View All Blogs <span className="ms-2"> <RxDoubleArrowRight/></span></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ/>
      <MyContact />
    </>
  );
};

export default Home;
