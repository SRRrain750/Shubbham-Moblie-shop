import sendEmail from "../config/sendEmail.js";
import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import VerifyEmailTemplate from "../utils/verifyEmailTemplate.js";
export async function registerUserController(req,res) {
    try{
         const {name, email,password}=requestAnimationFrame.body

         if(!name || !email || !password){
            return response.status(400).json({
                message:"provide email,name,password",
                error:true,
                success:false
            })
         }

         const user = await UserModel.findOne({email})

         if(user){
            return response.json({
                message : "Already register email",
                error:true,
                success :false
            })
         }

         const salt =await bcryptjs.genSalt(10)
         const hashPassword =await bcryptjs.hash(password,salt)

         const payload = {
            name,
            email,
            password:hashPassword
         }

         const newUser = new UserModel(payload)
         const save =await newUser.save()
        

        const VerifyEmailUrl = `${process.env.FRONTED_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({
                sendTo : email,
                subject:" VerifyEmail email from Shubham-mobile-shop ",
                html: verifyEmailTemplate({
                  name,
                  url:VerifyEmailUrl
                })
        })


     return response.json({
      message:"User register successfully",
      error:false,
      success:true,
      data:save
     })


    } catch(error){}
    
      return response.status(500).json({
        message:error.message || error,
        error:true,
        success:false
      })
    }