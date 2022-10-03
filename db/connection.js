const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        //Your MySql password
        password: 'Z?}(3e&x>&)',
        database: 'election'

    }
);

module.exports = db;