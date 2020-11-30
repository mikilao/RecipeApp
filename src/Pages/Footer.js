import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../App.css';

function Footer() {
    return (
        <div className="footer">
        <h2 className="title">Sign up Here</h2>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Control type="password" placeholder="Password" />
        <Form.Check type="checkbox" label="Check me out" />
        <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
        </Form.Control>
        <Form.Control type="range" />
        <Button variant="primary" type="submit">
            Submit
          </Button> 
           </div>
    );
  }

  export default Footer;
/*
function Footer(){
    return (
       
<Button variant="primary">Primary</Button>
  </div>  
  )}
  export default Footer; */