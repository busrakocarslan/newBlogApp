// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";// asil adı autslice ancak bestprac gereği default export olduğundan burada adı değişti. 
import blogReducer from "../features/blogSlice"
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'// büyük harf olanlar consoldeki hatanın kaldırılması için eklendi
    import storage from 'redux-persist/lib/storage' //? defaults to localStorage
// import storage from "redux-persist/lib/storage/session" //? session storage
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, authReducer,
   
  )


const store = configureStore({
    reducer: {
        auth:persistedReducer,
        blogs:blogReducer
        // Buraya reducer'ları ekleyebilirsin
    },
    middleware: (getDefaultMiddleware) =>// hata için eklendi
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== "production",//devtoll production kısmında ctive değil development ve test kısmında aktif. best practice
});
export const persistor = persistStore(store)//! bu şekilde yazıp export etmiş App de sarmalayacsın bununla

export default store;

// app i sarmalamayı unutma!
