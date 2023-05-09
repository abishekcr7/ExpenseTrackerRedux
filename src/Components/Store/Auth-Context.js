import React,{useState} from "react"
const AuthContext= React.createContext({
    token:'',
    userEmail:'',
    userDetails:[],
    isLoggedin:false,
    login:(token,email)=>{},
    showDetails:(data)=>{},
    logout:()=>{}
})

export const AuthContextProvider = (props)=>{
    const initialtoken= localStorage.getItem('token')
    const intialemail=localStorage.getItem('email')
   const [token,setToken]=useState(initialtoken);
   const [email,setEmail]=useState(intialemail)
   const [userDetail,setUserDetails]=useState([])

   const userIsLoggedIn= !!token;

   const loginHandler=(token,email)=>{
    setToken(token)
    setEmail(email)
    console.log('authcontext',email)
    localStorage.setItem('token',token)
    localStorage.setItem('email',email)
   }

   const showUserDetails = (data)=>{
    setUserDetails(data);
    console.log(userDetail)
   }

   const logouthandler =()=>{
    setToken(null)
    // setEmail(null)
    window.location.reload()
    localStorage.removeItem('token')
    // localStorage.removeItem('email')
   }

   const contextValue= {
    token:token,
    userEmail:email,
    userDetails:userDetail,
    isLoggedin:userIsLoggedIn,
    login:loginHandler,
    showDetails:showUserDetails,
    logout:logouthandler,
   }

   return (<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>)
}

export default AuthContext