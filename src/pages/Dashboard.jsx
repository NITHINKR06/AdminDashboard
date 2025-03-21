import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto">
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="mt-4 text-lg">Welcome to the admin dashboard. Here you can manage all credentials and view key metrics.</p>
            {/* Add more components or metrics here as needed */}
        </div>
    );
};

export default Dashboard;