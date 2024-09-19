import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

function StoreOwnerDashboard() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Fetch list of ratings for the store
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Store Owner Dashboard</h2>
      <p>Average Rating: {/* Calculate and display average rating */}</p>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rating) => (
            <tr key={rating.userId}>
              <td>{rating.userName}</td>
              <td>{rating.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StoreOwnerDashboard;
