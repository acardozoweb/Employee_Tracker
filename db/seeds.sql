INSERT INTO department (id, name)
    VALUES 
    (1, "Sales"),
    (2, "Human Resources"),
    (3, "Accounting");

INSERT INTO role (title, salary, department_id)
    VALUES
    ("Sales Representative", 55000, 1),
    ("Human Resources Representative", 60000, 2),
    ("Accountant", 60000, 3),
    ("Head of Accounting", 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ("Michael", "Scott", 1, NULL),
    ("Jim", "Halpert", 1, 1),
    ("Pam", "Beesly", 1, 1),
    ("Dwight", "Shrute", 1, 1),
    ("Toby", "Flenderson", 2, 1),
    ("Angela", "Martin", 4, NULL),
    ("Kevin", "Malone", 3, 6),
    ("Oscar", "Martinez", 3, 6);