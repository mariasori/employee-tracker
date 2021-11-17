INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Legal Teal Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, 3),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, null),
    ('Kevin', 'Tupik', 4, 3),
    ('Malia', 'Brown', 5, null),
    ('Sarah', 'Lourd', 6, null),
    ('Tom', 'Allen', 7, 6),
    ('Christian', 'Eckenrode', 3, 2);

/*first_name, last_name, title, department, salary, manager

John, Doe, Sales Lead, Sales, 100000, Ashley Rodriguez
Mike, Chan, Salesperson, Sales, 80000, John Doe
Ashley, Rodriguez, Lead Engineer, Engineering, 150000, null
Kevin, Tupik, Software Engineer, Engineering, 120000, Ashley Rodriguez
Malia, Brown, Accountant, Finance, 125000, null
Sarah, Lourd, Legal Team Lead, Legal, 250000, null
Tom, Allen, Lawyer, Legal, 190000, Sara Lourd
Christian, Eckenrode, Lead Engineer, Engineering, 150000, Mike Chan
*/