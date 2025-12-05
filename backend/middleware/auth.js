import jwt from 'jsonwebtoken'
const auth = async(req,res,next)=>{
    try{

        //get token cookies 0r header
        const token  = req.cookies?.accessToken || req.headers?.authorization?.split(" ")[1]  ///["Bearer","" "token"]
          if(!token){
            return res.status(401).json({
                message : " Provide token",
                
            })
          }

          const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN);
          
          if(!decode){
            return res.status(401).json({
                message: "unauthorized access",
                error : true,
                success:false
            })
          }
          req.userId = decode.id || decode.userId
         
          next();
    }catch(error){
        return res.status(500).json({
            message :  "You have not login", //error.message || error,
            error : true,
            success : false
        })
    }

}

export default  auth;






// import jwt from 'jsonwebtoken'

// const auth = async(request,response,next)=>{
//     try {
//         const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1]
       
//         if(!token){
//             return response.status(401).json({
//                 message : "Provide token"
//             })
//         }

//         const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

//         if(!decode){
//             return response.status(401).json({
//                 message : "unauthorized access",
//                 error : true,
//                 success : false
//             })
//         }

//         request.userId = decode.id

//         next()

//     } catch (error) {
//         return response.status(500).json({
//             message : "You have not login",///error.message || error,
//             error : true,
//             success : false
//         })
//     }
// }

// export default auth