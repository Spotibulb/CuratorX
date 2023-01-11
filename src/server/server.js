const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const loginController = require('./controllers/loginController');
const spotifyWebApi = require('spotify-web-api-node');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const credentials = {
  clientId: '0cd0937e35ad49fca43d27f052676e0c',
  clientSecret: 'a459962e93254923b14ff21ec932c2e7',
  redirectUri: 'http://localhost:8080/home',
};

app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/login', (req,res) => {
  //  setup 
      let spotifyApi = new spotifyWebApi(credentials)
  
  //  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api     
      const code = req.body.code
  
      // Retrieve an access token
      spotifyApi.authorizationCodeGrant(code).then((data) => {
  
          // Returning the User's AccessToken in the json formate  
          res.json({
              accessToken : data.body.access_token,
          }) 
      })
      .catch((err) => {
          console.log(err);
          res.sendStatus(400)
      })
  
  })

//Initial serve
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

// static serving the assets
// app.use(express.static('assets'));

//404 handler
app.use((req, res, next) => {
  console.log('404 happened');
  res.status(404).send("Sorry can't find that!");
});

//error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred, global handler' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

//listening on port
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
