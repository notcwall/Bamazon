var mysql = require('mysql');
var inquirer = require('inquirer');
var pw = require('./password');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: pw.password,
	database: "Bamazon"
});

function listProducts(){
	connection.query("SELECT * FROM Products", function(err, response){
		if(err){
			console.log(err);
		}
		else{
			console.log("ID | Name | Department | Price(USD) | Stock Quantity");
			for(var i = 0; i < response.length; i++){
				console.log("" + response[i].ItemID + " | " + response[i].ProductName + " | " + response[i].DepartmentName + " | " + response[i].Price + " | " + response[i].StockQuantity);
			}
			return "";
		}
	});
}

function listLowInventory(){
	connection.query("SELECT * FROM Products WHERE StockQuantity < 5", function(err, response){
		if(err){
			console.log(err);
		}
		else{
			console.log("ID | Name | Department | Price(USD) | Stock Quantity");
			for(var i = 0; i < response.length; i++){
				console.log("" + response[i].ItemID + " | " + response[i].ProductName + " | " + response[i].DepartmentName + " | " + response[i].Price + " | " + response[i].StockQuantity);
			}
			return "";
		}
	});
}

function addMore(){
	inquirer.prompt([
		{
			type: "input",
			message: "Input ID of item to update.",
			name: "updateID"
		},
		{
			type: "input",
			message: "Increase stock by... ",
			name: "updateAMT"
		}
		]).then(function(update){
			connection.query("UPDATE Products SET StockQuantity = StockQuantity + " + update.updateAMT + " WHERE ItemID= " + update.updateID, function(err, response){
				if(err){
					console.log(err);
				}
				connection.end();
			});
		});
}

function addProduct(){
	inquirer.prompt([
		{
			type: "input",
			message: "Name: ",
			name: "newName"
		},
		{
			type: "input",
			message: "Department: ",
			name: "newDepartment"
		},
		{
			type: "input",
			message: "Price: ",
			name: "newPrice"
		},
		{
			type: "input",
			message: "Stock Quantity: ",
			name: "newStockQuantity"
		}
		]).then(function(newProduct){
			connection.query('INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ("' + newProduct.newName + '", "' + newProduct.newDepartment + '", "' + newProduct.newPrice + '", "' + newProduct.newStockQuantity + '")', function(err, response){
				if(err){
					console.log(err);
				}
				connection.end();
			})
		});
}

inquirer.prompt([
	{
		type: "list",
		message: "Options:",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
		name: "managerChoice"
	}
	]).then(function(manager){
		switch(manager.managerChoice){
			case "View Products for Sale":
				listProducts();
				connection.end();
				break;

			case "View Low Inventory":
				listLowInventory();
				connection.end();
				break;

			case "Add to Inventory":
				addMore();
				break;

			case "Add New Product":
				addProduct();
				break;

			default:
				console.log("Invalid choice.");
				connection.end();
		}
	});