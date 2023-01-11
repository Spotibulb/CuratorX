import React from 'react';
import { Link } from 'react-router-dom';
import loginUrl from '../auth';
import '../public/styles.css'


export default function Login() {
  return (
    <div className="login">
          <div className="wrapper music">
    <div className="line1 music"></div>
    <div className="line2 music"></div>
    <div className="line3 music"></div>
    <div className="line4 music"></div>
    <div className="line5 music"></div>
    <div className="line6 music"></div>
    <div className="line7 music"></div>
  </div>
  <h3>        
    <a className="login-link" href={loginUrl}>Login</a>
</h3>
    </div>
  );
}
