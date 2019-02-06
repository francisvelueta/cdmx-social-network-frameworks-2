import React from 'react';
import {Navbar} from 'react-materialize';
import SignInLink from './SignInLink';
import SignInOutLink from './SignInOutLink';


const Navigate =() => {
  return(
    <div>
    <Navbar brand='Mexican Food Lovers' right className="red lighten-1 hide-on-small-only">
    <SignInLink/>
    <SignInOutLink/>
  </Navbar>
  </div>

  );
}
export default Navigate;
