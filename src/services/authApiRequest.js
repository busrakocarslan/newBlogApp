// amaç APİ isteklerini tek yerden atmak 
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess,registerSuccess,logoutSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";// ilgili işlemde mesaj göstermek için react-tosify kullanıldı.
import useAxios from "./useAxios";
//ilgili veri çekme işleminde kullanımak üzere slice kısmı import edildi


const useAuthApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosToken, axiosPublic } = useAxios();

  const login = async (userData) => {
    dispatch(fetchStart()); // slice dan aldığım pedling zamanı
    try {
      const {data} = await axiosPublic.post("auth/login", userData); // yöntem için api ın ne istediğine bak
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı");
      navigate("/"); // login işleminden sonra gitmesi gereken yer için
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("Login başarısız oldu");
    }
  };
  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("users", userData);
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Kayıt işlemi başarılı");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt başarısız oldu");
      console.log(error);
      
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosToken("/auth/logout");
      // await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {headers:{Authorization:`Token ${token}`}});// Be tarafında token silinerek verilerimizin silinmesi için bu işlem yapıldı. Token bilgisini de useSelector ile globaldeki veriden çektim.
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout işlemi başarılı");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout işlemi başarısız oldu");
      console.log(error);
    }
  };






  return {login,logout,register};// costom hook olarak yazıldığından direk import edilemiyor. tek olsaydı returna { } olmadan yazilavbilir
  //*neden costom hook olarak yazıldı? çünkü bu fonksiyonlara uygulamanın her yerinde ihtiyacım var ve içöerisinde de useSelector useNavigate gibi costom hook kullanmam gerekiyor. costom hooklarım genel kuralı gereği func içinde kullanılamıyor. Ya costom hook olacak ya da component olacak.
};

export default useAuthApiRequest;

//? şimdi burada reducerleri yazmadan iki işlem yapıyoruz. birincisi güvenlik gereği  api adresini env dosyası oluşturup ona koyuyorz. ikincisi bazı işlemlerde token ihtiyaç olacağından ve her seferinde yazmamak için axios dosyası oluşturup axios işlemlerini orada yapıyoruz.
