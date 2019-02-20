import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';

import logo from './../../assets/logo.jpg';


class SignUp extends Component {
state = {
  email: '',
  password:'',
  firsName: '',
  lastName:''
}

handleChange = e => {
  this.setState({[e.target.id]: e.target.value});
}

handleSubmit=(e) => {
  e.preventDefault();
  console.log(this.state);
}

  render() {
    return (
<div>
<Row>
  <Col l={12} s={12}  className="margin-top center-align">
  <img className="responsive-img App-logo" src={logo}  alt="logo" />
</Col>
<Row >
<Col l={12} s={12} className="center-align">
<h4 className="almost-black">Registrate</h4>
</Col>
<Col l={4} s={12}  offset ="l4" className="center-align">
<Row >
<Col l={12} s={12} >
<form onSubmit={this.handleSubmit}>
<Input type="email" id="email" label="Email" validate l={12} s={12}  onChange={this.handleChange}/>
<Input type="password" id="password" label="Password" l={12} s={12} onChange={this.handleChange} />
<Input type="text" id="firstName" label="Nombre" l={12} s={12}  onChange={this.handleChange}/>
<Input type="text" id="lastName" label="Apellidos" l={12} s={12}  onChange={this.handleChange}/>
<Button s={12} className="amber darken-2" waves='red'>Registrar</Button>
</form>
</Col>
<Row>
<Col l={8}  offset="l2" s={12} className="margin-top">
<a href="/"   className="waves-effect waves-light btn light-blue darken-4 margin-btn-b"><i  className="fab fa-facebook-f font-ico"></i>acebook</a>
</Col>
<Col l={8}  offset="l2" s={12} >
<a href="/"className="waves-effect waves-light btn red darken-4 margin-b"><i  className="fab fa-google font-ico"></i>oogle</a>
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

export default SignUp;
