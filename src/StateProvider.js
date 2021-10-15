import React, {createContext, useContext, useReducer } from "react";
import reducer,{initialState} from './reducer';

//Prepares the data Layer
export const StateContext =createContext();

//Wrap our app and provide The Data Layer
export const StateProvider=( { children } )=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from data layer 
export const useStateValue =() => useContext(StateContext);