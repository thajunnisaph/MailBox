import { createSlice } from "@reduxjs/toolkit";
const composeinitialstate = {send:{},}
const composeSlice =  createSlice({
    name:'compose',
    initialState:composeinitialstate,
    reducers:{
        compose(state,action){
       state.send = {
        tomail:action.payload.tomail,
        subject:action.payload.subject,
        body:action.payload.body
       }
        }
    }
})
export const composeActions = composeSlice.actions;
export default composeSlice.reducer;