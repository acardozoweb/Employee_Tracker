// DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '$uperLazy123',
    database: 'EmployeeTracker'
    },
    console.log('Connected to EmployeeTracker database')
);

db.connect(err => {
    if (err) throw (err);
    console.log('------------------------------------')
    console.log('|         EMPLOYEE TRACKER         |')
    console.log('------------------------------------')
    options();
})


///// Inquirer prompts /////

// Show options
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

// prompts for addEmployee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter the employee's first name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a first name.')
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter the employee's last name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a last name.')
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Enter the employee's role.",
            choices: ['']
        },
        {
            type: 'list',
            name: 'manager',
            message: "Enter the name of the employee's manager.",
            choices: ['']
        },
    ])
}

// prompts for addDepartment
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: "Enter the department name.",
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log('Please enter a department name.')
                }
            }
        }
    ])
};


// prompts for addRole
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: "Enter the role name.",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter a role name.')
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "Enter the salary.",
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('Please enter a salary.')
                }
            }
        },
        {
            type: 'input',
            name: 'roleDept',
            message: "Enter the role's department.",
            validate: roleDeptInput => {
                if (roleDeptInput) {
                    return true;
                } else {
                    console.log('Please enter a department name.')
                }
            }
        }
    ])
};

//prompts for updateEmployee
const updateEmployee = () => {
    inquirer.prompt([
        {

        }
    ])
};



