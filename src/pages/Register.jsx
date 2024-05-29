import React from 'react'
import RegisterForm,{registerSchema} from '../component/auth/RegisterForm';
import { Formik } from "formik";
import useAuthApiRequest from '../services/authApiRequest';

const Register = () => {
  const { register }=useAuthApiRequest()
  

  return (
    <div className="bg-login-bg min-w-[100%] min-h-[80vh] text-center bg-cover bg-center p-10 font-fontSedan">
      <h1 className="text-2xl text-[#781762] font-extrabold">Kayıt ol</h1>
      <div className="my-[5%] ">
        <Formik
          initialValues={{ username: "",
          firstName:"",
          lastName:"",        
          image: "",
          city:"",
          bio: "",
          password: "",
          password2: "",
          email: "" }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            //TODO
            //POST
            //toastify=> authapirequestte 
            //global state güncellemesi=>authrequestte
            //form resetleme
            //navigate=>authrequestte
            register(values)            
            actions.resetForm();
            actions.setSubmitting(false)
          }}
          component={(props) => <RegisterForm {...props} /> }
        ></Formik>
      </div>
    </div>
  );
}

export default Register