const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');

require('dotenv').config();

const promptUser = require('./routes/apiRoutes/index')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log(`\n`);
    console.log(`============================`);
    console.log(`==                        ==`);
    console.log(`==    Employee Tracker    ==`);
    console.log(`==                        ==`);
    console.log(`============================`);        
    console.log(`\n`);

    promptUser();
});



