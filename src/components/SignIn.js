import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

class SignIn extends Component {
  render() {
    return(
      <Row >
      <Col l={12} >
      <Input type="email" label="Email" validate l={12} />
      <Input type="password" label="Password" l={12}  />
      <Button className="amber darken-1" waves='red'>Entrar</Button>
      </Col>
      <Col l={4} offset="l4" className="margin-top">
      <i  className="left fab fa-facebook-f font-ico"></i>
      <i  className="right fab fa-google-plus-g font-ico"></i>
      </Col>
      </Row>
    );
    }
}

export default SignIn;
