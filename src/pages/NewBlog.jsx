import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string,ref } from "yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import useBlogRequest from "../services/useBlogRequest";


const statuses = [
  { id: 1, value: 'draft', label: 'Draft' },
  { id: 2, value: 'published', label: 'Published' },
];
const validationSchema = yup.object({
  title: yup.string().required('Required'),
  imageUrl: yup.string().url('Invalid URL').required('Required'),
  category: yup.string().required('Required'),
  status: yup.string().required('Required'),
  content: yup.string().required('Required'),
});

const NewBlog = ({ values, handleChange, handleBlur, touched, errors }) => {
  const { getCategories }=useBlogRequest()
  const { categories }=useSelector(state=>state.blogs)

  useEffect(() => {
    getCategories()
    
  }, [])
  
  return (
    <Formik
      initialValues={{
        title: '',
        imageUrl: '',
        category: '',
        status: '',
        content: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Form submit işlemi
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-pink-50 bg-cover my-5 w-[40%] m-auto p-3">
          <div className="formContainer">
            <label htmlFor="title" className="label">New Blog Title</label>
            <Field
              id="title"
              name="title"
              type="text"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="title" component="div" className="text-red-600" />
          </div>

          <div className="formContainer">
            <label htmlFor="imageUrl" className="label">Image URL</label>
            <Field
              id="imageUrl"
              name="imageUrl"
              type="text"

              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="imageUrl" component="div" className="text-red-600" />
          </div>

          <div className="formContainer">
            <label htmlFor="category" className="label">Category</label>
            <Field
              as="select"
              id="category"
              name="category"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="text-red-600" />
          </div>

          <div className="formContainer">
            <label htmlFor="status" className="label">Status</label>
            <Field
              as="select"
              id="status"
              name="status"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            >
              <option value="">Select a status</option>
              {statuses.map((status) => (
                <option key={status.id} value={status.value}>
                  {status.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="status" component="div" className="text-red-600" />
          </div>

          <div className="formContainer">
            <label htmlFor="content" className="label">Content</label>
            <Field
              as="textarea"
              id="content"
              name="content"
              rows="5"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage name="content" component="div" className="text-red-600" />
          </div>

          <button
            type="submit"
            className="bg-[#781762] w-full hoverEffect transition-all text-white py-2 px-4 rounded"
            disabled={isSubmitting}
          >
            Gönder
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewBlog;
