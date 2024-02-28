import React, { useState } from 'react';
import { StyledDashboardSection } from '../css/Dashboard.styles'
import TaskForm from '../components/TaskForm';


const Dashboard: React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    const handleAddTaskClick = () => {
        setShowForm(true)
    };

    return <StyledDashboardSection>
        
        <div className="dashboard-container">
        <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>

                <p>This is where the google calendar will be</p>
                    <button onClick={handleAddTaskClick}>Add Task</button>
                    {showForm && <TaskForm onClose={() => setShowForm(false)} />}
                    </div>
    </StyledDashboardSection>
}
// test

export default Dashboard;