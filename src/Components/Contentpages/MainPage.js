import React, { useContext } from 'react'
import AuthContext from '../Store/Auth-Context'
import CompleteProfile from './CompleteProfile'
import VerifyEmail from './VerifyEmail'


import { useHistory,Link,Route } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/auth'

const MainPage = () => {
  const dispatch=useDispatch();
    // const authCtx=useContext(AuthContext)
    const history=useHistory()
    const LogutHandler =()=>{
        // authCtx.logout()
        dispatch(authActions.logout())
        history.replace('/Login')
    }
  return (
    <div>
    <header>Welcome to Expensetracker</header>
    <button onClick={LogutHandler}>Logout</button>
    <div>Your profile is incomplete <Link to='/Completeprofile'>Complete Now</Link></div>
    <div>Verify Your Email Now<Link to='/VerifyEmail'>Verify</Link></div>
    </div>
  )
}

export default MainPage