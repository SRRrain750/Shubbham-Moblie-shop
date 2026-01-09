import jwt from 'jsonwebtoken'

const generatedAccessToken = async(userId)=>{
    const token = jwt.sign({ id:userId},
         process.env.SECRET_KEY_ACCESS_TOKEN,
           {expiresIn : '30d'}
        )

         await UserModel.updateOne(
              { _id: userId },
            { refresh_token: token }
          )

        return token
    }

export default generatedAccessToken;