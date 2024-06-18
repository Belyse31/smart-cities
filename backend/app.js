// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);

  const handleLogin = async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'name', password: 'password' }), 
    });

    const result = await response.json();
    setToken(result.token);
  };

  const fetchData = async () => {
    const response = await fetch('/api/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    setData(result);
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      {token && (
        <button onClick={fetchData}>Get Data</button>
      )}
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;