import { createSlice } from "@reduxjs/toolkit";

const initialState={expenses:[]};
const expenseSlice=createSlice({
    name:'expense',
    initialState:initialState,
    reducers:{
        addExpenses(state,action){
            state.expenses.push(action.payload);
        },
        loadExpenses(state,action){
            state.expenses=action.payload
        },
        deleteExpense(state,action){
            const newExpenses=state.expenses.filter((obj)=>{
                return obj.id !==action.payload
            })
            state.expenses=newExpenses;
        }
    }
})

export const expActions=expenseSlice.actions;

export default expenseSlice.reducer;
