import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  blogPending,
  blogRegister,
  getBlogSuccess,
} from "../features/blogSlice";
import { toastErrorNotify } from "../helper/ToastNotify";

const useBlogRequest = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosToken } = useAxios();

  //!-----------Blogların çağırılması işlemi-----
  const getBlogs = async () => {
    dispatch(blogPending());
    try {
      const { data } = await axiosPublic("blogs/?page=1&limit=10");
      dispatch(getBlogSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! there is something wrong for adding");
      dispatch(blogRegister());
      console.log(error);
    }
  };

  return {getBlogs};
};

export default useBlogRequest;
