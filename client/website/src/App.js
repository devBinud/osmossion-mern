import React from 'react';
import {Routes, Route} from "react-router-dom";
import MyNavbar from './components/navbar/MyNavbar'
import MyFooter from './components/footer/MyFooter'
import Home from './components/home/Home';
import About from './pages/about/About';
import KidneyHealthEducation from './pages/kidneyhealtheducation/KidneyHealthEducation';
import Blogs from "./pages/blogs/Blogs"
import Contact from "./pages/contact/Contact"
import NotFound from './components/NotFound/NotFound';
import BlogDetails from './pages/blogDetails/BlogDetails';
import Services from './components/Ourservices/OurServices';
import FilteredBlogs from './pages/filteredBlogs/FilteredBlogs';
import HomeHemoDialysis from './components/homeHemoDialysis/HomeHemoDialysis';
import IncenterDialysis from "./components/inCenterDialysis/InCenterDialysis";


const App = () => {
  return (
    <>
    <MyNavbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/kidney-health-education" element={<KidneyHealthEducation/>}/>
        <Route path="/our-services" element={<Services/>}/>
        <Route path="/home-hemodialysis" element={<HomeHemoDialysis/>}/>
        <Route path="/in-center-dialysis" element={<IncenterDialysis/>}/>
        <Route path="/blogs" element={<Blogs/>}> </Route>
        <Route path="blogs/:slug" element={<BlogDetails/>}></Route>
        <Route path="/blog/:category" element={<FilteredBlogs/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    
    <MyFooter/>
    </>
  )
}

export default App