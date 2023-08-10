import React, { useState, useEffect } from "react";
import { useParams , useNavigate , Link } from "react-router-dom";
import axios from "axios";
import "./FilteredBlogs.css";
import Card from "react-bootstrap/Card";
import { BsShieldPlus } from "react-icons/bs";
import constants from "../../constants/constants";


const FilteredBlogs = () => {
  const { category } = useParams();
  const [filteredBlogList, setFilteredBlogList] = useState([]);

  const [latestBlog, setLatestBlog] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          constants.BASE_URL+`api/blog/${category}`
        );
        setFilteredBlogList(response.data);
      } catch (error) {
        console.error("Error fetching filtered blog posts:", error);
      }
    };

    fetchBlogPost();
  }, [category]);

    // FETCHING ALL CATEGORIES

    const fetchCategories = async () => {
      try {
        const response = await fetch(constants.BASE_URL+"api/blog/category");
        const data = await response.json();
  
        setCategoryList(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // FETCHING RECENT BLOG POSTS LIST (SIDEBAR)
    useEffect(() => {
      axios
        .get(constants.BASE_URL+"api/latest-blogs")
        .then((response) => {
          setLatestBlog(response.data);
        })
        .catch((error) => {
          console.log("Error fetching newest blog post:", error);
        });
    }, []);

  return (
    <>
      <div className="filtered__blogs__wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="bloglisting_left">
                <h4 className="filtered__bloglist__header">Recent Blog Posts</h4>
                <div className="filtered__bloglist">
                  <div className="row">
                    {filteredBlogList.slice().reverse().map((blogs) => {
                      // console.log(blogs);
                      return (
                        <div className="col-md-6 mt-3" key={blogs.id} 
                        onClick={() => {
                          navigate(`/blogs/${blogs.slug}`);
                        }}>
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
                      );
                    })}
                  </div>
                </div>
              </article>
              {/* <!-- End post article --> */}
            </div>

            <div className="col-lg-4">
              <div className="sidebar sidebar_right">
                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-4">
                     {categoryList.map((category)=>{
                      // console.log(category);
                      return(
                        <li key={category[0]}>
                              <span
                            className="me-2"
                            style={{ color: "#0c0e87" }}
                          >
                            <BsShieldPlus />
                          </span>
                        <button
                          className="category__list__button mb-3"
                          onClick={() => {
                            navigate(`/blog/${category[0]}`);
                          }}
                        >
                          {category[1]}
                        </button>
                 </li>
                      )
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
                            alt="blog-post"
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
                  {/* <!-- End recent post item--> */}
                </div>
                {/* !-- End sidebar recent posts--> */}
              </div>
              {/* <!-- End Sidebar --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteredBlogs;
