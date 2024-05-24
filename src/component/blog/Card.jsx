import React from "react";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import useBlogRequest from "../../services/useBlogRequest";

const Card = ({ _id, image, title, content, createdAt,countOfVisitors,comments,likes }) => {
  const navigate=useNavigate()
  
  const { detailBlog } = useBlogRequest();
    const date = new Date(createdAt);
  const formattedDate = date.toLocaleString("tr-TR");

   
  return (
    <section className="min-w-[300px] max-w-[300px] h-[500px]">
      <div>
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-48 rounded-t-md"
        />
        <p>{formattedDate}</p>

        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{title}</h3>
          <p className="text-gray-400 text-sm mt-1 h-[100px] line-clamp-5">{content}</p>
        </div>
        <div className="flex justify-between px-5 items-center">
          <div className="flex justify-between text-xl gap-3 items-center">
          <button className="flex justify-center items-center gap-1"><RiHeartAdd2Line />{likes.length}</button> 
          <div className="flex justify-center gap-1 items-center"><LiaCommentsSolid />{comments.length}</div> 
          <div className="flex justify-center items-center gap-1"><FiEye />{countOfVisitors}</div> 
          </div>
          <button className="buttonbg hoverEffect" onClick={()=>navigate(`/blogdetails/${_id}`)}>Devamı</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
