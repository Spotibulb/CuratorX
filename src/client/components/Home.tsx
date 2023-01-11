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
  
  const [link, setLink] = useState();
  const [username, setUsername] = useState('');

  const [songLink, setSongLink] = useState('https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?si=9b004eeef3754e16'+'?utm_source=generator')
  let userName;
  let spotifyArtist: string[] = [];
// use effect to request to server to get access token


    useEffect(() => {
      const getSong = () => {
      console.log('INVOKED', code)
      axios
        .post("http://localhost:3000/login", { code })
        .then((response) => {
  
          // If success then cut the code string from the URL and execute the other thing
          // window.history.pushState({}, null, "/");
          console.log(response.data.accessToken);
          // set user with access token to be used globally
          spotifyApi.setAccessToken(response.data.accessToken);

spotifyApi.getFollowedArtists({ limit : 49 })
  .then(function(data) {
      // 'This user is following 1051 artists!'
     console.log('This user is following ', data.body.artists, ' artists!');
      // randomize the artists
     for(let i=0; i< 5; i++){
      spotifyArtist.push(data.body.artists.items[i].id)
     }

     console.log(spotifyArtist)

     spotifyApi.getRecommendations({
      min_energy: 0.4,
      seed_artists: spotifyArtist,
      limit: 50,
      min_popularity: 50
    })
    .then(function(data) {
    let recommendation = data.body.tracks[0].id;
    setSongLink(`https://open.spotify.com/embed/track/${recommendation}?si=9b004eeef3754e16?utm_source=generator`)
    console.log(recommendation);
    }, function(err) {
    console.log("Something went wrong!", err);
    });
  }, function(err) {
    console.log('Something went wrong!', err);
  });




// grab user data
    spotifyApi.getMe()
    .then(function(data) {
      console.log('Some information about the authenticated user', data.body);
      
      //set username to user data's id
      userName = data.body.display_name
      setUsername(userName)

    }, function(err) {
      console.log('Something went wrong!', err);
    });
        })
        .catch(() => {
          //   If fail redirect to home page - Login page
        });}


      getSong()
    }, []);
//embed
//https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator
// open in spotify

  return (

  <div className="Home">
  <div className="logo"></div>
    <h2>{username}'s Discover Daily</h2>
      <iframe  src={songLink} width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>

  )
}