import UserModel from "../models/user.model.js"
import jwt from 'jsonwebtoken'
const generatedRefreshToken =async(userId)=>{
    const token = jwt.sign({ id:userId},
             process.env.SECRET_KEY_REFRESH_TOKEN,
               {expiresIn : '30d'}
            )
    

         try{
             await UserModel.updateOne(
              { _id : userId},
                {
                 refresh_token : token
                }

          )
        }catch(error){ 
                console.log("Refresh token DB update failed:", error);
        }  
            return token
}

export  default generatedRefreshToken;