// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";// asil adı autslice ancak bestprac gereği default export olduğundan burada adı değişti. 
import blogReducer from "../features/blogSlice"


const store = configureStore({
    reducer: {
        auth:authReducer,
        blogs:blogReducer
        // Buraya reducer'ları ekleyebilirsin
    },
    devTools: process.env.NODE_ENV !== "production",//devtoll production kısmında ctive değil development ve test kısmında aktif. best practice
});

export default store;

// app i sarmalamayı unutma!
