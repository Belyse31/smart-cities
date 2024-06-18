/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            setLoginStatus('login successful'); // Assuming the backend responds with a message
        } else {
            setError("Invalid username or password");
            setLoginStatus("");
        }
    } catch (error) {
        setError("An error occurred. Please try again later.");
        setLoginStatus("");
    }
  };

  return (
    <fieldset>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loginStatus && <p className="text-green-500 mb-4">{loginStatus}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1 " htmlFor="username">
            username:
          </label>
          <input
            type="username"
            id="username"
            name="username"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
    </fieldset>
  );
};

export default Login;