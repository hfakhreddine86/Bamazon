// Packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var colors = require("colors");

// Create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "test",

    // Your password
    password: "test123",
    database: "bamazonDB"
});

// Connection and running sale function
connection.connect(function (err) {
    if (err) throw err;
    sale();

});

// Global variables
var product_choice;
var product_name;
var product_price;
var purchase_amt;
var stock_remaining;

// Selecting product based on ID
function productSearch() {
    inquirer
        .prompt({
            name: "item_id",
            type: "input",
            message: (colors.red("Please choose ID of product you want to buy:"))
        })
        .then(function (answer) {
            var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?";
            connection.query(query, {
                item_id: answer.item_id
            }, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log(colors.rainbow("\n******************************************************************"));
                    console.log((colors.red(res[i].item_id)) + " " + (colors.magenta(res[i].product_name)) + (colors.green(" $")) + (colors.green(res[i].price)));
                    console.log(colors.rainbow("\n******************************************************************"));
                    console.log((colors.blue(res[i].stock_quantity + " left in stock")));
                    console.log(colors.rainbow("\n******************************************************************"));
                    var decrementStock = res[i].stock_quantity;
                    product_price = res[i].price;
                    product_name = res[i].product_name;

                }
                var answer1 = answer;
                product_choice = answer;

                checkAmount(decrementStock);

            });
        });

}

function sale() {
    var query = "SELECT item_id, product_name, price FROM products;";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log((colors.red(res[i].item_id)) + (colors.white(" | ")) + (colors.magenta(res[i].product_name)) + (colors.white(" | ")) + (colors.green(" $")) + (colors.green(res[i].price)));
        }
        productSearch();
    });
}

function checkAmount(decrementStock) {
    inquirer
        .prompt({
            name: "amount",
            type: "input",
            message: (colors.red("How many would you like to buy?"))
        })
        .then(function (answer) {
            var buy_amount = answer.amount;
            purchase_amt = buy_amount;
            console.log(colors.rainbow("\n******************************************************************"));
            console.log((colors.red("You will be purchasing: ")) + (colors.green(buy_amount)) + " " + (colors.magenta(product_name)) + (colors.red(" for")) + (colors.green(" $")) + (colors.green(product_price)) + (colors.red(" each.")));
            console.log(colors.rainbow("\n******************************************************************"));

            var stock_left = decrementStock - buy_amount;

            stock_remaining = stock_left;
            if (stock_left < 0) {
                console.log(colors.rainbow("\n******************************************************************"));
                console.log(colors.red("Insufficient quantity!"));
                console.log(colors.rainbow("\n******************************************************************"));
                connection.end();
            } else {
                checkout();
            }

        });
}

function checkout() {
    console.log(colors.rainbow("\n******************************************************************"));
    console.log(colors.red("Checking Out"));
    console.log(colors.rainbow("\n******************************************************************"));

    var total_price = purchase_amt * product_price;
    console.log(colors.rainbow("\n******************************************************************"));
    console.log((colors.red("You're total price is ")) + (colors.green("$")) + (colors.green(total_price)));
    console.log(colors.rainbow("\n******************************************************************"));
    var query = "UPDATE products SET stock_quantity = " + stock_remaining + " WHERE item_id = " + product_choice.item_id + ";";
    connection.query(query, function (err, res) {
        console.log(colors.rainbow("\n******************************************************************"));
        console.log(colors.red("Updated Database"));
        console.log(colors.rainbow("\n******************************************************************"));
    });
    connection.end();
}