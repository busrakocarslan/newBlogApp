import React, { useState } from "react";
import CommentForm from "./CommentForm";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import useBlogRequest from "../../services/useBlogRequest";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommentCard = () => {
  const [comment, setcomment] = useState();
  const { blogDetail } = useSelector((state) => state.blogs);
  const { createComments } = useBlogRequest();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newComment = {
      blogId: blogDetail._id,
      comment: comment,
    };
    createComments(newComment);

    setcomment("");
  };
  return (
    <div>
      <form className="py-3" onSubmit={handleSubmit}>
        <textarea
          type="text"
          name={comment}
          value={comment}
          required
          placeholder="yorum ekle..."
          onChange={(e) => setcomment(e.target.value)}
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-fuchsia-800 focus:border-y-2 shadow-sm rounded-lg caret-fuchsia-900"
        ></textarea>

        <button className="w-full buttonbg hoverEffect">Gönder</button>
      </form>

      <CommentForm />
      <DeleteModal />
      <UpdateModal />
    </div>
  );
};

export default CommentCard;
