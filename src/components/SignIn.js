import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

class SignIn extends Component {
  render() {
    return(
      <Row >
      <Col l={12} >
      <Input type="email" label="Email" validate l={12} />
      <Input type="password" label="Password" l={12}  />
      <Button className="amber darken-2" waves='red'>Entrar</Button>
      </Col>
      <Col l={8} offset="l2" className="margin-top">

      <a className="waves-effect waves-light btn light-blue darken-4 margin-btn-b"><i  className="fab fa-facebook-f font-ico"></i>acebook</a>

      <a className="waves-effect waves-light btn red darken-4 "><i  className="fab fa-google font-ico"></i>oogle</a>
      <div className = ' btn-mar'>¿Aún no te has registrado?</div>
      </Col>
      </Row>
    );
    }
}

export default SignIn;
