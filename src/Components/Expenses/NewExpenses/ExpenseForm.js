import { useState } from "react";

import "./ExpenseForm.css";
import { useContext } from "react";
import expContext from "../../Store/Exp-Context";
import AuthContext from "../../Store/Auth-Context";
import { useDispatch, useSelector } from "react-redux";
import { expActions } from "../../Store/expense";

const ExpenseForm = (props) => {
  const [enteredtitle, setTitlevalue] = useState("");
  const [enteredAmount, setAmountvalue] = useState("");
  const [enteredDate, setDatevalue] = useState("");
  const expCtx = useContext(expContext);
  const authCtx= useContext(AuthContext)
  const dispatch=useDispatch()


  const outputTitle = (event) => {
    setTitlevalue(event.target.value);
  };
  const outputAmount = (event) => {
    setAmountvalue(event.target.value);
  };
  const outputDate = (event) => {
    setDatevalue(event.target.value);
  };
  const email=useSelector((state)=>state.auth.email)

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: enteredtitle,
      amount: enteredAmount,
      // date: new Date(enteredDate),
      month:new Date(enteredDate).toLocaleString("en-US", { month: "long" }),
      day:new Date(enteredDate).toLocaleString("en-US", { day: "2-digit" }),
      year:new Date(enteredDate).getFullYear()
    };
    
    // console.log(expenseData)
    let newEmail=email.replace(/[^a-zA-Z0-9 ]/g, '')
    
    fetch(`https://crudcrud.com/api/672cf0b940ca4384a7d5440e2c4479f8/${newEmail}`, {
        method: "POST",
        body: JSON.stringify(expenseData),
        headers: { "Content-Type": "application/json" },
      }).then((res)=>{
        if(res.ok){
            // console.log(res)
            return res.json
        }
      }).then((data)=>{
        console.log(data.id)
        // dispatch(expActions.addExpenses(data))
      })
    // expCtx.addItem(expenseData) 
    dispatch(expActions.addExpenses(expenseData))
    // window.location.reload()
    // console.log(expCtx.expenses);

    setTitlevalue("");
    setAmountvalue("");
    setDatevalue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            id="title"
            onChange={outputTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            id="amount"
            onChange={outputAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={enteredDate}
            onChange={outputDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
