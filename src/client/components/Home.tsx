import React from 'react';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer'
import '../public/styles.css'
import axios from 'axios'
import querystring from 'querystring';
// import logo from '../public/spotify-logo.png'



const code = new URLSearchParams(window.location.search).get('code');
console.log(code)
const redirectUri = 'http://localhost:8080/home';
const grant = 'authorization_code';

export default function Home() {
  const [song, changeSong] = useState([])
  useEffect(() => {
    /**
     * 
     * headers: 
     * { Authorization: Basic <base64 encoded client_id:client_secret>,
     * content-type: application/xww-form-urlendcode}
     * }
     * 
     * make a POST request to the /api/token endpoint
     * the body of this req must contain: grant_type "authorization code"
     * code: code from line 4
     * redirect_uri: redirect_uri from auth.js
     * 
     * (PKCE if used)
     * client_id : value string
     * code_verifier: ??? 
     * 
     * 
     * ex response: 
     * {
        "access_token": "NgCXRK...MzYjw",
        "token_type": "Bearer",
        "scope": "user-read-private user-read-email",
        "expires_in": 3600,
        "refresh_token": "NgAagA...Um_SHo"
      }
     */
      const data = {
        'grant_type': 'authorization_code',
        code: code,
        'redirect_uri': 'redirectUri'
      };
      var formBody : string[]= [];
      for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      let form = formBody.join("&");
    const fetchToken = async () => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: form,
      mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + Buffer.from('0cd0937e35ad49fca43d27f052676e0c:a459962e93254923b14ff21ec932c2e7')
        }, 
      }
    )
    
    console.log(result)
  
    }
    fetchToken()
    

  }, [])
  
  return (

  <div className="Home">
  <div className="logo"></div>
      <h2>Discover Daily</h2>
    {/* <div className="wrapper">
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
    <div className="line4"></div>
    <div className="line5"></div>
    <div className="line6"></div>
    <div className="line7"></div>
  </div> */}
    </div>

  )
}