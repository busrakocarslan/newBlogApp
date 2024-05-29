import React from 'react'
import { RiHeartAdd2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';

const LikeCom = ({ handleLike, isLiked,likeCount }) => {
    const { likes } = useSelector((state) => state.blogs);
  return (
    <div>
      <button
        className="flex justify-center items-center gap-1"
        onClick={handleLike}
      >
        <RiHeartAdd2Line className={isLiked ? "text-red-500" : "text-black"} />
        {likeCount}
      </button>
    </div>
  );
};

export default LikeCom;
