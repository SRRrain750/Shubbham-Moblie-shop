const verifyEmailTemplate =(name,url)=>{
      return`

<p> Dear ${name}</p>     
<p>Thank you For registering Shubham-Mobile-Shop.</p>
<a href=${url} style="color:white;background : green; margin-top:10px,padding:20px,display:block">
  
      Verify Email

</a>

`

}

export default verifyEmailTemplate