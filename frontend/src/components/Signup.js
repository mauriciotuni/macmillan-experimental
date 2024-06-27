import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import Navbar from './Navbar';

function Signup() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/register', { name, surname, school, email, password })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert(error.response.data.error);
      });
  };

  return (
    <div className="background">
      <Navbar />
      <div className="form-container">
        <div className="form-box">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="School"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
