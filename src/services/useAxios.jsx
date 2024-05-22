import React from "react";
import axios from "axios"
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token }=useSelector((state)=>state.auth)
  const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

  return { axiosToken,axiosPublic };
};

export default useAxios;
// axios.create axiosun bir yapısı token ve tokensiz olmak üzere iki adet burada yazıldı kontrol tek merkezden olması için DRY prensibine uygun.
//!baseURL in yazımına dikkaat et