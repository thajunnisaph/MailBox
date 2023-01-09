import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './inbox.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { deleteMailFromSent, fetchSentMail } from '../store/composeActions';

const Sent = () => {
  const dispatch = useDispatch();
    const sentmail = useSelector((state) => state.compose.sentData);
    useEffect(() =>{
    dispatch(fetchSentMail())
    },[dispatch]);
    console.log(sentmail);
    if(sentmail.length===0){
      return <p className='text-center fw-bold '> No mail Found</p>
    }
    const deleteHandler = (id) =>{
    dispatch(deleteMailFromSent(id));
    }
  return (
    <div>
     {sentmail.map((mail) =>{
     const url = `/send/${mail.subject}`;
     return (<Container className='mt-3' key={mail.id}>
        <Row xs={5} className='bg-light border p-3'>
        <Link to={{pathname:url, state:mail}} className='link'>
            <Col className='float' >
            <div ><b>To: {mail.To}</b> </div>
            </Col>
            </Link>
            <Col className='float'>
            <div><b>Subject: {mail.subject}</b></div>
            </Col>
            <Col className='float'>
            <div>{mail.body}</div>
            </Col>
            <Col>
            <div className='btn float-right'>
            <Button variant="danger"  size='sm' onClick = {() => deleteHandler(mail.id)} >Delete</Button>
            </div>
           
            </Col>
        </Row>
     </Container>)})}
    </div>
  )
}

export default Sent;