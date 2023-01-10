import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const handleClick = async () => {
        const result = await fetch('/')
        
    }
  return (
    <div>
      <button onClick={handleClick} type="submit">Authenticate</button>
      <Link to={'/home'}><div>Home</div></Link>
    </div>
  )
}