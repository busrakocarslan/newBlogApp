import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogRequest from "../services/useBlogRequest";
import { useSelector } from "react-redux";
import MyCard from "../component/blog/MyCard";

const MyBlogs = () => {
  const { id } = useParams() 
  const { blog,users, } = useSelector((state) => state.blogs);
  const { getBlogUser,getUsers } = useBlogRequest();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      getBlogUser(users[0]._id);
    }
  }, [users]);

  return <div className="flex justify-around items-center mt-2 flex-wrap"> {blog?.length > 0 ? (
    blog?.map((blg) => (
      <MyCard key={blg._id} {...blg}/>     
    ))
  ) : (
    <p>Blogunuz bulunmamaktadır.</p>
  )}</div>;
};

export default MyBlogs;
