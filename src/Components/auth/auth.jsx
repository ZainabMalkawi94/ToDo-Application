import React from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../Context/Auth/authContext';

class Auth extends React.Component {

  static contextType = LoginContext;

  render() {

    const isLoggedIn = this.context.loggedIn;
    const canDo = this.props.capabilities ? this.context.can(this.props.capabilities) : true;
    const okToRender = isLoggedIn && canDo;
    console.log('///////////////////////////////////////////////////////',this.props)

    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    );
  }
}

export default Auth;