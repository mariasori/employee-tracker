const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');

// view all depts
const viewDepts = () => {
    console.log('Showing all departments');
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    });
};

//// add a department

// delete depts

module.exports = viewDepts;