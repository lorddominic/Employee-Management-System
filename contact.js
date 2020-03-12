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
                "View All Departments",
                "View All Roles",
                "Add employees",
                "Add departments",
                "Add roles",
                "Remove Employee",
                "Update Employee Role",
                "exit"
            ]
        })
        .then(function(answer) {
            switch (answer.question) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewAllDpt();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "Add employees":
                    addEmployees();
                    break;
                case "Add departments":
                    addDpt();
                    break;
                case "Add roles":
                    addRoles();
                    break;
                case "Remove Employee":
                    rmEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Delete employees":
                    rmEmployees();
                    break;
                case "Delete departments":
                    rmDpt();
                    break;
                case "Delete roles":
                    rmRoles();
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
        start();
    })
}

function viewAllDpt() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewAllRoles() {
    var query = "SELECT * FROM employee_role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
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
                    start();
                }
            )
        })
}

function addDpt() {
    inquirer
        .prompt([{
            type: "input",
            name: "department",
            message: "Add a new department"
        }])
        .then(function(response) {
            connection.query(
                "INSERT INTO department (name) values(?)", [response.department],
                function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                }
            )
        })
}

function addRoles() {
    inquirer
        .prompt([{
                type: "input",
                name: "employee_role",
                message: "Add a role"
            },
            {
                type: "input",
                name: "salary",
                message: "Add a salary"
            },
            {
                type: "input",
                name: "department_id",
                message: "Add a dpt id"
            }
        ])
        .then(function(response) {
            connection.query(
                "INSERT INTO employee_role (title, salary, department_id) VALUES (?,?,?)", [
                    response.employee_role,
                    response.salary,
                    response.department_id
                ],
                function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                }
            )
        })
}

function rmEmployees() {
    console.log("Remove employee");
    inquirer
        .prompt([{
                type: "input",
                name: "remove",
                message: "Which employee do you want to remove?"
            } //how to use list to handle this
        ])
        .then(function(response) {
            connection.query(
                "DELETE FROM employee (first_name) WHERE first_name = (?)", [
                    response.remove
                ],
                function(err, res) {
                    if (err) throw err;
                    console.table(res);
                    viewAllEmployees();
                }
            )
        })
}

function updateEmployeeRole() {
    console.log("Update employee roles");
    inquirer
        .prompt([{
                type: "input",
                name: "id",
                message: "Update employee id"
            },
            {
                type: "choices",
                name: "role_id",
                message: "Update position id",
                choices: [1, 2, 3, 4, 5, 6]
            }
        ])
        .then(function(res) {
            connection.query(
                "UPDATE employee SET "
            )
        })
}