import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';
import Navbar from './Navbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login', { username, password })
      .then(response => {
        alert(response.data.message);
        if (response.data.message === 'Login successful') {
          navigate('/home');
        }
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="background">
      <Navbar />
      <div className="form-container">
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
