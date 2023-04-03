import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userSlice";
import redux from 'redux'
import { useReducer } from "react";
// const createstore=redux.createStore

export default configureStore({
    reducer:{
        user:userSlice
    }
})
//  export const store=createstore(reducer);