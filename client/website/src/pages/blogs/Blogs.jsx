import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./Blogs.css";
import { BsShieldPlus } from "react-icons/bs";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import constants from "../../constants/constants";
const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);
  
  useEffect(() => {
    axios
      .get(constants.BASE_URL+"api/bloglist")
      .then((response) => {
        setBlogList(response.data);
      })
      .catch((error) => {
        console.log("Error Fetching bloglist :", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(constants.BASE_URL+ "api/latest-blogs")
      .then((response) => {
        setLatestBlog(response.data);
      })
      .catch((error) => {
        console.log("Error fetching newest blog post:", error);
      });
  }, []);

  // FETCHING ALL CATEGORIES

  const fetchCategories = async () => {
    try {
      const response = await fetch(constants.BASE_URL+ "api/blog/category");
      const data = await response.json();

      setCategoryList(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <>
      <div className="blog__details__wrapper">
        <Breadcrumbs title="All Blogs" componentName="All Blogs" />
        <div className="blog__details">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-5">
              <div className="col-lg-8">
                <article className="bloglisting_left py-4">
                  <div className="row">
                    {blogList.slice().reverse().map((blogs) => {
                      // console.log(blogs);
                      return (
                        <div className="col-md-6 mt-3"
                          key={blogs.blog_id}
                          onClick={() => {
                            navigate(`/blogs/${blogs.slug}`);
                          }}
                        >
                          <div className="blog__small__box">
                            <Card>
                              <Card.Img
                                variant="top"
                                className="blogs__images"
                                src={blogs.image_url}
                              />
                              <Card.Body>
                                <p className="text-secondary">
                                  {blogs.category_name}
                                </p>
                                <Card.Title>
                                  {blogs.title.length > 74
                                    ? blogs.title.substring(0, 74) + "..."
                                    : blogs.title}
                                </Card.Title>
                                <div className="blog__details">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <h6>{blogs.author}</h6>
                                    </div>
                                    <div className="col-md-6 text-lg-end text-start">
                                      <div className="blog__details__author">
                                        <p className="text-secondary">
                                          {new Date(
                                            blogs.published_date
                                          ).toLocaleDateString("en-US", {
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
                </article>
                {/* <!-- End post article --> */}
              </div>

              <div className="col-lg-4">
                <div className="sidebar sidebarblogs_right">
                  <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      {categoryList.map((categoryName) => {
                        return (
                          <li key={categoryName[0]}>
                              <span
                                className="me-2"
                                style={{ color: "#0c0e87" }}
                              >
                                <BsShieldPlus />
                              </span>
                            <button
                              className="category__list__button mb-3"
                              onClick={() => {
                                navigate(`/blog/${categoryName[0]}`);
                              }}
                            >
                            
                              {categoryName[1]}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}

                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title mb-4">Recent Posts</h3>

                    {latestBlog.map((post) => {
                      return (
                        <div className="post-item" key={post.blog_id}>
                          <img
                            src={post.image_url}
                            alt="single-post"
                            className="flex-shrink-0"
                          />
                          <div>
                            <h4>
                              <Link to={`/blogs/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h4>
                            <p className="latest__post__date">
                              {new Date(post.published_date).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* <!-- End sidebar recent posts--> */}
                </div>
                {/* <!-- End Sidebar -->/ */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
