const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "wish.grabweb.in",
  user: "httpscoo_aimlerp",
  password: "httpscoo_aimlerp",
  database: "httpscoo_aimlerp",
  port: 2205,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = connection;
