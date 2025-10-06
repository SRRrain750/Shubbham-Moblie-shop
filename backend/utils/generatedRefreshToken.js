import UserModel from "../models/user.model.js"
import jwt from 'jsonwebtoken'
const generatedRefreshToken =(userId)=>{
    const token = jwt.sign({ id:userId},
             process.env.SECRET_KEY_REFRESH_TOKEN,
               {expiresIn : '30d'}
            )
    

        const updateRefreshTokenUser =  UserModel.updateOne(
            { _id : userId},
            {
                refresh_token : token
            }

        )   
            return token
}

export  default generatedRefreshToken;