import React from "react";
import {useDispatch} from 'react-redux';
import { useState,useRef} from "react";
import { Button,Container,Row,Col,Card,Form,FloatingLabel } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { composeMail } from "../store/composeActions";

const Compose = () => {
    const emailref = useRef();
    const dispatch = useDispatch();
    const subref = useRef();
    const [editorState,setEditorState] = useState('');
    const editorChangeHanler = (editorState) =>{
setEditorState(editorState);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('hello')
        const tomail = emailref.current.value;
        const subject = subref.current.value;
        const body = editorState.getCurrentContent().getPlainText();
        dispatch(composeMail(tomail,subject,body));
       
        e.target.reset();
        setEditorState('');
       
    }
  return (
    <div>
      <Container className="my-3 mx-8">
        <Row >
          <Col >
            <Card style={{ width: "50rem" }}>
              <Card.Header>New Message</Card.Header>
              <Card.Body>
                <Form onSubmit ={submitHandler}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="To"
                    className="mb-3"
                  >
                    <Form.Control type="email"  required ref={emailref}/>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Subject"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="subject" ref={subref} required/>
                  </FloatingLabel>
                  <Editor
                    editorState={editorState}
                    placeholder='Type here'
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={editorChangeHanler}
                    editorStyle={{
                        border: "1px solid #C0C0C0",
                        height: "10rem",
                        padding: "8px",
                 
                        overflow: "hidden",
                      }}
                    
                  />
                  <div className="mt-3">
                  <Button variant="primary" type='submit'>Send</Button>
                  </div>
                 </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Compose;
