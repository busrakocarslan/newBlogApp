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
  const getBlogs = async (page,limit) => {
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

  return {getBlogs};
};

export default useBlogRequest;
