import React from 'react';
import {Link} from 'react-router-dom';
import './inbox.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import { deleteMail} from '../store/composeActions';

const Inbox = () => {
    const inboxdata = useSelector((state) => state.compose.receivedData);
    const dispatch = useDispatch();
    // useEffect(() =>{
    // dispatch(fetchReceivedMail());
    
    // },[dispatch]);
    if(inboxdata.length===0){
      return <p className='text-center fw-bold p-7'> No mail Found</p>
    }
    const deletemailHandler = (id) =>{
      dispatch(deleteMail(id));
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
     <Button variant="danger" size='sm' onClick= {() => deletemailHandler(data.id)}>Delete</Button>
     </div></Col>
     
 </Row>
</Container>)}
        )}
       
    </div>
  )
}

export default Inbox;