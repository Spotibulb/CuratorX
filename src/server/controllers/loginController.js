const db = require('../models/SongModel');
// add to .env file after initial test
// const clientID = 'e168e2d99b2c4c8eac4d86741526cc6d';
// const secretID = '769e4d9e81034812bc0657b273f9dd41';
// const redirectURL = 'https://localhost:8080/home';
const loginController = {};

loginController.checkProfile = async (req, res, next) => {
  //initial query of database
  //if user previous login
  //go to song controller with user table info
  //else create new user
  //create table for user songs played
  // create table for blacklist
  //return error
};

// loginController.login = async (req, res, next) => {
//     console.log('test')
//     const scope = 'user-read-private user-read-email';
//     const state = generateRandomString(16);

//     res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: clientID,
//       scope: scope,
//       redirect_uri: redirectURL,
//       state: state
//     }));

//     return next;
// }

module.exports = loginController;
