const express = require('express');
const app = express();

const db = require('./dbconnection'); // Corrected the require statement for dbconnection

app.use(express.json());

app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});