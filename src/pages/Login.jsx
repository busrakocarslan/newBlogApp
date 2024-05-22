import React from "react";
import { Formik, Form } from "formik";
import LoginForm, {authSchema} from "../component/auth/LoginForm";
import { object, string } from "yup";
import useAuthApiRequest from "../services/authApiRequest";


const Login = () => {
  const {login}=useAuthApiRequest()
  

  return (
    <div className="bg-login-bg min-w-[100%] min-h-[100vh] text-center bg-cover bg-center p-10 font-fontSedan">
      <h1 className="text-2xl text-[#781762] font-extrabold">LOGİN</h1>
      <div className="my-[5%] ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={authSchema}
          onSubmit={(values, actions) => {
            //TODO
            //POST
            //toastify=> authapirequestte 
            //global state güncellemesi=>authrequestte
            //form resetleme
            //navigate=>authrequestte
            login(values)            
            actions.resetForm();
            actions.setSubmitting(false)
          }}
          component={(props) => <LoginForm {...props} /> }
        ></Formik>
      </div>
    </div>
  );
};
export default Login;
