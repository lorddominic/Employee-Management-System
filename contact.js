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
            switch (answer.question) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Employees By Department":
                    viewAllByDpt();
                    break;

                case "View All Employees By Manager":
                    viewAllByManager();
                    break;

                case "Add Employee":
                    addEmployees();
                    break;

                case "Remove Employee":
                    rmEmployees();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Update Employee Manager":
                    updateEmployeeManager();
                    break;

                case "exit":
                    connection.end();
            }
        });

}

function viewAllEmployees() {
    //* is everthing
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    })
    start();
}

function addEmployees() {
    console.log("Add employee");
    inquirer
        .prompt([{
                name: "firstname",
                type: "input",
                message: "What is the employee's first name?",
            },
            {
                name: "lastname",
                type: "input",
                message: "What is the employee's last name?",
            },
            {
                name: "roleId",
                type: "lists",
                message: "Assign a role ID?",
                choices: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "managerId",
                type: "lists",
                message: "Assign a manager ID",
                choices: [1, 2]
            }
        ])
        .then(function(response) {
            connection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) values(?, ?, ?, ?)", [
                    response.firstname,
                    response.lastname,
                    response.roleId,
                    response.managerId
                ],
                function(err, res) {
                    if (err) throw err;
                    console.table(res);
                }
            )
            start();
        })
}

function updateEmployeeRole() {
    console.log("Update employee roles");
    var query = connection.query(
        "UPDATE employee_role SET ? WHERE ?", [

        ]
    )
}



// function rmEmployees(){
//     console.log("Remove employee");
//     inquirer
//         .prompt("Which employee do you want to remove?")
// }