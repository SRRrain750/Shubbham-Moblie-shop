 export const baseUrl = "http://localhost:8080"
// export const baseUrl = import.meta.env.VITE_API_URL

import React, { use } from 'react'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import OtpVerification from '../pages/OtpVerification'
import ResetPassword from '../pages/ResetPassword'
import { logout } from '../store/userSlice'
import { AddCategoryController, deleteCategoryController, updateCategoryController } from '../../../backend/controllers/category.controller'

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
    resetPassword : {
        url : "/api/user/reset-password",
        method : 'put'
    },

    userDetails : {
      url :'/api/user/user-details',
      method : 'get'
    },

    logout : {
      url : '/api/user/logout',
      method : 'get'
    },
    uploadAvatar : {
      url : '/api/user/upload-avatar',
      method : 'put'
    },
    updateUserDetails : {
      url : '/api/user/update-user',
      method : 'put'
    },
    addCategory:{
      url : '/api/category/add-category',
      method : 'post'
    },
    uploadImage :{
      url : '/api/file/upload',
      method : 'post'
    },
    getCategory : {
      url : '/api/category/get',
      method : 'get'
    },
    updateCategory : {
      url : '/api/category/update',
      method : 'put'
    },
    deleteCategory : {
     url : '/api/category/delete',
     method : 'delete' 
    },
    createSubCategory : {
      url : '/api/subcategory/create',
      method : 'post'
    }

};

export default SummaryApi;
