import React from 'react';
import { Link } from 'gatsby';
import styles from 'styled-components'

import { AuthUserContext } from '../Session';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const NavListItem = styles.li`
  display: inline-block;
  margin: 0 0 0 1rem;
`;

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }


  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  
  <ul>
   <NavListItem>
      <Link to={ROUTES.LANDING}>Landing</Link>
      </NavListItem>
    <NavListItem>
      <Link to={ROUTES.HOME}>Home</Link>
      </NavListItem>
    <NavListItem>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </NavListItem>
            {authUser.roles.includes(ROLES.ADMIN) && (
      <NavListItem>
        <Link to={ROUTES.ADMIN}>Admin</Link>
        </NavListItem>
    )}

  </ul>
);

const NavigationNonAuth = () => (
  <ul className="navlink">
    <NavListItem>
      <Link to={ROUTES.LANDING}>Landing</Link>
      </NavListItem>
    <NavListItem>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </NavListItem>

    <NavListItem>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </NavListItem>
  </ul>
);

export default Navigation;
