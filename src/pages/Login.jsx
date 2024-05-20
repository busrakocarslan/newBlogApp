import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";

const Login = () => {
  const authSchema = object({
    email: string()
      .email("Geçerli bir email giriniz")
      .required("Email alanı zorunludur"),
    password: string().required("Şifre alanı zorunludur"),
  });

  return (
    <div className="bg-login-bg min-w-[100%] min-h-[100vh] text-center bg-cover bg-center p-10 font-fontSedan">
      <h1 className="text-2xl text-yellow-500 font-extrabold">LOGİN</h1>
      <div className="my-[5%] ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={authSchema}
          onSubmit={(values, actions) => {
            //TODO
            //POST
            //toastify
            //global state güncellemesi
            //form resetleme
            //navigate
            actions.resetForm();
          }}
        >
          {(values, handleSubmit, handleChange, handleBlur, actions) => (
            <Form>
              <div>
                <div>
                  <div className="flex justify-center items-center mb-10 gap-1">
                    <label
                      for="email"
                      class="block text-lg font-bold  text-orange-500"//leading-6
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm    focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                 
                  <div className="flex justify-center items-center gap-1">
                  <label
                    for="email"
                    class="block text-lg font-bold  text-orange-500"
                  >
                    Pass :
                  </label>
                    <input
                      name="password"
                      type="password"
                      autocomplete="email"
                      class="block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm  focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
