import axios from "axios"
import { composeActions } from "./composeReducer";

export const composeMail = (tomail,subject,body) =>{
    return async(dispatch) =>{
        const email = localStorage.getItem('email');
        const sendemail = email.replace(/\.|@/g, '');
        const send = await axios.post(`https://mailbox-5d189-default-rtdb.firebaseio.com/${sendemail}.json`,{
            send:{To:tomail,subject:subject,body:body}
        });
        if(send.status === 200){
            console.log(send);
            dispatch(composeActions.compose({tomail,subject,body}))
        }

        const Tomail = tomail.replace(/\.|@/g, '');
        await axios.post(`https://mailbox-5d189-default-rtdb.firebaseio.com/${Tomail}.json`,{
            inbox:{From:email,subject:subject,body:body}
        });
        
    }
}