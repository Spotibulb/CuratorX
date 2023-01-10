const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const loginController = require('./controllers/loginController');
//const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initial serve
app.get('/', loginController.login, (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

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
