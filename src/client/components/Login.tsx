import React from 'react';
import { Link } from 'react-router-dom';
import loginUrl from '../auth';
export default function Login() {
  return (
    <div>
      <div>
        <a href={loginUrl}>Login</a>
      </div>
      <Link to={'/home'}>
        <div>Home</div>
      </Link>
    </div>
  );
}
