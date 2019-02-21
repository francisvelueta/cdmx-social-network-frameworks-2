import React from 'react';
import { NavItem} from 'react-materialize'

import { Link } from 'react-router-dom';

const SignInLink =() => {
  return(
    <div>
    <NavItem href="/">Publicar</NavItem>
    <NavItem >Salir</NavItem>
    <Link to="/" className="btn btn-floating light-green darken-4">FV</Link>
  </div>

  );
}
export default SignInLink;
