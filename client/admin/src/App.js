import React from 'react';
import {Routes,Route} from "react-router-dom";
import Login from './component/login/Login';
import Dashboard from "../../admin/src/component/dashboard/Dashboard"
import Register from './component/register/Register';
import AddNewBlog from './component/addNewBlog/AddNewBlog';
import ViewAllBlogs from './component/viewAllBlogs/ViewAllBlogs';
import AddBlogCategory from './component/addBlogCategory/AddBlogCategory';
import ViewBlogCategory from './component/viewBlogCategory/ViewBlogCategory';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}> </Route>
        <Route exact path="/add-blog-category" element={<AddBlogCategory/>}></Route>
        <Route exact path="/view-blog-category" element={<ViewBlogCategory/>}></Route>
        <Route exact path="/add-new-blog" element={<AddNewBlog/>}></Route>
        <Route exact path="/view-all-blogs" element={<ViewAllBlogs/>}></Route>
      </Routes>
    </>
  )
}

export default App