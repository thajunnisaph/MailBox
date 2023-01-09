import { createSlice } from "@reduxjs/toolkit";
const composeinitialstate = {send:{},sentData:[],receivedData:[]}
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
         const id = action.payload;
         const existing = [...state.receivedData];
         existing.forEach((ele,ind) =>{
         if(ele.id ===id) {
            existing[ind].read =true;
         } });
         state.receivedData = existing;  
        },
        deleteFromInbox(state,action){
            const id = action.payload;
            const currentInbox = [...state.receivedData];
            state.receivedData = currentInbox.filter((item) => item.id !== id);
        },
        deleteFromSent(state,action){
            const id = action.payload;
            const currentsent = [...state.sentData];
            state.sentData = currentsent.filter((item) => item.id !==id);
        }
    }
})
export const composeActions = composeSlice.actions;
export default composeSlice.reducer;