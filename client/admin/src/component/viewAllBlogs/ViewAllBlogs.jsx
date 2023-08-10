import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewAllBlogs.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import {RiDeleteBin6Line} from 'react-icons/ri';
import contstants from "../../constants/contstants";


const ViewAllBlogs = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // FETCHING BLOGS

  const fetchBlogs = () =>{
    axios.get(contstants.BASE_URL + "api/bloglist")
    .then(response=>{
      setBlogList(response.data);
    })
    .catch(error=>{
      console.log("Error Fetching Blogs",error)
    })
  }
  // DELETING SINGLE BLOGS 

  const deleteSingleBlog =(blogId) =>{
    const shouldDelete = window.confirm("Are you sure you want to delete the blog ?");
    if(shouldDelete){
      axios.delete(contstants.BASE_URL + `api/blogs/${blogId}`)
      .then(response=>{
        fetchBlogs();
      })
      .catch(error=>{
        console.log("Error Deleting Blogs",error);
      })
    }
  }
  return (
    <>
      <div className="viewallblogs__wrapper">
        <div className="sidebar fixed-top">
          <Sidebar />
        </div>
        <div className="display__component__content">
          <div className="top__content__wrapper">
            <Navbar />
          </div>
          <div className="main__content__wrapper">
            <h4>View all Blogs</h4>
            <div className="main__content">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      #
                    </th>
                    <th style={{width: '100px'}} className="text-uppercase font-weight-bold" scope="col">
                      Image
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Title
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Slug
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Author
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Category
                    </th>
                    {/* <th className="text-uppercase font-weight-bold" scope="col">
                     Blog Description
                    </th> */}
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogList.slice().reverse().map((blogs) => {
                    // console.log(blogs.id);
                    return (
                      <tr key={blogs.blog_id}>
                        <th scope="row">{blogs.blog_id}</th>
                        <td>
                          <img src={blogs.image_url}  className="blog__image" alt="" />
                        </td>
                        <td>{blogs.title}</td>
                        <td>{blogs.slug}</td>
                        <td>{blogs.author} </td>
                        <td>{blogs.category_name}</td>
                        {/* <td dangerouslySetInnerHTML={{ __html: blogs.blog_content }}></td> */}
                        <td>
                        <button className="delete__blog__button" onClick={() => deleteSingleBlog(blogs.blog_id)}
                          ><span className="delete__blog__icon"><RiDeleteBin6Line /> </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllBlogs;
