import React from 'react';
import {Card, CardTitle, Container, } from 'react-materialize';

import image from './../../assets/office.jpg';

import Comments from './Comments';
const RecipeDetails =(props) => {
  const id = props.match.params.id;
  return (
    <Container>
      <Card header={ <CardTitle reveal image={image} waves='light'/> }
        title={ 'Pollo al horno - ' + id }
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p className="grey-text">Posteado por Francis Velueta</p>
            <p className="grey-text">3rd September, 2am</p>
            <p>Comentarios:</p>
            <Comments />
      </Card>
    </Container>

  );
}

export default RecipeDetails;
