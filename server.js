const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
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
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

app.get('/', (req,res) => {
    res.json({
        message: 'Hello Ladies'
    });
});

//Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});