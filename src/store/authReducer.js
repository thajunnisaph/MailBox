import { createSlice } from "@reduxjs/toolkit";
 const authinitialstate = {token:'' ,email:'',isAuthenticated:false}
const authSlice = createSlice({
    name:'auth',
    initialState:authinitialstate,
    reducers:{
        login(state,action){
        state.email= action.payload.email;
        state.token = action.payload.token;
        state.isAuthenticated =true
        },
        logout(state){
       state.email = '';
       state.token = '';
       state.isAuthenticated=false;
        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;