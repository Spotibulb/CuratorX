const db = require('./models');

const songController = {};

songController.songQuery = async (req, res, next) => {
  /**
   * 
   * query the api and get a search result
   *  compare that against the user's song table database
   *    if song === the query  && not found in blacklist
   * continue down the list
   *    once we find a falsey result, we store the result in res.locals
   *    push that song into the userSong table database
   *  return next()
   * 
   * error handling return (error)
   */


}

module.exports = songController;