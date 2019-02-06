import React, {Component} from 'react';

import {Row, Col} from 'react-materialize';

import RecipeList from './../recipes/RecipeList';

class Dashboard extends Component {
  render() {
    return(
      <Row>
      <Col l={6} s={12}>
      <RecipeList/>
      </Col>
      <Col l={5} offset="l1" s={12}>
      Notificaciones
      </Col>
      </Row>

    );
  }
}

export default Dashboard;
