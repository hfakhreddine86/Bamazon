<h1>#Bamazon</h1>

<h2>### Synopsis</h2>
***

<h3>An interactive shopping node app where MySQL and Node.JS are used to allow users to purchase items as a customer.</h3>

<h2>##### Bamazon Customer Portal</h2>
***

<h3>The Bamazon Customer Portal allows users to view the current items available for purchase.  The user will be prompted to enter the item id# and how many items they wish to purchase.  If the item is in stock, the order will be completed and the user will see the total amount of their purchase.</h3>

***
<h4>Node Run</h4>
![Customer Portal](https://media.giphy.com/media/xUOxf7kFEggyHQZoxG/200w_d.gif)

***
<h4>User Select Product ID</h4>
![Customer Portal](assets/idSelect.png)

***
<h4>User Select Amount</h4>
![Customer Portal](assets/amount.png)

***
<h4>Output</h4>
![Customer Portal](assets/output.png)

***
<h3>The Bamazon Customer portal will also output an "Insufficient Quantity!" if the user inputs an amount greater than the current stock quantity.</h3>

***
<h4>If User Selects Amount Greater than Stock Quantity</h4>
![Customer Portal](assets/noStock.png)

***
<h4>Output "Insufficient Quanitity!"</h4>
![Customer Portal](assets/noStockOutput.png)

#### Technologies Used:
***

* Javascript
* nodeJS
* MySQL
* NPM Packages:
	- [mysql](github.com/mysqljs/mysql)
	- [inquirer](github.com/SBoudrias/Inquirer.js)
	- [colors](github.com/Marak/colors.js)

