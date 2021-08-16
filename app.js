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

    .then(data => {
        const { options } = data;

        if (options === 'View Departments') {
            return viewDepartments();
        } else if (options === 'View Roles') {
            return viewRoles();
        } else if (options === 'View Employees') {
            return viewEmployees();
        } else if (options === 'Add a Department') {
            return addDepartment();
        } else if (options === 'Add a Role') {
            return addRole();
        } else if (options === 'Add an Employee') {
            return addEmployee();
        } else if (options === 'Update an Employee Role') {
            return updateEmployee();
        }
    })
};


// VIEW ALL DEPARTMENTS
const viewDepartments = () => {
    const sql = `SELECT department.name AS Departments 
                FROM department`;

    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('----------')
        console.table(res)
        options();
    })
};

// VIEW ALL ROLES
const viewRoles = () => {
    const sql = `SELECT role.title AS Title,
                        role.salary AS Salary,
                        department.name AS Department
                FROM role
                JOIN department ON role.department_id = department.id;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('----------')
        console.table(res)
        options();
    })
};

// VIEW ALL EMPLOYEES
const viewEmployees = () => {
    const sql = `SELECT employee.id AS id,
                        employee.first_name,
                        employee.last_name,
                        role.title,
                        department.name AS Department,
                        role.salary,
                CONCAT (manager.first_name, " ",manager.last_name) AS Manager
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id;`

    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('----------')
        console.table(res)
        options();
    })
};


// ADD DEPARTMENT
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


// ADD ROLE
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


// ADD EMPLOYEE
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


// UPDATE EMPLOYEE
const updateEmployee = () => {
    inquirer.prompt([
        {

        }
    ])
};



