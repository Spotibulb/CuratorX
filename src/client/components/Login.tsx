import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const clientID: string = 'e168e2d99b2c4c8eac4d86741526cc6d';
  const redirectURL: string = 'localhost:8080/';
  const scopes:string[] = ['user-library-read','user-read-private','user-read-email'];
  const scope = 'user-read-private user-read-email';
  const handleClick = async () => {
    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scopes.join('%20')}`;
    const windowWidth = 400;
    const windowHeight = 600;
    const left = (screen.width - windowWidth) / 2;
    const top = (screen.height - windowHeight) / 2;

    // Open the window
    // const windowOptions = `height=${windowHeight},width=${windowWidth},left=${left},top=${top}`;
    // window.open(authorizeUrl, 'Spotify Login', windowOptions);

    window.location.href = authorizeUrl;
    // window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURL}&scope=${scope}`

  }
  return (
    <div>
      <button onClick={handleClick} type="submit">Authenticate</button>
      <Link to={'/home'}><div>Home</div></Link>
    </div>
  )
}