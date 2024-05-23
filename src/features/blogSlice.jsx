import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    blog: [],
    categories: [],
    comments: [],
    users: [],
    totalPages: 1,
    currentPage:1,
    loading: false,
    error: false,
}

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
            state.totalPages = Math.ceil(payload.details.totalRecords / payload.details.limit);
        },
        blogRegister: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

export const { blogPending, getBlogSuccess, blogRegister } = blogSlice.actions;

export default blogSlice.reducer;
