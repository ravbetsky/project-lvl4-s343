import React from 'react';
import { UserConsumer } from './UserContext';

const UserNav = () => (
  <UserConsumer>
    {context => <nav className="navbar navbar-light bg-light mb-3">{context}</nav>}
  </UserConsumer>);

export default UserNav;
