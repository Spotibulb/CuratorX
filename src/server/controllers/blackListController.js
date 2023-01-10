const db = require('./models');

const blackListController = {};

blackListController.blackListQuery = async (req, res, next) => {
  //query blacklist table
  //array of names in blacklist table
  //put array of names if it exists into res object
  //continue on
    // error handling , return next(error)

}

module.exports = blackListController;