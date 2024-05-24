import React, { useEffect } from "react";
import useBlogRequest from "../services/useBlogRequest";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/blog/Card";
import { setPage } from "../features/blogSlice";

const Dasboard = () => {
  const { getBlogs } = useBlogRequest();
  const dispatch = useDispatch();
  const { blog, error, loading, currentPage, totalPage } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    getBlogs(currentPage,3);
  }, [currentPage]);
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-3 p-5">
      {blog?.map((bg) => (
        <Card key={bg._id} {...bg}></Card>
      ))}
      <div className="w-full flex justify-center mt-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 border rounded bg-gray-200"
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
          className="mx-2 px-4 py-2 border rounded bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dasboard;
