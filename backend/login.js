const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { connectToMongoDB } = require('./dbconection');
const app = express();
app.use(express.json());
app.use(cors());
connectToMongoDB();

const usersSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  job: { type: String },
  city: { type: String },
  location: { type: String },
  number: { type: String },
});

const Users = mongoose.model('users', usersSchema);

app.post('/api', async (req, res) => {
  const {name, password, job, city, location, number} = req.body;
  try {
  const newUsers = await Users.create({
  name,
  password,
  job,
  city,
  location,
  number,
  });
  console.log('Users', newUsers);
  res.status(201).json(newDriver);
  } catch (error) {
  console.error('Error submitting driver:', error);
  res.status(500).json({ message: 'Error submitting driver' });
  }
  });
app.get('/drive', async (req, res) => {
  try {
    const users = await Users.find();
    console.log('Retrieved users:', users);
    
    let tableHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Users</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container mt-5">
        <table class="table table-bordered table-striped">
          <thead class="thead-dark">
            <tr>
              <th>name</th>
              <th>password</th>
              <th>job</th>
              <th>city</th>
              <th>location</th>
              <th>number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>`;
    
    users.forEach((jobs) => {
      tableHtml += `
        <tr>
          <td>${jobs.name}</td>
          <td>${jobs.password}</td>
          <td>${jobs.job}</td>
          <td>${jobs.city}</td>
          <td>${jobs.location}</td>
          <td>${jobs.number}</td>
          <td>
            <button class="btn btn-progress" onclick="deleteUser('${jobs._id}')">Delete</button>
          </td>
        </tr>`;
    });
    
    tableHtml += `</tbody>
        </table>
      </div>
      
      <script>
        async function deleteUser(id) {
          try {
            const response = await fetch('/users/' + id, { method: 'DELETE' });
            if (response.ok) {
              alert('User deleted successfully');
              location.reload();
            } else {
              alert('Error deleting user');
            }
          } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user');
          }
        }
      </script>
      
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
    </body>
    </html>`;
    
    res.setHeader('Content-Type', 'text/html');
    res.send(tableHtml);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

