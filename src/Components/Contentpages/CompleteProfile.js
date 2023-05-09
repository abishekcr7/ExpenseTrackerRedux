import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../Store/Auth-Context";
import { useSelector } from "react-redux";

const CompleteProfile=()=>{
    const profileNameRef=useRef();
    const ppUrlRef=useRef()
    const authCtx=useContext(AuthContext);
    const token=useSelector((state)=>state.auth.token)
    
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredProfileName=profileNameRef.current.value;
        const enteredPpUrl=ppUrlRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCvE-ky82Xce_4KHwow_ndNujHH_F4m1aI',{
            method:'POST',
            body:JSON.stringify({
                idToken:token,
                displayName:enteredProfileName,
                photoUrl:enteredPpUrl,
                returnSecureToken:true
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
            console.log(data)
        }).catch((err) => {
            alert(err.message);
          });
    }
    useEffect(()=>{fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCvE-ky82Xce_4KHwow_ndNujHH_F4m1aI',{
        method:'POST',
        body:JSON.stringify({
            idToken:authCtx.token,
        }),
        headers: { "Content-Type": "application/json" }
    }).then((res)=>{
        if(res.ok){
            return res.json()
        }
        else{
            alert('failed request')
        }
    }).then((data)=>{
        console.log(data)
        let user=data.users
        console.log(user)
        console.log(user[0].localId)
        authCtx.showDetails(user[0])
    })},[])
    const details=authCtx.userDetails
    console.log(details)
  return(
    <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">ProfileName</label>
          <input type="text" id="text" defaultValue={details.displayName} required ref={profileNameRef}/>
        </div>
        <div>
          <label htmlFor="url">profile photo url</label>
          <input type="text" id="url" defaultValue={details.photoUrl} required ref={ppUrlRef} />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default CompleteProfile;