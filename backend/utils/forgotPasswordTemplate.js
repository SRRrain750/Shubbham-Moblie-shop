 const forgotPasswordTemplate = ({ name, otp })=>{
    return `
 <div>
    <p> Dear, ${name} </p>
    <p> you're requested a password reset. pls use following OTP code to
     reset your Password.</p>

     <div style = "background:yellow;font-size:20px;padding:20px; 
     text-align:center; font-weight:800;">
            ${otp}
     </div>

     <p> This otp is valid for 1h only. Enter this otp in the shubham-mobile-shop 
     website to proceed with resetting  your password. </p>
     <br/>
     </br>
     <p>Thanks</p>
     <p>Shubham-Mobile-Shop</p>
 </div>
    `
 }


 export default forgotPasswordTemplate;