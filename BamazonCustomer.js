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

function displayData(response){
	console.log("ID | Name | Department | Price(USD) | Stock Quantity");
	for(var i = 0; i < response.length; i++){
		console.log("" + response[i].ItemID + " | " + response[i].ProductName + " | " + response[i].DepartmentName + " | " + response[i].Price + " | " + response[i].StockQuantity);
	}
	return "";
}

connection.query("SELECT * FROM Products", function(err, response){
	if(err){
		console.log(err);
	}
	else{
		console.log(displayData(response));
		inquirer.prompt([
			{
				type: "input",
				message: "Please enter the ID of the product you wish to purchase.",
				name: "choiceID"
			},
			{
				type: "input",
				message: "How many do you wish to purchase?",
				name: "choiceAMT"
			}
			]).then(function(userChoice){
				var id = parseInt(userChoice.choiceID);
				var amt = parseInt(userChoice.choiceAMT);
				if(id > 0 && id <= response.length){
					var newAMT = response[id - 1].StockQuantity - amt;
					if(newAMT >= 0){
						console.log("Thank you for your order.\nYour total cost is $" + (response[id - 1].Price * amt));
						connection.query("UPDATE Products SET StockQuantity=" + newAMT + " WHERE ItemID=" + id, function(err, response){
							if(err){
								console.log(err);
							}
						});
						connection.end();
					}
					else{
						console.log("Insufficient quantity.");
						connection.end();
					}
				}
				else{
					console.log("Invalid Product ID");
					connection.end();
				}
			});
	};
});