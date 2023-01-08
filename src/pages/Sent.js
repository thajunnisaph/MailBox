import React from 'react'
import { useEffect } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { fetchSentMail } from '../store/composeActions';

const Sent = () => {
  const dispatch = useDispatch();
    const sentmail = useSelector((state) => state.compose.sentData);
    useEffect(() =>{
    dispatch(fetchSentMail())
    },[dispatch]);
    console.log(sentmail);
  return (
    <div>
     {sentmail.map((mail) =>
     (<Container className='mt-3' key={mail.id}>
        <Row xs={5} className='bg-light border p-3'>
            <Col className='float' >
            <div ><b>To: {mail.To}</b> </div>
            </Col>
            <Col className='float'>
            <div><b>Subject: {mail.subject}</b></div>
            </Col>
            <Col className='float'>
            <div>{mail.body}</div>
            </Col>
            <Col>
            <div className='btn float-right'>
            <Button variant="danger"  size='sm'>Delete</Button>
            </div>
           
            </Col>
        </Row>
     </Container>))}
    </div>
  )
}

export default Sent;