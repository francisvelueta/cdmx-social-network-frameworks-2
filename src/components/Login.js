import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

import logo from './../assets/logo.jpg';
import SignIn from './SignIn';

class Login extends Component {
  render() {
    return (
<div>
<Row>
  <Col l={12}  className="margin-top center-align">
  <img className="responsive-img App-logo" src={logo}  alt="logo" />
</Col>
<Row >
<Col l={12} className="center-align">
<h2>Inicia Sesión o Registrate</h2>
</Col>
<Col l={4} offset ="l2" className="center-align">
<SignIn/>
</Col>

</Row>
</Row>
</div>


);
  }
}

export default Login;
