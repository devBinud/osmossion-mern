const db = require("../db/connection");

// SUBMIT CATEGORY (DASHBOARD)

exports.categorySubmit=(req,res)=>{
  const { category_name, slug, category_content } = req.body;

  const sql = "INSERT INTO categories (category_name, slug, category_content) VALUES (?, ?, ?)";

  db.query(sql, [category_name, slug, category_content], (error, results) => {
    if (error) {
      console.error("Error inserting data:", error);
      return res.status(500).send("Error inserting data");
    }

    console.log("Data inserted successfully");
    return res.status(200).send("Data inserted successfully");
  });
}

// VIEW ALL CATEGORIES (DASHBOARD)

exports.viewAllCategories=(req,res)=>{
  const sql = `SELECT * FROM categories`;
  
  db.query(sql,(err,results)=>{
    if(err){
      console.log( "Error executing MySQL query: ", err);
      res.status(500).json({ error: "Failed to retrieve categories" });
    }else {
      res.json(results);
    }
  })
}

// DELETE CATEGORY (DASHBOARD)

exports.deleteSingleCategory=(req,res)=>{
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
}

// GET UNIQUE CATEGORIES 
exports.getUniqueCategories=(req,res)=>{
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
}