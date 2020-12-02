//to print time
const moment = require('moment');

// Logger only prints out the requests you make to the api and at what time you make it
// Eg. GET http://localhost:5000/api/movies/trending : 4:30 PM
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    } : ${moment().format()}`
  );
  next();
};

module.exports = logger;