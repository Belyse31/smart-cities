const express = require("express");
const cors = require("cors");
const userRoutes = require("./userRoutes");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dbconnectio= require('./dbconection');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", userRoutes);

const options = {
  origin:'http://localhost:5173',
  optionsSuccessStatus:200
};

 app.use(cors(options))
  app.use(bodyParser.json());
  app.use('/api', userRoutes);
  
  app.post('/api/users', (req, res) => {

    const { name,password, job, city, location, number } = req.body;
    console.log(name);
  
    const data = new Data({ name, job,password, city, location, number });
  
   
  data.save((err) => {
    if (err) {
      res.status(500).send('Error saving data to database');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});


  
app.listen(3000, () => {
  console.log("The app is listening on port 3000");
});