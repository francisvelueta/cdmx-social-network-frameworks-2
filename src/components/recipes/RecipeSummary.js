import React from 'react';
import {Card, CardTitle} from 'react-materialize';

import image from './../../assets/office.jpg'

const RecipeSummary =() => {
  return(
    <Card header={<CardTitle reveal image={image} waves='light'/>}
        title="Pollo al horno"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p>Posteado por Francis Velueta</p>
            <p className="grey-text">3rd September, 2am</p>
            <p><a href="#">Comentarios</a></p>
    </Card>

  );

}

export default RecipeSummary;
