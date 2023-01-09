import axios from "axios";
import React from "react";
import { useState, useRef } from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux/es/exports";
import { useHistory } from "react-router-dom";
import { authActions } from "../store/authReducer";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const history  = useHistory();
  const dispatch = useDispatch();
  const emailref = useRef();
  const pswdref = useRef();
  const cnfmref = useRef();
  const swichLoginHandler = () => {
    setIsLogin((prev) => !prev);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpswd = pswdref.current.value;
    let url;
    if (!isLogin && (enteredpswd === cnfmref.current.value)) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUNXKoQ9cSntEA_3GCu3gHVbbtWWuKRag";
    } else if (!isLogin && (enteredpswd !== cnfmref.current.value)) {
      alert("password mismatch");
      return;
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUNXKoQ9cSntEA_3GCu3gHVbbtWWuKRag";
    }
 axios.post(url,{
    email:enteredemail,
    password:enteredpswd,
    returnSecureToken:true
 }).then((res) => {
    if(res.status ===200){
       const token =  res.data.idToken;
       const email = res.data.email;
       localStorage.setItem('token',token);
       localStorage.setItem('email',email);
       dispatch(authActions.login({token,email}));
       console.log("User has successfully signed up");
       history.replace('/welcome')
    }
 }).catch((err) =>{
    alert(err.response.data.error.message);
 })


  };
  return (
    <div>
      <Container className="mt-5 " style={{ marginLeft: "370px" }}>
        <Row>
          <Col xs={5}>
            <Card className="shadow-lg">
              <Card.Title as="h4" style={{ textAlign: "center", marginTop: 8 }}>
                {!isLogin ? "Sign Up" : "Login"}
              </Card.Title>
              <Card.Body>
                <Form onSubmit={formSubmitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      ref={emailref}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={pswdref}
                      minLength={7}
                      required
                    />
                  </Form.Group>
                  {!isLogin && (
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                      <Form.Control
                        type="password"
                        placeholder="ConfirmPassword"
                        ref={cnfmref}
                        minLength={7}
                        required
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3">
                    <div className="d-grid gap-1">
                      <Button variant="primary" type="submit">
                        {!isLogin ? "Sign Up" : "Login"}
                      </Button>
                    </div>
                    <div className="d-grid gap-1 p-3">
                      {isLogin && (
                        <Button variant="link">
                          Forgot Password?
                        </Button>
                      )}
                    </div>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="p-3" xs={5}>
            <div className="d-grid gap-1">
              <Button variant="outline-primary" onClick={swichLoginHandler}>
                {!isLogin
                  ? "Have an account?Login"
                  : "Dont have an account?SignUp"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
