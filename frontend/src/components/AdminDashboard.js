import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalStores, setTotalStores] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    // Fetch total users, stores, and ratings from backend
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Admin Dashboard</h2>
      <p>Total Users: {totalUsers}</p>
      <p>Total Stores: {totalStores}</p>
      <p>Total Ratings Submitted: {totalRatings}</p>
      
      {/* Example Table for Store/User Management */}
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>User/Store Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Store 1</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>User 1</td>
            <td>Pending</td>
            <td>Approve | Reject</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
