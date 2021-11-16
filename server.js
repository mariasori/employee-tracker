const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const mysql = require('mysql2');

//calling console.table
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});





//View All Employees
//View All Employees By Department
//View All Employees By Manager 
//Add Employee
//Remove Employee
//Update Employee Role 
//Update Employee Manager