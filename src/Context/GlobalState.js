import axios from "axios";
import React, {createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer'


// axios.get("http://localhost:3006/expenses")
// .then(response => {
//     setdata(response.data) 
// }).catch(error => {
//     error
// })




// Initial state
const initialState = {
    transactions: []
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
    const [data, setdata] = useState();
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction, 
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}