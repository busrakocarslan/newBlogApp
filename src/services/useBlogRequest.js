import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  blogPending,
  blogRegister,
  getBlogSuccess,
  blogDetailSuccess,
  getUserSuccess,
  getCategoriesSuccess,
  postBlogSuccess,
  getMyBlogSuccess
} from "../features/blogSlice";
import { toastErrorNotify } from "../helper/ToastNotify";

const useBlogRequest = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosToken } = useAxios();

  //!-----------Blogların çağırılması işlemi-----
  const getBlogs = async (page, limit) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosPublic(`blogs/?page=${page}&limit=${limit}`);
      dispatch(getBlogSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! there is something wrong for adding");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  const getCategories = async () => {
    dispatch(blogPending());
    try {
      const { data } = await axiosPublic(`categories`);
      dispatch(getCategoriesSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! there is something wrong for adding");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog ayrıntısının çağırılması işlemi-----
  const detailBlog = async (id) => {
    dispatch(blogPending());

    try {
      const { data } = await axiosToken(`/blogs/${id}`);
      dispatch(blogDetailSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  const createComments = async (commentData) => {
    dispatch(blogPending());

    try {
      const { data } = await axiosToken.post(`/comments/`, commentData);
      dispatch(blogDetailSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog gönderilmesi işlemi-----
  const createBlogs = async (commentData) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken.post(`/blogs/`, commentData);
      dispatch(postBlogSuccess(data));
      detailBlog();
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog bilgilerinin güncellenmesi işlemi-----
  const putBlog = async (id) => {
    dispatch(blogPending());
    try {
      await axiosToken.put(`/blogs/${id}`);
      // dispatch(postBlogSuccess(data));
      getBlogs();
      // console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };

  const getUsers = async () => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken(`/users`);
      dispatch(getUserSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  const getBlogUser = async (id) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken(`/blogs?author=${id}`);
      dispatch(getMyBlogSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };

  return {
    getBlogs,
    detailBlog,
    getUsers,
    createComments,
    getBlogUser,
    getCategories,
    createBlogs,
    putBlog
  };
};

export default useBlogRequest;
