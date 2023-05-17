import React from "react";
import { createContext } from "react";

const cartContext = React.createContext({
    items:[],
    totalAMount:0,
    addItem: (item)=>{},
    removeItem:(id)=>{}
})

export default cartContext;