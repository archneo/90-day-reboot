import React from 'react';
import { useDataContext } from '../context/DataContext';

const DashboardSummary: React.FC = () => {
    const { summary } = useDataContext();

    return (
        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Program Day</p>
                <p className="text-2xl font-bold">{summary.programDay}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Cravings Today</p>
                <p className="text-2xl font-bold">{summary.cravingsToday}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Longest Streak</p>
                <p className="text-2xl font-bold">{summary.longestStreak} days</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-500">Money Saved</p>
                <p className="text-2xl font-bold">${summary.moneySaved.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default DashboardSummary;