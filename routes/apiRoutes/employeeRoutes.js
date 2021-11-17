const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');

// view all employees
const viewEmployees = () => {
    const sql = `SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department, 
    role.salary,
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Showing all employees');
        console.table(rows);
    });
};
// view employees by manager (bonus)

// view employees by dept (bonus)

// add an employee


// update an employee role 

// update employee manager (bonus)

// delete employee (bonus)

module.exports = { viewEmployees };