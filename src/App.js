import logo from './logo.svg';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Components/Contentpages/Login';
import MainPage from './Components/Contentpages/MainPage';
import CompleteProfile from './Components/Contentpages/CompleteProfile';
import VerifyEmail from './Components/Contentpages/VerifyEmail';
import ForgetPassword from './Components/Contentpages/ForgetPassword';
import { useContext,useEffect } from 'react';
import AuthContext from './Components/Store/Auth-Context';
import Expenses from './Components/Expenses/Expenses';
import ExpenseProvider from './Components/Store/ExpenseProvider';
import NavBar from './Components/Contentpages/NavBar';
import expContext from './Components/Store/Exp-Context';


function App() {
  const authCtx=useContext(AuthContext)
  const expCtx=useContext(expContext)
  const isLoggedin=authCtx.isLoggedin;
  // // if(isLoggedin){
  //   // useEffect(() => {
  //     if(authCtx.isLoggedin)
  //     { let email = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "");
  //     fetch(`https://react-https-d34b5-default-rtdb.firebaseio.com/expenses/${email}.json`)
  //       .then((res) => {
  //         console.log(res)
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         const datavalues=Object.values(data)
  //         console.log(datavalues)
  //          datavalues.map((item) => {
  //         //  expCtx.addItem(item)
  //         console.log(item);
  //         expCtx.addItem(item);
  //         // setExpenses(expenses);
  //         console.log(expCtx.expenses)
  //      });
  //       });}
     
  //   // }, [])
  // // }
  return (
    <ExpenseProvider>
    <div className="App">
      <NavBar />
      <Route path='/'>
        {!isLoggedin && <Redirect to='/Login' />}
      </Route>
      <Route path='/Forgetpassword'><ForgetPassword /></Route>
      <Route path='/Login'>
        <Login />
      </Route>
      <Route path='/Completeprofile'>{isLoggedin && <CompleteProfile />}</Route>
      <Route path='/VerifyEmail'> {isLoggedin &&<VerifyEmail />}</Route>
      <Route path='/MainPage'>
      {isLoggedin &&<MainPage />}
      </Route>
      <Route path='/Expenses'> <Expenses /></Route>
      
    </div>
    </ExpenseProvider>
  );
}

export default App;
