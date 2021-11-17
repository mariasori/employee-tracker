const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');

// view all depts
const viewDepts = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Showing all departments');
        console.table(rows);
    });
};

//// add a department

// delete depts

module.exports = { viewDepts };