import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import StoreOwnerDashboard from './components/StoreOwnerDashboard';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* The root route renders the Login component */}
        <Route path="/" element={<Login />} />
        {/* Other routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/store-owner-dashboard" element={<StoreOwnerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
