const express = require('express');
const router = express.Router();

const blogController = require("../controllers/blogController");

// ADD NEW BLOG ENDPOINT
router.post('/add-new-blog',blogController.addNewBlog);

// BLOG DETAILS PAGE (VIEW)
router.get('/api/blogs/:slug',blogController.viewSingleBlogDetails);

// DELETE SINGLE BLOG (DASHBOARD)
router.delete('/api/blogs/:id',blogController.deleteSingleBlog);

// FETCH LIMITED BLOGS
router.get('/api/latest-blogs',blogController.fetchLatestBlogs);

// BLOG LISTS
router.get('/bloglist',blogController.blogList);

// FILTERED BLOGS BASED ON CATEGORY
router.get('/api/blog/:category',blogController.filteredBlogBasedOnCategory);



module.exports = router;
