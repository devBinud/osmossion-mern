const express = require('express');
const router = express.Router();


const categoryController = require('../controllers/categoryController');

// SUBMIT CATEGORY (DASHBOARD)
router.post('/category-submit', categoryController.categorySubmit);

// VIEW ALL CATEGORIES 
router.get('/categories',categoryController.viewAllCategories);

// DELETE SINGLE CATEGORY FROM DASHBOARD
 router.delete('/api/categorylist/:id',categoryController.deleteSingleCategory);

//  GET UNIQUE CATEGORY LIST (WE GONNA FETCH FROM BLOG , CATEGORIES AND BLOG TABLE IS JOINED)
router.get('/api/blog/category',categoryController.getUniqueCategories);




module.exports = router;
