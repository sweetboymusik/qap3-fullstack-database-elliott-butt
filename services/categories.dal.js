// import required libraries and db connection
const dal = require("./db");
const _ = require("lodash");

// get all categories from database
function getAllCategories() {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from category";

    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

// get specific category by name
function getCategoryByName(name) {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from category WHERE name = $1";
    const nameCleaned = _.startCase(name);

    dal.query(sql, [nameCleaned], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

// export functions
module.exports = {
  getAllCategories,
  getCategoryByName,
};
