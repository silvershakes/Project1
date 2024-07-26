const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Set up the MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'roor',
    password: '',
    database: 'newsportal'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Endpoint to fetch data
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM tblposts';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
