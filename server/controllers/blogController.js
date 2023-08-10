const db = require("../db/connection");

// ADD NEW BLOGS

exports.addNewBlog=(req,res)=>{
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
}

// VIEW BLOG DETAILS PAGE 

exports.viewSingleBlogDetails=(req,res)=>{

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
}

// DELETE SINGLE BLOG FROM DASHBOARD

exports.deleteSingleBlog=(req,res)=>{
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
 
}

// FETCH LATEST BLOGS

exports.fetchLatestBlogs=(req,res)=>{
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
  }

// LIST OF BLOGLIST

exports.blogList=(req,res)=>{
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
}

// FILTERED BLOGS BASED ON CATEGORY

exports.filteredBlogBasedOnCategory=(req,res)=>{
  
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
}