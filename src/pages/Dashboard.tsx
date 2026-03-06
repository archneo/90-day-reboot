import React from 'react';
import DashboardSummary from '../components/DashboardSummary';

const Dashboard: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <DashboardSummary />
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Today's Motivational Message</h2>
                <p className="mt-2 text-gray-600 italic">"Believe you can and you're halfway there." - Theodore Roosevelt</p>
            </div>
        </div>
    );
};

export default Dashboard;