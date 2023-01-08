import React,{useEffect} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { fetchReceivedMail } from '../store/composeActions';
const Inbox = () => {
    const inboxdata = useSelector((state) => state.compose.receivedData);
    const dispatch = useDispatch();
    useEffect(() =>{
    dispatch(fetchReceivedMail());
    
    },[dispatch])
  return (
    <div >
        {inboxdata.map((data) =>{
    return (
 <Container  className='my-3' key={data.id}>
 <Row xs={5} className='bg-light border p-3'>
     <Col>
     <div><b>From: {data.From}</b></div>
     </Col>
     <Col>
     <div><b>Subject: {data.subject}</b></div>
     </Col>
     <Col>
     <div>{data.body}</div>
     </Col>
     <Col>
     <div className='btn float-right'>
     <Button variant="danger" size='sm'>Delete</Button>
     </div></Col>
     
 </Row>
</Container>)}
        )}
       
    </div>
  )
}

export default Inbox;