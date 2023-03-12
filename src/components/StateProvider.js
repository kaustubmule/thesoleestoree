import React, { createContext, useContext, useReducer } from 'react'

// This is DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//THIS IS HOW WE USE IT IN COMPONENTS
export const useStateValue = () => useContext(StateContext); 