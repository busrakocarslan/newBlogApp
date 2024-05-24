import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  categories: [],
  comments: [],
  users: [],
  blogDetail:[],
  totalPage: 1,
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
      state.blog = payload.data;
      state.totalPage = payload.details.pages.total; // APİ dan gelen veriler bunlar
    state.currentPage=  payload.details.page+1// api den gelen page 0 indexli olduğundan bu kod yazıldı
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
    setPage: (state, { payload }) => {// pagination için oluşan  reducer
      state.currentPage = payload;
    },
  },
});

export const { blogPending, getBlogSuccess, blogRegister,setPage,blogDetailSuccess,getUserSuccess } = blogSlice.actions;

export default blogSlice.reducer;
