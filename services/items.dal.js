const dal = require("./db");

function getAllItems() {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from items";

    dal.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

function getItemsByCategory(category) {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from items WHERE category = $1";

    dal.query(sql, [category], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

module.exports = {
  getAllItems,
  getItemsByCategory,
};
