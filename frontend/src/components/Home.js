import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="box">
        <button className="home-button" onClick={() => window.location.href = '/login'}>Login</button>
        <button className="home-button" onClick={() => window.location.href = '/signup'}>Signup</button>
      </div>
    </div>
  );
};

export default Home;
