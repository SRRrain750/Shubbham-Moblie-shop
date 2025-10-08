import jwt from 'jsonwebtoken'
const auth = async(req,res,next)=>{
    try{

        //get token cookies 0r header
        const token  = req.cookies.accessToken || req.headers?.authorization?.split(" ")[1]  ///["Bearer","" "token"]
          if(!token){
            return res.status(401).json({
                message : " Provide token",
                error: true,
                success: false,
                
            })
          }

          const decode =  jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN);
          
          if(!decode){
            return res.status(400).json({
                message: "unauthorized access",
                error : true,
                success:false
            })
          }
          req.userId = decode.id || decode.userId
         
          next();
    }catch(error){
        return res.status(500).json({
            message :error.message || error,
            error : true,
            success : false
        })
    }

}

export default  auth;