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




//view all departments, 
//view all roles, 
//view all employees,
// add a department, 
// add a role, 
// add an employee, and 
// update an employee role
//