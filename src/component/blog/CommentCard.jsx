import React, { useState } from "react";
import CommentForm from "./CommentForm";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import useBlogRequest from "../../services/useBlogRequest";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCommentSuccess } from "../../features/blogSlice";


const CommentCard = () => {
  const [comment, setComment] = useState("");
  const { blogDetail } = useSelector((state) => state.blogs);
  const { detailBlog } = useBlogRequest();
  const { createComments } = useBlogRequest();
  const navigate = useNavigate();
  const dispatch = useDispatch()
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      blogId: blogDetail._id,
      comment: comment,
    };
    const response = await createComments(newComment);
    if (response) {
      dispatch(addCommentSuccess(response)); // Redux store'a yeni yorumu ekle
    }
    detailBlog(blogDetail?._id)
    setComment(""); // Yorum alanını temizle
  };

  return (
    <div className="mt-5">
      
      <form className="py-3" onSubmit={handleSubmit}>
        <textarea
          type="text"
          name={comment}
          value={comment}
          required
          placeholder="yorum ekle..."
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-fuchsia-800 focus:border-y-2 shadow-sm rounded-lg caret-fuchsia-900"
        ></textarea>

        <button type="submit" className="w-full buttonbg hoverEffect">Gönder</button>
      </form>
      

      {/* <DeleteModal />
      <UpdateModal /> */}
      <CommentForm />
    </div>
  );
};

export default CommentCard;
