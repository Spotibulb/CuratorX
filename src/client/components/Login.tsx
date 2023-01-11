import React from 'react';
import { Link } from 'react-router-dom';
import loginUrl from '../auth';
import '../public/styles.css'


export default function Login() {
  return (
    <div className="login">
        <a href={loginUrl}>Login</a>
    </div>
  );
}
