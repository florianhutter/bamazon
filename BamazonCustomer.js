
var mysql = require("mysql");
var table = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root", 

    password: "", 
    database: "products_db" 

});


function renderTable() {
    connection.connect(function(err) {

        connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err
        else console.table(res , "\n");
        inquireThisId();
        });
    });
}
renderTable();


function inquireThisId() {  

    inquirer.prompt([

        {
         type: "input",
         name: "id",
         message: "Please enter a valid Item number.\n",
         validate: function(value) {
            if (!isNaN(value) && value < 11) {
                return true;
            }
            return false;
         }
        },

        {
         type: "input",
         name: "quant",
         message: "Please type the quantity you would like to buy. \n",
         validate: function(value) {
            if (!isNaN(value)) {
                return true;
            }
            return false;
            }
        }

        ]).then(function(answer) {


            var userId = answer.id;
            console.log("Chosen item id: " , userId);

            var userQuant = answer.quant;
            console.log("Chosen quantity from stock: " , userQuant , "\n");

            connection.query("SELECT * FROM products WHERE ?", [{ item_id : answer.id }], function(err, res) {
                if (err) throw err;             
             

                console.table(res);
                var current_quantity = res[0].stock_quantity;
                console.log("This is the current quantity in stock: " , current_quantity);
                var price = res[0].price;
                var remaining_quantity = current_quantity - answer.quant;
                console.log("This is the remaining quantity in stock: " , remaining_quantity);

                if(current_quantity > answer.quant) {

                    console.log("Quantity remaining: " + remaining_quantity);
                    console.log("Total Cost: " + (answer.quant * price) + "\n");

                    connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?",
                    [
                    remaining_quantity, answer.id
                    ],


                        function(err, res){
                            console.table(res);
                        });

                    connection.query("SELECT * FROM products", function(err, res) {

                        console.log("Here is an updated inventory: ");
                        console.log("*******************************************************************\n");
                        console.table(res);
                    });

                } else {
                    console.log("Insufficient amounts, please try again!");
                }

            connection.end();

            });
        })

}