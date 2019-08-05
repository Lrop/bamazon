var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');
var colors = require('colors');
var clc = require("cli-color");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bamazon_db",
  port: 3306

});


connection.connect(function (err) {
  if (err) throw err;
  // console.log("CONNECTED" + connection.threadId);
});


var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
    if(err) throw err;
    console.log('                                  ++++++++++++++++++'.rainbow)
    console.log('                                  Welcome to Bamazon'.red);
    console.log('                                  ++++++++++++++++++'.rainbow)

		var displayTable = new Table ({
			head: [" ID ".white.inverse, " Product Name ".white.inverse, " Catergory ".white.inverse, " Price ".white.inverse, " Quantity ".white.inverse],
			colWidths: [10,25,25,10,12]
    });
    
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].id,res[i].products_label, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
    console.log(displayTable.toString());
    console.log('');
    promtUser();
    
  });
  
    // connection.end();
}



// displayProducts();



var promtUser = function() {
  inquirer.prompt({
    name:"purchasedPRODUCT",
    type: "input",
    message: "Please enter the ID of the desired item you wish to buy!"

  }).then(function(responseFIRST){
    var selection = responseFIRST.purchasedPRODUCT;
    connection.query("SELECT * FROM products WHERE Id=?", selection, function(err, res){
      // connection.end();
      if (err) throw err;
      if (res.length === 0){
        console.log("we dont got it");
        // promtUser();
        // promtUser();
      }else {
        console.log("good");
        
      };
      connection.end();
    });
  });
};
// promtUser();
displayProducts();
