import React from "react";
import { Form } from "formik";
import { object, string } from "yup";

export const authSchema = object({
  email: string()
    .email("Geçerli bir email giriniz")
    .required("Email alanı zorunludur"),
  password: string().required("Şifre alanı zorunludur"),
});

const LoginForm = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <div>
      <Form>
        <div>
          <div>
            <div className="formContainer">
              <label
                htmlFor="email"
                className="label" //leading-6
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="yz@yz.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}                
                autocomplete="email"
                class="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm    focus:outline-none sm:text-sm sm:leading-6"
              /> {touched.email && errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>

            <div className="formContainer">
              <label
                htmlFor="password"
                className="label"
              >
                Şifre: 
              </label>
              <input
               id="password" 
               name="password"
               type="password"
               placeholder="123456Abc*"
               value={values.password}
               onChange={handleChange}
               onBlur={handleBlur}
               autoComplete="current-password"
                class="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm  focus:outline-none sm:text-sm sm:leading-6"
              />{touched.password && errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="bg-[#781762] hoverEffect transition-all text-white py-2 px-4 rounded">Gönder</button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
