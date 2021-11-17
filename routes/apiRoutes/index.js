const express = require('express');
const inquirer = require('inquirer');
const db = require('../../db/connection');
const consoleTable = require('console.table');
const mysql = require('mysql2');


const { viewDepts } = require('./deptRoutes')
const { viewRoles } = require('./rolesRoutes') 
const { viewEmployees } = require('./employeeRoutes')


const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [  'View All Departments',
                        'View All Roles',
                        'View All Employees',
                       //'Add Department',
                       //'Add Role',
                       //'Add Employee',
                       //'Update Employee Role',
                       //'Update Employee Manager',
                       //'View Employees by Manager',
                       //'View Employees by Department',
                       //'Delete Department',
                       //'Delete Role',
                       //'Delete Employee',
                       //'View Budget of Department',
                       'Close Employee Tracker'
            ]
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View All Departments') {
            viewDepts();
            promptUser();
        }

        if (choices === 'View All Roles') {
            viewRoles();
            promptUser();
        }

        if (choices === 'View All Employees') {
            viewEmployees();
            promptUser();
        }

       //if (choices === 'Add Department') {
       //    addDept();
       //    promptUser();
       //}

        if (choices === 'Close Employee Tracker') {
            console.log('Connection ended');
            db.end();
        }
    
    })
}

module.exports = promptUser;