import React, { useState } from 'react';
import './AddBlogCategory.css';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contstants from '../../constants/contstants';

  const AddBlogCategory = () => {
    const notify = () => {
      toast.success('Category added successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: 'colored',
      });
    };

    const [categoryName, setCategoryName] = useState('');
    const [slug, setSlug] = useState('');
    const [categoryContent, setCategoryContent] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        category_name: categoryName,
        slug: slug,
        category_content: categoryContent,
      };

      axios
        .post(contstants.BASE_URL + 'api/category-submit', formData)
        .then((response) => {
          console.log('Data successfully submitted');
          setCategoryName('');
          setSlug('');
          setCategoryContent('');
        })
        .catch((error) => {
          console.error('Error submitting data:', error);
        });
    };

    const handleCategoryNameChange =(e)=>{
      const name = e.target.value;
      setCategoryName(name);
      setSlug(name.toLowerCase().replace(/\s+/g, '-'));
    }

    return (
      <>
        <div className="addblogcategory__wrapper">
          <div className="sidebar fixed-top">
            <Sidebar />    
          </div>
          <div className="display__component__content">
            <div className="top__content__wrapper">
              <Navbar />
            </div>
            <div className="main__content__wrapper">
              <h4>Add Blog Category</h4>
              <div className="main__content">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="title">
                          Category Name <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Enter Name"
                          value={categoryName}
                          onChange={handleCategoryNameChange}
                          // onChange={(e) => { setCategoryName(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="title">
                          Slug <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Enter slug"
                          value={slug}
                          onChange={(e) => {
                            setSlug(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Category Content <span className="text-danger"> *</span>
                    </label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={categoryContent}
                      onChange={(event, editor) => {
                        const content = editor.getData();
                        setCategoryContent(content);
                      }}
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" onClick={notify} className="create__blog__button">
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

  export default AddBlogCategory;
