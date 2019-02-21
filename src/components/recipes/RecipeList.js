import React from 'react';
import image from './../../assets/office.jpg'
import {Row, Col, Card, CardTitle} from 'react-materialize';

import RecipeSummary from './RecipeSummary';

const ProjectList =() => {
  return (
    <div>
      <RecipeSummary />
      <RecipeSummary />
      <RecipeSummary />
    </div>
  );
}

export default ProjectList;
