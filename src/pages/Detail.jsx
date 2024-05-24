import React, { useEffect, useState } from "react";
import useBlogRequest from "../services/useBlogRequest";
import { useDispatch, useSelector } from "react-redux";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { Link, Outlet, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { detailBlog, getUsers } = useBlogRequest();
  const { blogDetail,users } = useSelector((state) => state.blogs);
  const dispatch=useDispatch()
 
  const handleComment=()=>{}

  useEffect(() => {
    detailBlog(id);
    getUsers();
  }, []);



  const date = new Date(blogDetail?.createdAt);
  const formattedDate = date.toLocaleString("tr-TR");

  return (
    <section className="min-w-[500px] max-w-[500px]  m-auto mt-5 p-5">
      <div className="mb-5">
        <img
          src={blogDetail?.image}
          loading="lazy"
          alt={blogDetail?.title}
          className="w-full h-48 rounded-t-md"
        />
        <p>{formattedDate}</p>

        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{blogDetail?.title}</h3>
          <p className="text-gray-400 text-sm mt-1 text-justify">
            {blogDetail?.content}
          </p>
        </div>
        <div className="flex justify-between px-5 items-center">
          <div className="flex justify-between text-xl gap-3 items-center">
            <button className="flex justify-center items-center gap-1">
              <RiHeartAdd2Line />
              {blogDetail?.likes?.length}
            </button>
            <Link to="comments" className="flex justify-center gap-1 items-center">
              <LiaCommentsSolid />
              {blogDetail?.comments?.length}
            </Link>
            <div className="flex justify-center items-center gap-1">
              <FiEye />
              {blogDetail?.countOfVisitors}
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="buttonbg hoverEffect">Geri</Link>
      <Outlet/>
    </section>
  );
};

export default Detail;
