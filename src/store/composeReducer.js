import { createSlice } from "@reduxjs/toolkit";
const composeinitialstate = {send:{},sentData:[],receivedData:[],read:false}
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
        },
        fetchSentdata(state,action){
            state.sentData = action.payload;
            console.log(state.sentData);
        },
        fetchReceivedData(state,action){
            state.receivedData = action.payload;
            console.log(state.receivedData);
        },
        readMessage(state,action){
            state.read = true;
        }
    }
})
export const composeActions = composeSlice.actions;
export default composeSlice.reducer;