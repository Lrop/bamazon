var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

var connection = mysql.createConnection({
     host: "localhost",
     user:"me",
     password: "password",
     database: "bamazon_db",
     port: 3306

})
connection.connect();

var display = function() {
    connection.query("SELECT * FROM prodcuts", function(err, res) {


    })

    var table = new Table({
        head: ['TH 1 label', 'TH 2 label']
      , colWidths: [100, 200]
    });
     
    
    table.push(
        ['First value', 'Second value']
      , ['First value', 'Second value']
    );
     

}

display();