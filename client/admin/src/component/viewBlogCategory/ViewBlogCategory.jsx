import React, { useState, useEffect } from "react";
import "./ViewBlogCategory.css";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import contstants from "../../constants/contstants";

const ViewBlogCategory = () => {
  const [categoryContent, setCategoryContent] = useState([]);

  // FETCHING DATA USING useEffect HOOK

  useEffect(() => {
    fetchCategories();
  }, []);


//  GET THE ALL CATEGORIES

 const fetchCategories = async () => {
  try {
    const response = await axios.get( contstants.BASE_URL + 'api/categories');
    setCategoryContent(response.data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

  // DELETE CATEGORY
 
  const deleteSingleCategory =(categoryId)=>{
    const shouldDelete=window.confirm("Are you sure you want to delete this category ?");
    if(shouldDelete){
      axios.delete( contstants.BASE_URL + `api/categorylist/${categoryId}`)
      .then(response=>{
        fetchCategories();
      })
      .catch(error=>{
        console.log("Error Deleting Category",error);
      })
    }   
  }
    
  return (
    <>
      <div className="viewblogcategory__wrapper">
        <div className="sidebar fixed-top">
          <Sidebar />
        </div>
        <div className="display__component__content">
          <div className="top__content__wrapper">
            <Navbar />
          </div>
          <div className="main__content__wrapper">
            <h4>View Blog Category</h4>
            <div className="main__content">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      #
                    </th>
                    <th
                      style={{ width: "180px" }}
                      className="text-uppercase font-weight-bold"
                      scope="col"
                    >
                      Category Name
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col" style={{width:'170px'}}>
                      Slug
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Category Content
                    </th>
                    <th className="text-uppercase font-weight-bold" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categoryContent.slice().reverse().map((categoryList) => {
                    return (
                      <tr key={categoryList.id} value={categoryList.id}>
                        <th scope="row">{categoryList.id}</th>
                        <td> {categoryList.category_name}</td>
                        <td>{categoryList.slug}</td>
                        <td dangerouslySetInnerHTML={{ __html: categoryList.category_content }}></td>

                        <td className="text-center">
                          <button className="delete__category__button" onClick={() => deleteSingleCategory(categoryList.id)}
                          ><span className="delete__category__icon"><RiDeleteBin6Line /> </span>
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

export default ViewBlogCategory;
