const express = require("express");
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors=require("cors");
const db = require("./db/connection");

// Middleware to parse the request body

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors()); 

// Load environment variables from .env file
// dotenv.config({path:"./.env.development"}); 
dotenv.config();

// Require user routes
const userRoutes = require('./routes/userRoutes');

// Use user routes
app.use('/', userRoutes);

// API ENDPOINT FOR ADD CATEGORIES

app.post('/api/category-submit',(req,res)=>{
  const { category_name, slug, category_content } = req.body;

  // Execute the SQL INSERT statement

    const sql = "INSERT INTO categories (category_name, slug, category_content) VALUES (?, ?, ?)";

    db.query(sql, [category_name, slug, category_content], (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        return res.status(500).send("Error inserting data");
      }

      console.log("Data inserted successfully");
      return res.status(200).send("Data inserted successfully");
    });
})

// API FOR DELETE SINGLE CATEGORY

app.delete("/api/categorylist/:id",(req,res)=>{

  const categoryId = req.params.id ;

  const sql = `DELETE FROM categories WHERE id = ?`;

  db.query(sql,[categoryId],(error,results)=>{
    if(error){
      console.log("Error Deleting category",error);
      res.sendStatus(500);
    }
    else{
      res.sendStatus(200);
      console.log('Category Deleted successfully');
    }
  })
})

// API ENDPOINT FOR RETREIVING CATEGORIES

app.get('/api/categories',(req,res)=>{
  const query = "SELECT * FROM categories";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      res.status(500).json({ error: "Failed to retrieve categories" });
    } else {
      res.json(results);
    }
  });
})

// API TO ADD NEW BLOG 

app.post("/api/add-new-blog",(req,res)=>{
  const { title, content, author, image_url, category, slug } = req.body;

    // Execute the SQL INSERT statement
    const sql = 'INSERT INTO blog (title, blog_content, author, image_url, category, slug) VALUES (?, ?, ?, ?, ?, ?)';
  
    db.query(sql, [title, content, author, image_url, category, slug], (error, results) => {
      if (error) {
        console.error('Error inserting blog data:', error);
        return res.status(500).send('Error inserting blog data');
      } else {
        console.log('Blog data inserted successfully');
        return res.status(200).send('Blog data inserted successfully');
      }
    });
})

// API FOR DELETE THE SINGLE BLOGS FROM DASHBOARD

app.delete('/api/blogs/:id',(req,res)=>{
  // Set the necessary headers to allow the DELETE request from any origin
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

   const blogId = req.params.id;

   const sql = `DELETE FROM blog WHERE id = ?`;

     // Execute the delete query with the blogId parameter
  
     db.query(sql, [blogId], (error, results) => {
    if (error) {
      console.error('Error deleting blogs:', error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200); // Successful deletion
    }
  });

})

// FETCH LIMIT BLOGS (LATEST )

app.get("/api/latest-blogs", (req, res) => {
  const query = `
  SELECT b.id AS blog_id, b.title, b.author, b.image_url, b.slug, b.published_date, 
  b.blog_content,
  c.category_name, c.id AS category_id
  FROM blog AS b
  INNER JOIN categories AS c ON b.category = c.id
  ORDER BY b.published_date DESC LIMIT 6;
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching latest blog posts:", error);
      return res.status(500).send("Error fetching latest blog posts");
    }
    res.json(results);
  });
});


// API ENDPOINT FOR GET CATEGORIES(UNIQUE) FROM BLOGPOSTS

app.get("/api/blog/category",(req,res)=>{
  const query = "SELECT c.id, c.category_name, c.slug FROM blog,categories c WHERE blog.category=c.id GROUP BY blog.category LIMIT 10";
  db.query(query,(error,results)=>{
     if(error){
      console.error("Error fetching categories",error);
      res.status(500).json({error : "Failed to fetch categories"});
     }
     else{
      const categories = results.map((result)=>[result.slug,result.category_name]);
      res.json({categories});
     }
  })

})

// API ENDPOINT FOR RETRIVING ALL THE ADDED BLOGPOST

app.get('/api/bloglist', (req, res) => {
  const query = `
  SELECT blog.id AS blog_id, blog.title,blog.author, blog.image_url, blog.slug, blog.published_date , blog.blog_content, 
  categories.category_name, categories.id AS category_id
  FROM blog
  INNER JOIN categories ON blog.category = categories.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).json({ error: 'Failed to retrieve blogs' });
    } else {
      res.json(results);
    }
  });
});

// API TO DISPLAY BLOG-DETAILS OF EACH BLOGPOST

app.get("/api/blogs/:slug", (req, res) => {
  const slug = decodeURIComponent(req.params.slug);

  db.query(
    "SELECT blog.*, categories.category_name FROM blog JOIN categories ON blog.category = categories.id WHERE blog.slug = ?",
    [slug],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ error: "Blog post not found" });
        return;
      }

      const blogPost = result[0];
      res.json(blogPost);
    }
  );
});


// ROUTE TO FETCH FILTERED BLOGS BASED ON CATEGORY

app.get("/api/blog/:category", (req, res) => {
  const category = decodeURIComponent(req.params.category);
  // console.log('Received category:', category);

  db.query(
  "SELECT blog.*, categories.category_name FROM blog JOIN categories ON blog.category = categories.id WHERE categories.slug = ?",
    [category],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json(result);
    }
  );
});


// START THE SERVER
const port = process.env.PORT; 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})