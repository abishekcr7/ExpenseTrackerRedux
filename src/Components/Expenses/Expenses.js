import React, { useContext } from "react";
import NewExpenses from "./NewExpenses/NewExpense";
import ExpenseList from "./ExpenseList";
import { useEffect } from "react";
import AuthContext from "../Store/Auth-Context";
import expContext from "../Store/Exp-Context";

const Expenses = ()=>{
    const authCtx=useContext(AuthContext)
    const expCtx=useContext(expContext)
 
    return(<div>
        <NewExpenses />
        <ExpenseList />
    </div>)
}

export default Expenses;