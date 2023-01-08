import React from 'react';
import {Navbar,Container,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { authActions } from '../store/authReducer';
import {useDispatch,useSelector} from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.token);
  const logoutHandler = () =>{
   dispatch(authActions.logout());
   localStorage.clear();
   history.replace('/');
  }
  return (
    <div>
        <Navbar bg='primary' expand='sm' variant='dark' >
            <Container>
               <Navbar.Brand  >MailBox</Navbar.Brand>
              {isLogin && <Button variant='warning' onClick={logoutHandler}>Logout</Button>}
            </Container>
        </Navbar>
    </div>
  )
}

export default Header