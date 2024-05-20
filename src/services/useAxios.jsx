import React from "react";

const useAxios = () => {
  const axiosToken = axios.create({
    BASEURL: `${process.env.BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    BASEURL: `${process.env.BASE_URL}`,
  });

  return { axiosToken,axiosPublic };
};

export default useAxios;
// axios.create axiosun bir yapısı token ve tokensiz olmak üzere iki adet burada yazıldı kontrol tek merkezden olması için DRY prensibine uygun.
