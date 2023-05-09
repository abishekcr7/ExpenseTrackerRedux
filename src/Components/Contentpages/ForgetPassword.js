import React, { useRef, useState } from "react";

const ForgetPassword = ()=>{
    const emailref=useRef();
    const [isLoading,setIsLoading]=useState(false)

    const submitHandler= (event)=>{
        event.preventDefault();
        const enteredemail=emailref.current.value;
        setIsLoading(true)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCvE-ky82Xce_4KHwow_ndNujHH_F4m1aI',{
            method:'POST',
            body:JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:enteredemail,
            }),
            headers: { "Content-Type": "application/json" },
        }).then((res)=>{
            setIsLoading(false);
            if (res.ok){
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    let errorMessage = "Something went wrongg";
                    throw new Error(errorMessage);
                  })
            }
        }).then((data)=>{
            alert('Password reset link is sent to your email')
            console.log(data)
        }).catch((err) => {
            alert(err.message);
          });
    }

return(
    <div>
    {isLoading && <h3>Loading...........</h3>}
    {!isLoading && <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailref} />
        </div>
        <button type="submit">Change password</button>
    </form>}
    </div>
)
}

export default ForgetPassword;