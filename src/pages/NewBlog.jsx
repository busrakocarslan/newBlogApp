import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import useBlogRequest from "../services/useBlogRequest";

const statuses = [
  { name: "Draft", states: false },
  { name: "published",  states: true },
];
const validationSchema = yup.object({
  title: yup.string().required("Lütfen giriş yapınız"),
  image: yup.string().url("URL giriniz").required("Lütfen giriş yapınız"),
  categoryId: yup.string().required("Lütfen giriş yapınız"),
  isPublished: yup.string().required("Lütfen giriş yapınız"),
  content: yup.string().required("Lütfen giriş yapınız"),
});

const NewBlog = () => {
 
  const { getCategories,createBlogs } = useBlogRequest();
  const { categories } = useSelector((state) => state.blogs);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Formik
      initialValues={{
        title: "",
        image: "",
        categoryId: "",
        isPublished: "",
        content: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {

        // Form submit işlemi
        createBlogs(values)
       
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-pink-50 bg-cover my-5 w-[40%] m-auto p-3">
          <div className="formContainer">
            <label htmlFor="title" className="label">
              New Blog Title
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-600"
            />
          </div>
       

          <div className="formContainer">
            <label htmlFor="image" className="label">
              Image URL
            </label>
            <Field
              id="image"
              name="image"
              type="url"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="image"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="formContainer">
            <label htmlFor="categoryId" className="label">
              Category
            </label>
            <Field
              as="select"
              id="categoryId"
              name="categoryId"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="categoryId"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="formContainer">
            <label htmlFor="isPublished" className="label">
              Status
            </label>
            <Field
              as="select"
              id="isPublished"
              name="isPublished"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            >
              <option value="">Select a status</option>
              {statuses.map((status,index) => (
                <option key={index} value={status.states}>
                  {status.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="isPublished"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="formContainer">
            <label htmlFor="content" className="label">
              Content
            </label>
            <Field
              as="textarea"
              id="content"
              name="content"
              rows="5"
              className="input block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-600"
            />
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
