import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";


import { Buffer } from 'buffer'
import '../public/styles.css'
// import logo from '../public/spotify-logo.png'


const spotifyApi = new SpotifyWebApi();
const code = new URLSearchParams(window.location.search).get('code');

export default function Home() {
  
  // const [accessToken, setAccessToken] = useState();
  let userName;
// use effect to request to server to get access token
    useEffect(() => {
      axios
        .post("http://localhost:3000/login", { code })
        .then((response) => {
  
          // If success then cut the code string from the URL and execute the other thing
          // window.history.pushState({}, null, "/");
  
          console.log(response.data.accessToken);
          // set user with access token to be used globally
          spotifyApi.setAccessToken(response.data.accessToken);

// grab user data
    spotifyApi.getMe()
    .then(function(data) {
      console.log('Some information about the authenticated user', data.body);
      
      //set username to user data's id
      userName = data.body.id

      // grab playlists with id
      spotifyApi.getUserPlaylists(userName)
  .then(function(data) {
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
  });

    }, function(err) {
      console.log('Something went wrong!', err);
    });
        })
        .catch(() => {
          //   If fail redirect to home page - Login page
        });
    }, [code]);

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