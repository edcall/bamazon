var mysql = require("mysql");
var inquirer = require('inquirer');
var Table = require('cli-table');
var table = new Table({
  head: ['Item ID', 'Item', 'Price', 'Qnty'],
  colWidths: [20, 40, 15, 15]
});

var FgBlue = "\x1b[34m";
var FgWhite = "\x1b[0m";
var FgCyan = "\x1b[36m";
var FgGreen = "\x1b[32m";
var FgMagenta = "\x1b[35m";


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

start_app();

//Displays products in database table
function start_app() {
  connection.query('SELECT * FROM Products', function (err, res) {
    // Display products and price to user pushed from DB into the CLI-table 
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].price.toFixed(2), res[i].stock_quantity])
    }
    console.log(table.toString());
 // Beginning user experience 
 inquirer.prompt([{
      
  name: "choice",
  type: "list",
  message: "Use the arrow key to select your product",
  
  choices: function (value) {
    var listArray = [];
    for (var i = 0; i < res.length; i++) {
      listArray.push(res[i].product_name);
    }
    return listArray;
  }
}, {
  // User input
  name: "quantity",
  type: "input",
  message: "Great, now that you have picked your product, how many would you like?  Please note the amount available in column labeled Qnty.",
  validate: function (value) {
    if (isNaN(value) == false) {
      return true;
    } else {
      return false;
    }
  }
}]).then(function (answer) {
  // Gets product object user chose
  for (var i = 0; i < res.length; i++) {
    if (res[i].product_name == answer.choice) {
      var selectedItem = res[i];
    }
  }
  // Calculate remaining stock from purchase
  var updatedInventory = parseInt(selectedItem.stock_quantity) - parseInt(answer.quantity);
  var pSales = parseFloat(selectedItem.product_updated).toFixed(2);
  //console.log (`PSale: ${pSales}`);
  // If user does not pay attention to Qnty column and orders more than what is in stock, they will be asked if to make another purchase
  if (selectedItem.stock_quantity < parseInt(answer.quantity)) {
    console.log(`${FgCyan} Insufficient quantity! ${FgWhite}`);
    repeat();
  }
  // If user wants to purchase an amount in stock, the price will be presented and remaining stock quantity updated in the mysql
  else {

    // Get total from new purchase, fetch current sales from table and add together.
    var Total = (parseFloat(answer.quantity) * selectedItem.price).toFixed(2);
    //console.log(`Total: ${Total}`);
    //console.log (parseFloat(Total) + parseFloat(pSales)).toFixed(2);
    var pTotal = (parseFloat(Total) + parseFloat(pSales)).toFixed(2);
    //console.log(selectedItem.product_updated);
    var query = connection.query("UPDATE Products SET ?, ? WHERE ?", [{ stock_quantity: updatedInventory }, { product_updated: pTotal }, { item_id: selectedItem.item_id }], function (err, res) {
      if (err) throw err;
      console.log(`${FgCyan} Purchase successful! ${FgWhite}`);
      console.log("Your total is $ " + FgGreen + Total);
      repeat();
    });
  }

}); // .then of inquirer prompt

}); // first connection.query of the database

} 

//Function used to make the experience of the CLI mode like a program. Provides an exit choice to the user.
function repeat() {
inquirer.prompt({
// Ask user if he wants to purchase another item
name: "repurchase",
type: "list",
choices: ["Yes", "No"],
message: "Would you like to purchase another item?"
}).then(function (answer) {
if (answer.repurchase == "Yes") {
  time_2Buy();
}
else {
  console.log(`${FgMagenta} Thanks for being a smart shopper, please visit us again! ${FgWhite}`)
  connection.end();
}
});
}