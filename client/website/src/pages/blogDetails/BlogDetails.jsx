import React, { useEffect, useState } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css";
import {MdDomainVerification} from "react-icons/md";
import { BsShieldPlus ,  BsFillPersonFill , BsCalendar3 } from "react-icons/bs";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import constants from "../../constants/constants";


const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [latestBlog, setLatestBlog] = useState([]);
  const [categoryList,setCategoryList]= useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  // FETCHING CATEGORIES BLOGS LIST LIST

  useEffect(() => {
    axios
      .get(constants.BASE_URL + "api/latest-blogs")
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
        const response = await fetch(constants.BASE_URL
          +"api/blog/category");
        const data = await response.json();
        
        setCategoryList(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          constants.BASE_URL+`api/blogs/${slug}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [slug]);


  return (
    <>
      <div className="blog__details__wrapper">
        <Breadcrumbs title="Blog Details" componentName="Blog Details" />
        <div className="blog__details">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-5">
              <div className="col-lg-8">
                <article className="article">
                  <div className="post-img">
                    <img
                      src={blog.image_url}
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="title">{blog.title}</h2>
                  <div className="meta-top">
                    <p className="category__name"><span style={{fontSize:'20px',color:'#0c0e87'}}><MdDomainVerification/> </span> Category : <span className="blogdetails__categoryName">{blog.category_name}</span> </p>
                      <ul>
                      <li className="d-flex">
                        <p className="blogdetails__author">
                          
                        <span className="me-2" style={{color:'#0c0e87',fontSize:'18px'}}>
                          <BsFillPersonFill />
                        </span>
                         <span>
                         {blog.author}
                         </span>
                        </p>
                      </li>
                      <li className="d-flex">
                        <p className="blogdetails__date">
                        <span className="me-2" style={{color:'#0c0e87 '}}>
                          <BsCalendar3 />
                        </span>
                          {new Date(blog.published_date).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End meta top --> */}

                  <p className="mt-5 text-secondary"  dangerouslySetInnerHTML={{ __html: blog.blog_content }}></p>
                  {/* dangerouslySetInnerHTML={{ __html: blog.content }} */}
                </article>
                {/* <!-- End post article --> */}
              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      {categoryList.map((categoryName) => {
                        // console.log(categoryName);
                        return (
                          <li key={categoryName[0]} >
                            <span className="me-1" style={{ color: "#0c0e87" }}>
                                <BsShieldPlus /></span>  <button className="category__list__button mb-3" 
                            onClick={()=>{ navigate(`/blog/${categoryName[0]}`)}}
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
                            alt="post-img"
                            className="flex-shrink-0"
                          />
                          <div>
                            <h4>
                              <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
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

export default BlogDetails;
