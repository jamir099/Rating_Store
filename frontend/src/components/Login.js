import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css'; // Make sure you have your CSS file

const API_URL = 'http://localhost:5000/api'; // Define API URL here

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${API_URL}/login`, { 
        email, 
        password 
      });
      
      if (response.status === 200) {
        // Handle successful login
        console.log("Login successful", response.data);
        
        // Assuming response contains a 'userRole', you can redirect based on the role
        const userRole = response.data.userRole;

        switch (userRole) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'storeOwner':
            navigate('/store-owner-dashboard');
            break;
          case 'normalUser':
            navigate('/user-dashboard');
            break;
          default:
            navigate('/login'); // Or handle unexpected roles
            break;
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(`Login failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
         <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Owner">Owner</option>
        </select>

          <button type="submit">Login</button>
        </form>
        <button onClick={() => navigate('/signup')} className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
