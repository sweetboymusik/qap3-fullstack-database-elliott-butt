const dal = require("./db");
const _ = require("lodash");

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

function getItemByName(name) {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from items WHERE item_name = $1";
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

function getItemById(id) {
  return new Promise(function (resolve, reject) {
    const sql = "SELECT * from items WHERE item_id = $1";

    dal.query(sql, [id], (err, result) => {
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
  getItemByName,
  getItemById,
};
