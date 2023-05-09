import React, { useCallback, useState } from "react";
import { useContext,useEffect } from "react";
import expContext from "../Store/Exp-Context";
import EpxenseItem from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import AuthContext from "../Store/Auth-Context";
import { useDispatch, useSelector } from "react-redux";
import { expActions } from "../Store/expense";
const ExpenseList = (props)=>{
    const authCtx=useContext(AuthContext)
    const expCtx=useContext(expContext)
    let datavalue;

    const [exp,setExp]=useState([])
    const [newExp,setNewExp]=useState([])
    const email=useSelector((state)=>state.auth.email)
    const dispatch=useDispatch();

    const expenses=useSelector((state)=>state.expenses.expenses)

     
    useEffect(() => {
      let newEmail = authCtx.userEmail.replace(/[^a-zA-Z0-9 ]/g, "");
      fetch(`https://crudcrud.com/api/672cf0b940ca4384a7d5440e2c4479f8/${newEmail}`)
        .then((res) => {
          // console.log(res)
          return res.json();
        })
        .then((data) => {
          // expCtx.fetchItems(data)
          console.log(data)
          // setExp(data)
          dispatch(expActions.loadExpenses(data))
      //  });
        });
    }, [])
    console.log(expenses)
    return(
        <ul>
            {expenses.map((expense) => (
            <ExpenseItem
              key={expense._id}
              id={expense.id}
              _id={expense._id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              day={expense.day}
              month={expense.month}
              year={expense.year}
            />
          ))}
          </ul>
    )

}

export default ExpenseList