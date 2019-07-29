var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

var connection = mysql.createConnection({
     host: "localhost",
     user:"",
     password: "",
     database: "bamazon_db",
     port: 3306

})
connection.connect();

var display = function() {
    connection.query("SELECT * FROM prodcuts", function(err, res))

}