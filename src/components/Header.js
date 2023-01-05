import React from 'react';
import {Navbar,Container} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg='primary' expand='sm' variant='dark' >
            <Container>
               <Navbar.Brand href='/' >MailBox</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header