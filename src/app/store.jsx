import { configureStore } from "@reduxjs/toolkit";


import { createSelector } from 'reselect'

const store= configureStore({
    reducer:{},
    devTools: process.env.NODE_ENV !== "production",//devtoll production kısmında ctive değil development ve test kısmında aktif. best practice
})