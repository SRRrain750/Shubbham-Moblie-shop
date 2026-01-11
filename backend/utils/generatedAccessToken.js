// import jwt from 'jsonwebtoken'

// const generatedAccessToken = async(userId)=>{
//     const token = jwt.sign({ id:userId},
//          process.env.SECRET_KEY_ACCESS_TOKEN,
//            {expiresIn : '30d'}
//         )

//          await UserModel.updateOne(
//               { _id: userId },
//             { refresh_token: token }
//           )

//         return token
//     }

// export default generatedAccessToken;



import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const generatedAccessToken = async (userId) => {
  if (!process.env.SECRET_KEY_ACCESS_TOKEN) {
    throw new Error("Access token secret missing");
  }

  const token = jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: "30d" }
  );

  //  Do NOT store access token in DB
  // Access token is short-lived and sent to client only

  return token;
};

export default generatedAccessToken;
