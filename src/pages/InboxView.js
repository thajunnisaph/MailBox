import React from 'react'
import { useEffect } from 'react';
import { Card,Container} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { readMessage } from '../store/composeActions';

const InboxView = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const data = location.state;
    useEffect(() =>{
    dispatch(readMessage(data));
    },[dispatch])

  return (
    <Container xs={4} className='mt-5'>
        <Card >
            <Card.Header>From: {data.From}</Card.Header>
            <Card.Title className='p-3'>{data.subject}</Card.Title>
            <Card.Body>{data.body}</Card.Body>
        </Card>
    </Container>
  )
}

export default InboxView