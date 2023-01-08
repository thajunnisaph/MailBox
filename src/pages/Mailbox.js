import React from 'react';
import './Mailbox.css';
import { Fragment } from 'react';
import {Col,Navbar,NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Mailbox = () => {
  return (
    <Fragment>
    <Col className=" bg-light">
        <Navbar className="navbar d-md bg-light list">
          <NavItem>
            <NavLink className="menu" to="/compose">
              Compose
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="menu" to="/mailbox">
              Inbox
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