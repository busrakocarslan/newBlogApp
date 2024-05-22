import React from "react";
import { Form } from "formik";
import { object, string,ref } from "yup";
import * as yup from "yup";


export const registerSchema = yup.object({
  username:yup. string().required("Kullanıcı adı zorunludur"),
  firstName:yup. string().required("İsim zorunludur"),
  lastName:yup. string().required("Soyisim zorunludur"),
  image:yup. string().url("Geçerli bir URL giriniz"),
  city:yup. string().required("Şehir zorunludur"),
  bio:yup. string(),
  password:yup. string().required("Şifre zorunludur")
  .min(8, "Şifre en az 8 karakter olmalıdır")
  .max(16, "Şifre en fazla 16 karakter olmalıdır")
  .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
  .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir.")
  .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir.")
  .matches(
    /[@$!%*?&]+/,
    "Şifre en az bir özel karakter(@$!%*?&) içermelidir."
  ),
  password2:yup. string()
    .oneOf([ref("password")], "Şifreler eşleşmelidir")
    .required("Şifre tekrarı zorunludur"),
  email: string().email("Geçerli bir email giriniz").required("Email zorunludur"),
});

const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <div className="w-[50%] m-auto">
    <Form>
        <div className="formContainer">
          <label htmlFor="username" className="label">Kullanıcı Adı:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="username"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.username && errors.username && (
            <div className="text-red-600">{errors.username}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="firstName" className="label">İsim:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="given-name"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.firstName && errors.firstName && (
            <div className="text-red-600">{errors.firstName}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="lastName" className="label">Soyisim:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="family-name"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.lastName && errors.lastName && (
            <div className="text-red-600">{errors.lastName}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="email" className="label">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.email && errors.email && (
            <div className="text-red-600">{errors.email}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="image" className="label">Profil Resmi URL:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="url"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.image && errors.image && (
            <div className="text-red-600">{errors.image}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="city" className="label">Şehir:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="address-level2"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.city && errors.city && (
            <div className="text-red-600">{errors.city}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="bio" className="label">Biyografi:</label>
          <input
            id="bio"
            name="bio"
            type="text"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="bio"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.bio && errors.bio && (
            <div className="text-red-600">{errors.bio}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="password" className="label">Şifre:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="new-password"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.password && errors.password && (
            <div className="text-red-600">{errors.password}</div>
          )}
        </div>

        <div className="formContainer">
          <label htmlFor="password2" className="label">Şifre Tekrar:</label>
          <input
            id="password2"
            name="password2"
            type="password"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="new-password"
            className="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
          />
          {touched.password2 && errors.password2 && (
            <div className="text-red-600">{errors.password2}</div>
          )}
        </div>

        <button type="submit" className="bg-[#781762] hoverEffect transition-all text-white py-2 px-4 rounded">Submit</button>
      </Form>
    </div>
  );
};

export default RegisterForm;
