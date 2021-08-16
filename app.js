// DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('../u-develop-it/db/connection');


// Connect to database
mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '$uperLazy123',
    database: 'EmployeeTracker'
    },
    console.log('Connected to EmployeeTracker database')
);

db.connect(err => {
    if (err) throw (err);
    console.log('-------------------------------------')
    console.log('|         EMPLOYEE TRACKER         |')
    console.log('------------------------------------')
    options();
})

// First inquirer prompts
const options = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Select what you would like to do.',
            choices: ['View Departments', 
                      'View Roles', 
                      'View Employees', 
                      'Add a Depertment', 
                      'Add a Role', 
                      'Add an Employee',
                      'Update an Employee Role'
                    ]
        }
    ])
};


