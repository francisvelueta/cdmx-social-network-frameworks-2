import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

import logo from './../assets/logo.jpg';
<<<<<<< HEAD

=======
import SignIn from './SignIn';
>>>>>>> a59e14a86efa07cea3b9f1d828212b1941f873f0

class Login extends Component {
  render() {
    return (
<div>
<Row>
  <Col l={12} s={12}  className="margin-top center-align">
  <img className="responsive-img App-logo" src={logo}  alt="logo" />
</Col>
<Row >
<Col l={12} s={12} className="center-align">
<h4 className="almost-black">Inicia Sesión</h4>
</Col>
<Col l={4} s={12}  offset ="l4" className="center-align">
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
</Col>
</Row>
</Row>
</div>


);
  }
}

export default Login;
