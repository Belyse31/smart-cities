/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './../App.css';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState({
    name: "",
    password: "",
    job: "",
    city: "",
    location: "",
    number: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobs(prevJobs => ({ ...prevJobs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api', jobs);

      if (response.status === 201) {
        console.log('Registration successful');
        setJobs({
          name: "",
          password: "",
          job: "",
          city: "",
          location: "",
          number: ""
        });
        fetchJobs();
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/drive');
      console.log('Fetched users:', response.data);
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log('Current job State:', jobs);

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = 'http://localhost:3000/drive';
  };

  return (
    <div className="App">
      <fieldset>
        <h2>REGISTER</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={jobs.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={jobs.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              value={jobs.city}
              onChange={handleChange}
              placeholder="City"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="job"
              value={jobs.job}
              onChange={handleChange}
              placeholder="Job"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="location"
              value={jobs.location}
              onChange={handleChange}
              placeholder="Location"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="number"
              value={jobs.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="form-control"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
            <a href="#" onClick={handleClick}>View</a>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Jobs;
