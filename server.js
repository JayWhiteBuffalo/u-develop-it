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
    //console.log(rows);
});

//Get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     //console.log(row);
// });

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?` , 1, (err, result) =>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
//     });

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?);`
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
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