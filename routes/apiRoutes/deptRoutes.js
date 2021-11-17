const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');

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
//const addDept = () => {
//    inquirer.prompt([
//        {
//            type: 'input',
//            name: 'newDept',
//            message: 'What is the new department name?'
//        }
//    ])
//    .then(answer => {
//        const sql = `INSERT INTO department (name) VALUES (?)`;
//
//        const params = answer.newDept;
//
//        db.query(sql, params, (err, rows) => {
//            if (err) {
//                console.log(err);
//            }
//            console.log('Added ' + answer.newDept + ' to departments.');
//            console.log('\n');
//            console.table(rows);
//        });
//    });
//};
//
//
// delete depts (bonus)

module.exports = { viewDepts, addDept };