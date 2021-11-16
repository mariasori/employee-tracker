const mysql = require('mysql2')

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'ucf8787Bootcamp!',
        database: 'employees'
    },
    console.log('Connected to the election database.')
);

module.exports = db;