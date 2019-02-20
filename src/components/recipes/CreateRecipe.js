import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';


class CreateRecipe extends Component {
state = {
  title: '',
  people:'',
  ingredients: ''
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
<Row >
<Col l={12} s={12} className="center-align">
<h4 className="almost-black">Publicar Receta</h4>
</Col>
<Col l={4} s={12}  offset ="l4" className="center-align">
<Row >
<Col l={12} s={12} >
<form onSubmit={this.handleSubmit}>
<Input type="text" id="title" label="Titulo" l={12} s={12}  onChange={this.handleChange}/>
<Input type="number" id="people" label="Personas" l={12} s={12}  onChange={this.handleChange}/>
<Input type="text" id="ingredients" label="Ingredientes" l={12} s={12}  onChange={this.handleChange}/>
<Row>
<Input className="btn-file" type="file" label="Foto" l= {6} s={12}  onChange={this.handleChange}/>
</Row>
<Button s={12} className="amber darken-2" waves='red'>Registrar</Button>
</form>
</Col>
</Row>
</Col>
</Row>
</div>


);
  }
}

export default CreateRecipe;
