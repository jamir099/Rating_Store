import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

function UserDashboard() {
  const [stores, setStores] = useState([]);

  // Fetch store data on component mount
  useEffect(() => {
    // You should fetch store data from backend here and update state
    setStores([
      { id: 1, name: "Store 1", address: "Address 1", overallRating: 4.2, userRating: 3 },
      { id: 2, name: "Store 2", address: "Address 2", overallRating: 3.8, userRating: 4 },
    ]);
  }, []);

  // Handle rating change
  const handleRatingChange = (storeId, newRating) => {
    setStores((prevStores) =>
      prevStores.map((store) =>
        store.id === storeId ? { ...store, userRating: newRating } : store
      )
    );
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Store Listings</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Overall Ratings</th>
            <th>Your Rating</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.overallRating}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={store.userRating}
                  onChange={(e) => handleRatingChange(store.id, Number(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDashboard;
