import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  categories: [],
  comments: [],
  users: [],
  likes:[],
  blogDetail:[],
  totalPage: 0,
  currentPage: 1,
  loading: false,
  error: false,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    blogPending: (state) => {
      state.loading = true;
      state.error = false;
    },
    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blog =payload.data;
      state.totalPage = payload.details.pages.total; // APİ dan gelen veriler bunlar
    state.currentPage=  payload.details.pages.current
    },
    getMyBlogSuccess: (state,{payload}) => {
      state.loading = false;
      state.blog = payload.data;
      
    },
    getLikeSuccess: (state,{payload}) => {
      state.loading = false;
      state.likes = payload;
      
    },
    addCommentSuccess: (state, { payload }) => {
      state.loading = false;
      state.comments = [...state.comments, payload];
    },
    blogRegister: (state) => {
      state.loading = false;
      state.error = true;
    },
    blogDetailSuccess:(state,{payload})=>{
        state.loading = false;
      state.blogDetail = payload.data;
    },
    getUserSuccess: (state, { payload }) => {
        state.loading = false;
        state.users = payload.data;
      },
    getCategoriesSuccess: (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data;
      },
    postBlogSuccess: (state, { payload }) => {
        state.loading = false;
        state.blog = payload.data;
        // state.totalPage = payload.details.pages.total; // APİ dan gelen veriler bunlar
        // state.currentPage=  payload.details.pages.current
      },
    setCurrentPage: (state, { payload }) => {// pagination için oluşan  reducer
      state.currentPage = payload;
    },
  },
});

export const { blogPending, getBlogSuccess, blogRegister,setCurrentPage,blogDetailSuccess,getUserSuccess,getCategoriesSuccess,postBlogSuccess,getMyBlogSuccess,getLikeSuccess,addCommentSuccess } = blogSlice.actions;

export default blogSlice.reducer;


// getUseCatSuccess: (state, { payload }) => {
//   state.loading = false;
//   state[payload.endpoint] = payload.data;
// },