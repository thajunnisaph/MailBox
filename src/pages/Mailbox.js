import React from 'react';
import './Mailbox.css';
import { Fragment } from 'react';
import {Col,Navbar,NavItem,Badge,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Mailbox = () => {
  const receivedata = useSelector((state) => state.compose.receivedData);
  const unread = receivedata.reduce((acc,val) => (val.read === false ? acc+1:0),0);
  return (
    <Fragment>
    <Col className=" bg-light">
        <Navbar className="navbar d-md bg-light list">
          <NavItem>
            <NavLink className="menu" to="/compose">
              <Button> Compose</Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="menu" to="/inbox">
              Inbox<Badge bg="info">{unread} Unread</Badge>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="menu" to="/sent">
             Sent
            </NavLink>
          </NavItem>
          </Navbar>
          </Col>
    </Fragment>
  )
}

export default Mailbox