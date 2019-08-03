var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');
var colors = require('colors');


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


// var displayItems = function () {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     console.log('     ++++++++++++++++++')
//     console.log('     Welcome to Bamazon');
//     console.log('     ++++++++++++++++++')
//   });
//   var table = new Table({
//     head: ['HEADER ONE', 'HEADER 2', 'HEADER THREE'],
//     colWidths: [15, 50, 10],
//     colAligns: ["center", "left", "right"],
//   });
//     for(var i = 0; i < res.length; i++){
//     displayTable.push(
//     [res[i].id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
//     );
// }

//     // for (var i; i < res.length; i++) {
//     //   table.push([res[i].id, res[i].products_label, res[i].price]);
//     // }
//     console.log(table.toString());
//     console.log('');


//   connection.end();
// };


var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
    if(err) throw err;
    console.log('                                  ++++++++++++++++++'.rainbow)
    console.log('                                  Welcome to Bamazon'.white);
    console.log('                                  ++++++++++++++++++'.rainbow)
    // console.log('hello'.green); 
    // console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap);
		var displayTable = new Table ({
			head: [" ID ".white.inverse, " Product Name ".white.inverse, " Catergory ".white.inverse, " Price ".white.inverse, " Quantity ".white.inverse],
			colWidths: [10,25,25,10,14]
    });
    
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].id,res[i].products_label, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
    
  });
  
    connection.end();
}



displayProducts();
// displayItems();
