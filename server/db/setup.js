const db = require('./index');
// const mysql = require('mysql2');

// db.User.sync()
//   .then( () => {
//     db.Zipcodes.sync();
//   })
//   .catch((err) => {
//     throw err;
//   })

db.sequelize.sync()
  .then(() => {
    // console.log('done');
  })
  .catch((err) => {
    throw err;
  });
