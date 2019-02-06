import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
const ProjectList =() => {
  return (
    <div>
    <Card header={<CardTitle reveal image={"./../../assets/office.jpg"} waves='light'/>}
        title="Pollo al horno"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p>Posteado por Francis Velueta</p>
            <p className="grey-text">3rd September, 2am</p>
            <p><a href="#">Comentarios</a></p>
    </Card>
    <Card header={<CardTitle reveal image={"./../../assets/office.jpg"} waves='light'/>}
        title="Pollo al horno"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p>Posteado por Francis Velueta</p>
            <p className="grey-text">3rd September, 2am</p>
            <p><a href="#">Comentarios</a></p>
    </Card>
    <Card header={<CardTitle reveal image={"./../../assets/office.jpg"} waves='light'/>}
        title="Pollo al horno"
        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p>Posteado por Francis Velueta</p>
            <p className="grey-text">3rd September, 2am</p>
            <p><a href="#">Comentarios</a></p>
    </Card>
    </div>
  );
}

export default ProjectList;
