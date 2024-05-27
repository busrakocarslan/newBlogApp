import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogRequest from "../services/useBlogRequest";
import { useSelector } from "react-redux";
import Card from "../component/blog/Card";

const MyBlogs = () => {
  const { id } = useParams() 
  const { blog,users } = useSelector((state) => state.blogs);
  const { getBlogUser,getUsers } = useBlogRequest();

  useEffect(() => {
    getUsers()
    if (users) {
      getBlogUser(users[0]?._id);// find ya da some ile dönünce almadı
    } 
  }, []);

  return <div className="flex justify-around items-center mt-2 flex-wrap"> {blog?.length > 0 ? (
    blog.map((blg) => (
      <Card key={blg._id} {...blg}/>     
    ))
  ) : (
    <p>No blogs found</p>
  )}</div>;
};

export default MyBlogs;
