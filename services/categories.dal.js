const dal = require("./db");

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

module.exports = {
  getAllCategories,
};
