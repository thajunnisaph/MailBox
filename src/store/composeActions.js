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
 
export const fetchSentMail = () =>{
    return async(dispatch) =>{
    const fetchdata = async()  =>{
    const mail = localStorage.getItem('email');
    const newmail = mail.replace(/\.|@/g, '');
    const response =  await axios.get(`https://mailbox-5d189-default-rtdb.firebaseio.com/${newmail}.json`)
    console.log(response.data); 
    let data = [];
    for(const Key in response.data){
        if(response.data[Key].send){
            data.push({
                id:Key,
                To:response.data[Key].send.To,
                subject:response.data[Key].send.subject,
                body:response.data[Key].send.body
            })
        }
    }
    console.log(data);
    return data;
    }
   const data = await fetchdata();
   dispatch(composeActions.fetchSentdata(data));
    }
}

export const fetchReceivedMail = () =>{
    return async(dispatch) =>{
        const receive = async() =>{
            const mail = localStorage.getItem('email');
            const newmail = mail.replace(/\.|@/g, '');
            const response = await axios.get(`https://mailbox-5d189-default-rtdb.firebaseio.com/${newmail}.json`);
            console.log(response.data);
            let data = [];
            for(const Key in response.data){
                if(response.data[Key].inbox){
                    data.push({
                        id:Key,
                        From:response.data[Key].inbox.From,
                        subject:response.data[Key].inbox.subject,
                        body:response.data[Key].inbox.body
                    })
                }
            }
            console.log(data);
            return data;
        }
        const data = await receive();
        dispatch(composeActions.fetchReceivedData(data));
        
    }
}