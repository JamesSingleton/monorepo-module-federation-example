import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/users/test">Test</Link>
    <Link to="/users">Users</Link>
  </div>
);

export default Navigation;
