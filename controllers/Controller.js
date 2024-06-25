const db = require("../config/db");

const getSalesData = (req, res) => {
  const query = "SELECT * FROM sales"; // Adjust this query according to your database schema
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

const getForecast = (req, res) => {
  const { product_id } = req.params;
  const query = "SELECT * FROM forecast WHERE product_id = ?"; // Adjust this query according to your database schema
  db.query(query, [product_id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  getSalesData,
  getForecast,
};
