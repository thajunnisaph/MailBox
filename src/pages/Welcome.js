import React from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Welcome = () => {
  const history = useHistory();
  const mailboxHandler = () =>{
    history.push('/inbox');
  }

  return (
    <div className='mt-3'>
        <h2 className='p-3'>Welcome to your mailbox!!!</h2>
        <Button  className='mx-3' variant='success' onClick = {mailboxHandler}>Go to Mailbox</Button>
        <hr />
    </div>
  )
}

export default Welcome