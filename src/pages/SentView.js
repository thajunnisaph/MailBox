import React from 'react'
import { useLocation } from 'react-router-dom';
import{Card,Container} from 'react-bootstrap';

const SentView = () => {
    const location = useLocation();
    const data = location.state;
  return (
    <Container xs={4} className='mt-5'>
        <Card >
            <Card.Header>To:  {data.To}</Card.Header>
            <Card.Title className='p-3'>{data.subject}</Card.Title>
            <Card.Body>{data.body}</Card.Body>
        </Card>
    </Container>
  )
}

export default SentView