const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "contact_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("get started");
    start();
});

function start() {
    inquirer
        .prompt({
            name: "question",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "exit"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewAll();
                    break;

                case "View All Employees By Department":
                    viewAllByDp();
                    break;

                case "View All Employees By Manager":
                    viewAllByM();
                    break;

                case "Add Employee":
                    addEmployees();
                    break;

                case "Remove Employee":
                    rmEmployees();
                    break;

                case "Update Employee Role":
                    updateEmRole();
                    break;

                case "Update Employee Manager":
                    updateManager();
                    break;

                case "exit":
                    exit();
                    break;
            }
        })

}

function viewAll() {
    //* is everthing
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        console.table(res);
    })
    start();
}

function addEmployees() {
    var query = "SELECT first_name, last_name FROM employee ";
}