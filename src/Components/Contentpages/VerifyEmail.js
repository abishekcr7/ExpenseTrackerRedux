import React, { useContext } from "react";
import AuthContext from "../Store/Auth-Context";


const VerifyEmail = ()=>{
    const authCtx=useContext(AuthContext)
    const emailVerify = ()=>{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCvE-ky82Xce_4KHwow_ndNujHH_F4m1aI',{
            method:'POST',
            body:JSON.stringify({
                requestType:"VERIFY_EMAIL",
                idToken:authCtx.token,
            }),
            headers: { "Content-Type": "application/json" },
        }).then((res)=>{
            if (res.ok){
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication failed";
                    throw new Error(errorMessage);
                  })
            }
        }).then((data)=>{
            alert('verification email is sent to your email')
            console.log(data)
        }).catch((err) => {
            alert(err.message);
          });

    }
   return(
    <div>Verify your email now <button onClick={emailVerify}>Verify</button></div>
   )
}

export default VerifyEmail;