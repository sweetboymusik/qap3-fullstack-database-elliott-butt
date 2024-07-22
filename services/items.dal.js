const dal = require("./db");
const _ = require("lodash");

function addItem(item) {
  return new Promise(function (resolve, reject) {
    const sql = `INSERT INTO public.items (item_name, price, category, description, image_url) VALUES ($1, $2, $3, $4, $5);`;

    dal.query(
      sql,
      [
        item.item_name,
        item.price,
        item.category,
        item.description,
        item.image_url,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
}

function deleteItem(name) {
  return new Promise(function (resolve, reject) {
    const sql = "DELETE FROM items WHERE item_name=$1";

    dal.query(sql, [name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

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

function patchItem(item) {
  return new Promise(function (resolve, reject) {
    const sql =
      "UPDATE items SET item_name=$2, price=$3, category=$4, description=$5 WHERE item_id=$1";

    dal.query(
      sql,
      [
        item.item_id,
        item.item_name,
        item.price,
        item.category,
        item.description,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
}

module.exports = {
  addItem,
  deleteItem,
  getAllItems,
  getItemsByCategory,
  getItemByName,
  getItemById,
  patchItem,
};
