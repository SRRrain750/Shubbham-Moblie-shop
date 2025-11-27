import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import VerifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import { response } from "express";
import pkg from "jsonwebtoken";
import uploadImageCloudinary from "../utils/uploadImageClodinary.js";
import generatedOtp from "../utils/generatedOtp.js";
import forgotPasswordTemplate from "../utils/forgotPasswordTemplate.js";
import auth from "../middleware/auth.js";

const { verify, sign } = pkg;


//--------------------------register user--------------------
export async function registerUserController(req, res) {
   try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
         return res.status(400).json({
            message: "provide email,name,password",
            error: true,
            success: false,
         });
      }

      const user = await UserModel.findOne({ email });

      if (user) {
         return res.json({
            message: " Email Already registered ",
            error: true,
            success: false,
         });
      }

      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);

      const payload = {
         name,
         email,
         password: hashPassword,
         status: "Active"
      };

      const newUser = new UserModel(payload)
      const save = await newUser.save()


      const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`;

      const verifyEmail = await sendEmail({
         sendTo: email,
         subject: " VerifyEmail email from Shubham-mobile-shop ",
         html: VerifyEmailTemplate({
            name,
            url: VerifyEmailUrl
         })
      });


      return res.json({
         message: "User register successfully",
         error: false,
         success: true,
         data: save,
      })


   } catch (error) {
      console.error("Register error:", error);
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,
      });
   }
}



// -----------verify email Controller
export async function verifyEmailController(req, res) {

   try {
      const { code } = req.body;

      if (!code) {
         return res.status(400).json({
            message: "provide email,password",
            error: true,
            success: false,
         })
      }

      const user = await UserModel.findOne({ _id: code });

      if (!user) {
         return res.status(400).json({
            message: "Invalid code",
            error: true,
            success: false,
         });
      }

      const updateUser = await UserModel.updateOne({ _id: code }, {
         verify_email: true,
      })
      return res.json({
         message: "Verify email done",
         success: true,
         error: false,
      })
   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,
      })
   }

}


//-----------------login Controller
export async function loginController(req, res) {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({
            message: "provide email,password",
            error: true,
            success: false,
         })
      }

      const user = await UserModel.findOne({ email })

      if (!user) {
         return res.status(400).json({
            message: "User not found",
            error: true,
            success: false,
         })

      }

      if (user.status !== "Active") {
         return res.status(400).json({
            message: " Contact to Admin ",
            error: true,
            success: false,
         })
      }

      const checkPassword = await bcryptjs.compare(password, user.password)

      if (!checkPassword) {
         return res.status(400).json({
            message: "check your password",
            error: true,
            success: false
         })
      }

      const accesstoken = await generatedAccessToken(user._id)
      const refreshtoken = await generatedRefreshToken(user._id)
      const updateUser = await UserModel.findByIdAndUpdate(user?._id, {
         last_login_date: new Date()
      })

      const cookiesOption = {
         httpOnly: true,
         secure: true,
         sameSite: "None"
      }
      res.cookie('accessToken', accesstoken, cookiesOption)
      res.cookie('refreshToken', refreshtoken, cookiesOption)

      return res.json({
         message: "Login successfully",
         error: false,
         success: true,
         data: {
            accesstoken,
            refreshtoken
         }
      })


   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,
      });
   }

}


//-----------------logout controller---------
export async function logoutController(req, res) {
   try {

      const userid = req.userId //middleware

      const cookiesOption = {
         httpOnly: true,
         secure: true,
         sameSite: "None"
      }


      res.clearCookie("accessToken", cookiesOption)
      res.clearCookie("refreshToken", cookiesOption)

      const removeRefreshToken = await UserModel.findByIdAndUpdate(userid, {
         refresh_token: " "
      })

      return res.json({
         message: "Logout successfully",
         error: false,
         success: true
      })


   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false
      })
   }
}


//-------------------upload user avatar---------------

export async function uploadAvatar(req, res) {
   try {

      const userId = req.userId//auth middleware
      const image = req.file //multer middleware


      const upload = await uploadImageCloudinary(image)

      const updateUser = await UserModel.findByIdAndUpdate(userId, {
         avatar: upload.url,
      })
      return res.json({
         message: "upload profile",
         data: {
            _id: userId,
            avatar: upload.url,
         }
      })
      console.log("image", image)

   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false
      })
   }

}



//------------------------update user details


export async function updateUserDetails(req, res) {
   try {
      const userId = req.userId//auth middleware
      const { name, email, mobile, password } = req.body;

      let hashPassword = "";

      if (password) {
         const salt = await bcryptjs.genSalt(10);
         hashPassword = await bcryptjs.hash(password, salt);
      }

      const updateUser = await UserModel.updateOne({ _id: userId }
         , {
            ...(name && { name }),
            ...(email && { email }),
            ...(mobile && { mobile }),
            ...(password && { password: hashPassword }),
         },
         { new: true }
      ); // `new: true` returns updated document


      return res.json({
         message: "updated user successfully",
         error: false,
         success: true,
         date: updateUser
      })
   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false
      })

   }

}



//---------forgot password not login--------------------

export async function forgotPasswordController(req, res) {
   try {

      const { email } = req.body;

      const user = await UserModel.findOne({ email })

      if (!user) {
         return res.status(400).json({
            message: "Email nat available",
            error: true,
            success: false,
         })
      }

      const otp = generatedOtp()
      const expireTime = new Date() + 60 * 60 * 1000//1hr

      const update = await UserModel.findByIdAndUpdate(user._id, {
         forgot_password_otp: otp,
         forgot_password_expiry: new Date(expireTime).toISOString()

      })

      await sendEmail({
         sendTo: email,
         subject: "forgot password from Shubham-Mobile-Shop",
         html: forgotPasswordTemplate({
            name: user.name,
            otp: otp
         })
      })

      return res.json({
         message: " check your email ",
         error: false,
         success: true
      })
   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,
      })
   }

}

//---------------verify forgot password OTP-------------------------


export async function verifyForgotPasswordOtp(req, res) {
   try {
      const { email, otp } = req.body;

      if (!email || !otp) {
         return res.status(400).json({
            message: "Provide required field email,otp.",
            error: true,
            success: false
         })
      }
      const user = await UserModel.findOne({ email })

      if (!user) {
         return res.status(400).json({
            message: "Email nat available",
            error: true,
            success: false,
         })
      }

      const currentTime = new Date().toISOString()

      if (user.forgot_password_expiry < currentTime) {
         return res.status(400).json({
            message: "Otp is expired",
            error: true,
            success: false
         })
      }
      if (otp !== user.forgot_password_otp) {
         return res.status(400).json({
            message: "Invalid otp",
            error: true,
            success: false,
         })
      }

      // if otp is not expired
      //otp === user.forgot_password_otp

      const update = await UserModel.findByIdAndUpdate(user?._id,{
         forgot_password_otp: "",
         forgot_password_expiry: ""
      })


      return res.json({
         message: "verify otp successfully ",
         error: false,
         success: true
      })

   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,

      })
   }

}


//-------------reset The Password-----------------



export async function resetpassword(req, res) {
   try {

      const { email, newPassword, confirmPassword } = req.body;

      if (!email || !newPassword || !confirmPassword) {
         return res.status(400).json({
            message: "provide required fields email, newPassword, confirmPassword"
         })
      }

      const user = await UserModel.findOne({ email })
      if (!user) {
         return res.status(400).json({
            message: "Email is not available",
            error: true,
            success: false,
         })
      }

      if (newPassword !== confirmPassword) {
         return res.status(400).json({
            message: "newPassword & confirmPassword must be same.",
            error: true,
            success: false,
         })
      }

      const salt = await bcryptjs.genSalt(10)
      const hashPassword = await bcryptjs.hash(newPassword, salt)
      const update = await UserModel.findByIdAndUpdate(user._id, {
         password: hashPassword
      })

      return res.json({
         message: "Password updated successfully",
         error: false,
         success: true
      })
   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false,
      })
   }

}


//--------------------refresh token controller---------------------------------------------

export async function refreshToken(req, res) {
   try {

      const refreshToken = req.cookies.refreshToken || req.headers?.authorization?.split(" ")[1]//{"bearer token"}

      if (!refreshToken) {
         return res.status(401).json({
            message: "Invalid token",
            error: true,
            success: false
         })
      }
      console.log("refreshToken", refreshToken)
   } catch (error) {
      return res.status(500).json({
         message: error.message || error,
         error: true,
         success: false
      })

   }

}

//------------------get user details--------------------
export async function userDetails(req, res) {
   try {
      const userId = req.userId //auth middleware
      const user = await UserModel.findById(userId).select("-password -refresh_token")

      return res.json({
         message: "user details",
         data: user,
         error: false,
         success: true
      })
   } catch (error) {
      return res.status(500).json({
         message: "Something went wrong",
         error: true,
         success: false
      })
   }
}
