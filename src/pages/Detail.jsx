import React, { useEffect, useState } from "react";
import useBlogRequest from "../services/useBlogRequest";
import { useDispatch, useSelector } from "react-redux";
import { RiHeartAdd2Line } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { FiEye } from "react-icons/fi";
import { Link, Outlet, useParams } from "react-router-dom";
import DeleteModal from "../component/blog/DeleteModal";
import UpdateModal from "../component/blog/UpdateModal";

const Detail = () => {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { id } = useParams();
  const { detailBlog, getUsers,getCategories } = useBlogRequest();
  const { blogDetail, users, blog } = useSelector((state) => state.blogs);
  const { categories } = useSelector((state) => state.blogs);
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    detailBlog(id);
    getUsers();
    getCategories();
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
            <Link
              to="comments"
              className="flex justify-center gap-1 items-center"
            >
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
      <Link to="/" className="buttonbg hoverEffect">
        Geri
      </Link>
      {users[0]?._id === blogDetail?.userId?._id && (
        <>
          <div className="flex justify-end mt-2 flex-col-1 gap-2">
            <button className="buttonbg hoverEffect w-[50px]" onClick={() => setDeleteOpen(true)}>
              Sil
            </button>
            <button
              className="buttonbg hoverEffect"
              onClick={() => setUpdateOpen(true)}
            >
              Güncelle
            </button>
          </div>
          <UpdateModal
           open={updateOpen}
           setOpen={setUpdateOpen}
           blogDetail={blogDetail}
           categories={categories}
           users={users}
           
          />
        <DeleteModal 
            open={deleteOpen}
            setOpen={setDeleteOpen}
            users={users}
            onDelete={() => {
              // Silme işlemi
              setDeleteOpen(false);
            }}
          />
        </>
      )}
      <Outlet />
    </section>
  );
};

export default Detail;
