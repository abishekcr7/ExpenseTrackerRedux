import React from "react";
const expContext= React.createContext({
    expenses: [],
    addItem: (item) => {},
    fetchItems:(item)=>{},
    removeItem: (id,fetchId) => {},
    truthy:null,
    isDeleted:null,
    clearCart:()=>{},})

export default expContext;

