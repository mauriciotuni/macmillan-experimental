import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import CreateTest from './components/CreateTest';
import MyTests from './components/MyTests';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Main />
        </Router>
    );
}

function Main() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="App">
            {!isAuthPage && <Navbar />}
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create-test" element={<CreateTest />} />
                <Route path="/my-tests" element={<MyTests />} />
            </Routes>
        </div>
    );
}

export default App;
