var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require('cli-table');
var table = new Table({
  head: ['Item ID', 'Item', 'Price', 'Qnty'],
  colWidths: [20, 40, 15, 15]
});
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Babyheri20!9",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});