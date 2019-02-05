import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

class SignIn extends Component {
  render() {
    return(
      <Row >
      <Col l={12} s={12} >
      <Input type="email" label="Email" validate l={12} s={12}  />
      <Input type="password" label="Password" l={12} s={12}  />
      <Button s={12} className="amber darken-2" waves='red'>Entrar</Button>
      </Col>
      <Row>
      <Col l={8}  offset="l2" s={12} className="margin-top">
      <a className="waves-effect waves-light btn light-blue darken-4 margin-btn-b"><i  className="fab fa-facebook-f font-ico"></i>acebook</a>
      </Col>
      <Col l={8}  offset="l2" s={12} >
        <a className="waves-effect waves-light btn red darken-4 margin-b"><i  className="fab fa-google font-ico"></i>oogle</a>
      </Col>
      <Col l={8}  offset="l2" s={12} >
      <div className = ''>¿Aún no te has registrado?</div>
      </Col>

      </Row>
      </Row>
    );
    }
}

export default SignIn;
