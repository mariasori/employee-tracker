const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');


//view all roles
const viewRoles = () => {
    const sql = `SELECT role.*, department.name AS dept_name
                FROM role
                LEFT JOIN department ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Showing all roles');
        console.table(rows);
    });
};

// add a role

module.exports = { viewRoles };