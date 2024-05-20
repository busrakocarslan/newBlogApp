import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "", // en önemlisi
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      // iki parametre alıyor burada payloada ihtiyaç yok pending işlemi
      state.loading = true;
      state.error = false;
    },
    loginSuccess:(state,{payload})=>{
        state.loading=false
        state.user=payload.user.username
        state.token=payload.token
    },
    logoutSuccess:(state)=>{
        state.loading=false
        state.user=""
        state.token=""
    },
    fetchFail:(state)=>{
        state.loading=false
        state.error=true
      }
  },
});

export const {fetchStart,fetchFail,loginSuccess,logoutSuccess} = authSlice.actions;

export default authSlice.reducer;
// redux asyncThunk yerine workaround, yani kendimiz ayrı ayrı dispatch yazıyoruz. 
