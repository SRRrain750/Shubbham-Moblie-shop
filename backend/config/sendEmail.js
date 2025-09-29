import { Resend } from 'resend';
import dotenv from 'dotenv'

dotenv.config()

if (!process.env.RESEND_API_KEY) {
  throw new Error("Please provide RESEND_API_KEY inside the .env file");
}


const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({sendTo,subject ,html})=>{
    try {
    const { data, error } = await resend.emails.send({
      from: 'Shubham <onboarding@resend.dev>',
      to: sendTo,
      subject: subject,
      html: html,
  });

     if (error) {
        // return console.error({ error });
        throw new Error(error.message || "Email sending failed");
     }

      return data
    }catch(error){
        console.log(error)
    }
}

export default sendEmail;
