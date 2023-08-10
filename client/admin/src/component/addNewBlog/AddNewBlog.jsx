import React, { useState, useEffect } from "react";
import "./AddNewBlog.css";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BsCloudUpload } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contstants from "../../constants/contstants";


const AddNewBlog = () => {
  const notify = () =>
  toast.success("Blog added successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "colored",
  }
  );

  const [categories, setCategories] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");

  //  fetching categories to dropdown
  useEffect(() => {
    axios
      .get(contstants.BASE_URL + "api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log("Error Fetching categories :", error);
      });
  }, []);

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wdlaj9ce");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dev-binudstorage/image/upload",
        formData
      );
      const imageUrl = response.data.secure_url;
      // console.log(imageUrl);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //  SUBMITTING THE FORM MAIN FORM INCLUDING IMAGE URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      content: content,
      author: author,
      image_url: imageUrl,
      category: category,
      slug: slug,
    };

    axios
      .post(contstants.BASE_URL + "api/add-new-blog", formData)
      .then((response) => {
        console.log("Data successfully submitted");
        setTitle(" ");
        setAuthor(" ");
        setSlug(" ");
        setCategory(" ");
        setContent(" ");
        setImageSelected(null);
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  const handleBlogNameChange =(e)=>{
    const name = e.target.value;
    setTitle(name);
    setSlug(name.toLowerCase().replace(/\s+/g, '-'));
  }

  return (
    <>
      <div className="createnewblog__wrapper">
        <div className="sidebar fixed-top">
          <Sidebar />
        </div>
        <div className="display__component__content">
          <div className="top__content__wrapper">
            <Navbar />
          </div>
          <div className="main__content__wrapper">
            <h4>Add New Blog</h4>
            <div className="main__content">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="title">
                        Title <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Enter title"
                        value={title}
                        onChange={handleBlogNameChange}
                        // onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="title">
                        Author Name <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="upload-image">
                        Upload Image
                        <span className="text-danger">
                          <span className="image__instruction">
                            ( Dimesnions : 1024 × 768 | File-size : 300KB-500KB )
                          </span>
                        </span>
                      </label>
                      <input
                        type="file"
                        className="form-control-file shadow-none"
                        onChange={(e) => {
                          setImageSelected(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button className="upload__image__button"onClick={uploadImage}>
                      <span className="mr-2"> <BsCloudUpload /> </span> Upload </button>
                    {imageUrl && (
                      <p className="mt-2 text-success">
                        <span className="mr-1 text-success font-weight-bold">
                          <BsCheckCircle />
                        </span>{" "}
                        Image uploaded successfully
                      </p>
                    )}
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="title">
                        Slug <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Enter slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label
                        className="font-weight-normal"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Category <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control shadow-none"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {categories.map((category) => {
                          return (
                            <option
                              key={category.id}
                              label={category.category_name}
                              value={category.id}
                            >
                              {category.category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    className="font-weight-normal"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    Blog Content <span className="text-danger"> *</span>
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => {
                      const content = editor.getData();
                      setContent(content);
                      // console.log( { event, editor, content } );
                    }}
                  />
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="create__blog__button" onClick={notify}>
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewBlog;
