const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const consoleTable = require('console.table');
const mysql = require('mysql2');

//const deptRoutes = require('./routes/apiRoutes/deptRoutes');
//const { viewDepts } = require('./routes/apiRoutes/deptRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/api', deptRoutes);

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    promptUser();
});

const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View All Departments',
                        'View All Roles',
                        'View All Employees',
                        'Add Department',
                        'Add Role',
                        'Add Employee',
                        'Update Employee Role',
                        'Update Employee Manager',
                        'View Employees by Manager',
                        'View Employees by Department',
                        'Delete Department',
                        'Delete Role',
                        'Delete Employee',
                        'View Budget of Department'
            ]
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Departments') {
            viewDepts();
        }
    })
}

const viewDepts = () => {
    console.log('Showing all departments');
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};