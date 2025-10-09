export const baseUrl = "http://localhost:8080"
import React from 'react'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'


const SummaryApi = {
  register: {
    url: `${baseUrl}/api/user/register`,
    method: "POST"
  },

  login:{
    url: `${baseUrl}/api/user/login`,
    method: "POST"
  },

    forgot_password : {
        url : "/api/user/forgot-password",
        method : 'put'
    },
    forgot_password_otp_verification : {
        url : 'api/user/verify-forgot-password-otp',
        method : 'put'
    },

};

export default SummaryApi;
