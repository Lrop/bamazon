var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');

var connection = mysql.createConnection({
     host: "localhost",
     user:"root",
     password: "password",
     database: "bamazon_db",
     port: 3306

});


connection.connect(function(err){
  if (err) throw err;
  console.log("CONNECTED" + connection.threadId);
});







//  function display() {
//     connection.query("SELECT * FROM prodcuts", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//     })

//     var table = new Table({
//         head: ['TH 1 label', 'TH 2 label']
//       , colWidths: [100, 200]
//     });
     
    
//     table.push(
//         ['First value', 'Second value']
//       , ['First value', 'Second value']
//     )};
     
//     display();
