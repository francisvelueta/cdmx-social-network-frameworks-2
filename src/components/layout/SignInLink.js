import React from 'react';
import { NavItem} from 'react-materialize'

import { Link } from 'react-router-dom';

const SignInLink =() => {
  return(
    <div>
    <NavItem href="/">Publicar</NavItem>
    <NavItem >Salir</NavItem>
    <NavItem ><Link to="/" className="btn btn-floating light-green darken-4">FV</Link></NavItem>
  </div>

  );
}
export default SignInLink;
