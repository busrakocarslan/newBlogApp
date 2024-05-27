import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import useBlogRequest from "../../services/useBlogRequest";
import { useNavigate } from "react-router-dom";

const UpdateModal = ({ open, setOpen, blogDetail, categories, users }) => {
 
  const { _id } = blogDetail;
  const [blogInfo, setBlogInfo] = useState({
    title: blogDetail?.title || "",
    image: blogDetail?.image || "",
    categoryId: blogDetail?.categoryId?._id || "",
    isPublished: blogDetail?.isPublished?._id || "",
    content: blogDetail?.content || "",
  });
  const { putBlog, detailBlog } = useBlogRequest();
  const handleChange = (e) => {
    setBlogInfo({ ...blogInfo, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    putBlog(blogDetail?._id, blogInfo);
    setOpen(false);}
   
    const handleClose = () => {
      setBlogInfo({
        title: blogDetail?.title || "",
        image: blogDetail?.image || "",
        categoryId: blogDetail?.categoryId?._id || "",
        isPublished: blogDetail?.isPublished?._id || "",
        content: blogDetail?.content || "",
      });
      setOpen(false);
    };
  ;
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => (setOpen(false), setBlogInfo({title: blogDetail?.title || "",
        image: blogDetail?.image || "",
        categoryId: blogDetail?.categoryId?._id || "",
        isPublished: blogDetail?.isPublished?._id || "",
        content: blogDetail?.content || ""}))}>
        <Transition
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
                      {users[0]?.username}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="mt-2">
                        <form onSubmit={handleUpdate}>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="title"
                            >
                              Blog Başlığı
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="title"
                              type="text"
                              name="title"
                              placeholder="Blog Başlığı"
                              value={blogInfo.title}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="image"
                            >
                              Görsel URL'si
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="image"
                              type="url"
                              name="image"
                              placeholder="Görsel URL'si"
                              value={blogInfo.image}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="categoryId"
                            >
                              Kategori
                            </label>
                            <select
                              id="categoryId"
                              name="categoryId"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              value={blogInfo.categoryId}
                              onChange={handleChange}
                              required
                            >
                              {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="isPublished"
                            >
                              Durum
                            </label>
                            <select
                              id="isPublished"
                              name="isPublished"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              value={blogInfo.isPublished}
                              onChange={handleChange}
                              required
                            >
                              {/* Durumları burada listeleyin */}
                              <option value="true">Yayınlandı</option>
                              <option value="false">Taslak</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="content"
                            >
                              İçerik
                            </label>
                            <textarea
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="content"
                              name="content"
                              placeholder="İçerik"
                              value={blogInfo.content}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="bg-gray-50 px-4 py-3 gap-2 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="submit"
                              className="buttonbg hoverEffect"
                            >
                              Güncelle
                            </button>
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                              onClick={() => setOpen(false)}
                            >
                              İptal
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
