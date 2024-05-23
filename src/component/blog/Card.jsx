import React from "react";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";

const Card = ({ _id, image, title, content, createdAt }) => {
  return (
    <section className="min-w-[300px] max-w-[300px] h-[500px]">
      <div>
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-48 rounded-t-md"
        />

        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{title}</h3>
          <p className="text-gray-400 text-sm mt-1 h-[100px] line-clamp-5">{content}</p>
        </div>
        <div className="flex justify-between px-5 items-center">
          <div className="flex justify-between text-xl gap-3 items-center">
          <button><RiHeartAdd2Line /></button> 
          <button><LiaCommentsSolid /></button> 
          <button><FiEye /></button> 
          </div>
          <button className="buttonbg hoverEffect">Devamı</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
