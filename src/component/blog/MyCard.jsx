import React, { useEffect, useState } from "react";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useBlogRequest from "../../services/useBlogRequest";
import { getLikeSuccess } from "../../features/blogSlice";

const MyCard = ({
  _id,
  image,
  title,
  content,
  createdAt,
  countOfVisitors,
  comments,
  likes,
}) => {
  const { likeBlogs, getLikeBlogs, getBlogs,getBlogUser } = useBlogRequest();
  const { blog, users, currentPage } = useSelector((state) => state.blogs);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Kullanıcının bu blogu beğenip beğenmediğini kontrol et ve isLiked state'ini ayarla
    if (user && likes) {
      setIsLiked(likes.some((like) => like.userId === user._id));
    }
  }, [likes, user]);

  const handleLike = async (_id) => {
    await likeBlogs(_id);
    const updatedLikes = await getLikeBlogs(_id);
    dispatch(getLikeSuccess(updatedLikes));
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    getBlogUser(users[0]?._id);
  }, [isLiked]);

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
          <p className="text-gray-400 text-sm mt-1 h-[100px] line-clamp-5">
            {content}
          </p>
        </div>
        <div className="flex justify-between px-5 items-center">
          <div className="flex justify-between text-xl gap-3 items-center">
          <button
        className="flex justify-center items-center gap-1"
        onClick={()=>handleLike(_id)}
      >
         <RiHeartAdd2Line className={user && likes.includes(users[0]?._id) ? "text-red-500" : "text-black"} />
        {likes?.length}
            </button>
            <div className="flex justify-center gap-1 items-center">
              <LiaCommentsSolid />
              {comments.length}
            </div>
            <div className="flex justify-center items-center gap-1">
              <FiEye />
              {countOfVisitors}
            </div>
          </div>
          <button
            className="buttonbg hoverEffect"
            onClick={() => navigate(`/blogdetails/${_id}`)}
          >
            Devamı
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyCard;
