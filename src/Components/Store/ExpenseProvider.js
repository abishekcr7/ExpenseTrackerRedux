import React from "react";
import { useContext } from "react";
import expContext from "./Exp-Context";
import { useState,useEffect } from "react";
import AuthContext from "./Auth-Context";

const ExpenseProvider=(props)=>{
    const authCtx=useContext(AuthContext)
    const [truthyValue,setTruthy]=useState(false)
    const [isDeleted,setisDeleted]=useState(false)

    const [newExpenses,setNewExpenses]=useState({})
    const [expenses,setExpenses]=useState([])
   
    
   
    //   // useEffect(() => {
    //   if(authCtx.isLoggedin)
    //   { let email = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "");
    //   fetch(`https://react-https-d34b5-default-rtdb.firebaseio.com/expenses/${email}.json`)
    //     .then((res) => {
    //       console.log(res)
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       const datavalues=Object.values(data)
    //       console.log(datavalues)
    //        datavalues.map((item) => {
    //       //  expCtx.addItem(item)
    //       console.log(item);
    //       expenses.push(item);
    //       setExpenses(expenses);
    //       console.log(expenses)
    //    });
    //     });}
     
    // }, [])
   const fetchItemHandler = (expense)=>{
     setExpenses(expense)
   }


    const addExpensehandler= (expense)=>{

      // newExpenses.push(expense)
      // setNewExpenses(newExpenses)
      // expenses.push(expense)
      // newExpenses.push(expense)
      // setNewExpenses(expense)
      // console.log(newExpenses)
      expenses.push(expense)
      setExpenses(expenses)
      setTruthy(!truthyValue)
    }
   
    // console.log(expenses)
    const removeExpenseHandler= (id,_id)=>{
      console.log('handler',id)
    const newExpenses=expenses.filter((obj)=>{
      return obj.id !==id
    })
    let email = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "")
    fetch(`https://crudcrud.com/api/c6a7b4148b564d38a772d3d06030dff3/${email}/${_id}`,{method:'DELETE'}).then((res)=>{
    // window.location.reload()
    setExpenses(newExpenses)
    // setisDeleted(!isDeleted)
    return res.json();
    })

    }
    const expenseContext = {
        expenses: expenses,
        addItem: addExpensehandler,
        truthy:truthyValue,
        isDeleted:isDeleted,
        fetchItems:fetchItemHandler,
        removeItem: removeExpenseHandler,
        message: "Click here",
      };

      return (
        <expContext.Provider value={expenseContext}>{props.children}</expContext.Provider>
      ); 
}

export default ExpenseProvider;