import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  blogPending,
  blogRegister,
  getBlogSuccess,
  blogDetailSuccess,
  getUserSuccess,
  getCategoriesSuccess,
  postBlogSuccess,
  getMyBlogSuccess,
  getLikeSuccess,
  addCommentSuccess
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useBlogRequest = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosToken } = useAxios();
  const navigate = useNavigate();

  //!-----------Blogların çağırılması işlemi-----
  const getBlogs = async (page = 1) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosPublic(`blogs?limit=10&page=${page}`);
      dispatch(getBlogSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Blogları getirirken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  const getCategories = async () => {
    dispatch(blogPending());
    try {
      const { data } = await axiosPublic(`categories`);
      dispatch(getCategoriesSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Kategorileri getirirken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog ayrıntısının çağırılması işlemi-----
  const detailBlog = async (id) => {
    dispatch(blogPending());

    try {
      const { data } = await axiosToken(`/blogs/${id}`);
      dispatch(blogDetailSuccess(data));
      // toastSuccessNotify("Blog içeriği başarıyla getirildi");

      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Blog ayrıntılarını getirirken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!________________YORUM EKLEME______________
  const createComments = async (commentData,id) => {
    dispatch(blogPending());

    try {
      const { data } = await axiosToken.post(`/comments/`, commentData);
      toastSuccessNotify("Yorum başarıyla eklendi");
      
      dispatch(addCommentSuccess(data));
      // detailBlog(id)

      // dispatch(blogDetailSuccess(data));
      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Yorum eklerken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog gönderilmesi işlemi-----
  const createBlogs = async (commentData) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken.post(`/blogs/`, commentData);
      // dispatch(getBlogSuccess(data));
      toastSuccessNotify("Blog başarıyla oluşturuldu");

      console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Blog oluştururken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog like/unlike çağırma işlemi-----
  const getLikeBlogs = async (id) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken(`/blogs/${id}/getLike`);
      dispatch(getLikeSuccess(data));

      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog like/unlike gönderme işlemi-----
  const likeBlogs = async (id) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken.post(`/blogs/${id}/postLike`, {});
      dispatch(getLikeSuccess(data));
      // getBlogs(1)
      // getLikeBlogs(id)
      // detailBlog();
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };

  //!-----------Blog bilgilerinin güncellenmesi işlemi-----
  const putBlog = async (id, blogInfo) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken.put(`/blogs/${id}`, blogInfo);
      // dispatch(postBlogSuccess(data));
      toastSuccessNotify("Blog başarıyla güncellendi");
      detailBlog(id);
      //  navigate("/myblogs")
      // console.log(data);
    } catch (error) {
      toastErrorNotify("Oops! Blog güncellerken bir hata oluştu");
      dispatch(blogRegister());
      console.log(error);
    }
  };
  //!-----------Blog bilgilerinin silinmesi işlemi-----
  const delBlogs = async (id) => {
    dispatch(blogPending());
    try {
      await axiosToken.delete(`/blogs/${id}`);
      toastSuccessNotify("Blog başarıyla silindi");
    } catch (error) {
      dispatch(blogRegister());
      toastErrorNotify("Oops! Blog silinirken bir hata oluştu");
      console.log(error);
    }
  };

  const getUsers = async () => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken(`/users`);
      dispatch(getUserSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };
  const getBlogUser = async (id) => {
    dispatch(blogPending());
    try {
      const { data } = await axiosToken(`/blogs?author=${id}`);
      dispatch(getMyBlogSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(blogRegister());
      console.log(error);
    }
  };

  return {
    getBlogs,
    detailBlog,
    getUsers,
    createComments,
    getBlogUser,
    getCategories,
    createBlogs,
    putBlog,
    delBlogs,
    likeBlogs,
    getLikeBlogs,
  };
};

export default useBlogRequest;
