import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="card">
                <h3>Create Test</h3>
                <button onClick={() => navigate('/create-test')}>Create</button>
            </div>
            <div className="card">
                <h3>My Tests</h3>
                <button onClick={() => navigate('/my-tests')}>View</button>
            </div>
        </div>
    );
}

export default Dashboard;
