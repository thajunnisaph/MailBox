import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './inbox.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { fetchReceivedMail } from '../store/composeActions';
const Inbox = () => {
    const inboxdata = useSelector((state) => state.compose.receivedData);
    const dispatch = useDispatch();
    useEffect(() =>{
    dispatch(fetchReceivedMail());
    
    },[dispatch]);
    if(inboxdata.length===0){
      return <p className='text-center fw-bold'> No mail Found</p>
    }
  return (
    <div >
        {inboxdata.map((data) =>{
          const url = `/inbox/${data.subject}`;
    return (
 <Container  className='my-3' key={data.id}>
 <Row xs={5} className='bg-light border p-3'>
    <Col xs={1}>
    {!data.read &&<span className='dot'></span>}
    </Col>
    <Link to={{pathname:url, state:data}} className='link'>
    <Col >
     <div><b>From: {data.From}</b></div>
     </Col>
     </Link>
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