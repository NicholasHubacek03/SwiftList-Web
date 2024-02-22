import React from 'react';
import { StyledDashboardSection } from '../css/Dashboard.styles'


const Dashboard: React.FC = () => {
    return <StyledDashboardSection>
        
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <p>This is where the google calender will be</p>
            <button>Add Task</button>
        </div>
    </StyledDashboardSection>;
};

export default Dashboard;