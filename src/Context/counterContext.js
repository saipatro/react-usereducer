import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const CounterProvider = ({reducer, initialState = {}, children}) => {
    const value = useReducer(reducer, initialState);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useCounterState = () => {
    return useContext(Context);
} 