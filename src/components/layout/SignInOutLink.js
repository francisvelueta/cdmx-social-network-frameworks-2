import React from 'react';
import { NavItem } from 'react-materialize'


const SignInOutLink =() => {
  return(
    <div>
    <NavItem href="/signup">Registrarse</NavItem>
    <NavItem href="/signin">Entrar</NavItem>
  </div>

  );
}
export default SignInOutLink;
