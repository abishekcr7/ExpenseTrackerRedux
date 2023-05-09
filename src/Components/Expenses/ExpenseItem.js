// import ExpenseDate from "./ExpenseDate";
import { Button } from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetail";
import "./ExpenseItem.css";
import "./Expenses.css"
import { useContext } from "react";
import expContext from "../Store/Exp-Context";
import { useDispatch, useSelector } from "react-redux";
import { expActions } from "../Store/expense";


function ExpenseItem(props) {
  const userEmail=useSelector((state)=>state.auth.email)
  const dispatch=useDispatch();
  const expCtx=useContext(expContext)
  const deleteHandler=()=>{
    console.log(props.id)
    dispatch(expActions.deleteExpense(props.id))
    let email = userEmail.replace(/[^a-zA-Z0-9 ]/g, "")
    fetch(`https://crudcrud.com/api/672cf0b940ca4384a7d5440e2c4479f8/${email}/${props._id}`,{method:'DELETE'})
    .then((res)=>{
    // window.location.reload()
    // setisDeleted(!isDeleted)
    return res.json();
    })
    // expCtx.removeItem(props.id,props._id)
    
  }

  return (
    <li>
    <div className="expense-item">
      <ExpenseDate date={props.date} day={props.day} month={props.month} year={props.year}></ExpenseDate>
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}></ExpenseDetails>
      <Button variant="danger" onClick={deleteHandler}>Delete</Button>
    </div>
    </li>
  );
}

export default ExpenseItem;