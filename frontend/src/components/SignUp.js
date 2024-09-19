import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';

const API_URL = 'http://localhost:5000/api'; // API URL for the backend

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // State for the role dropdown
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state for loading
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true during form submission

    try {
      // Call the backend API to register the user
      const response = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        role, // Include role in the registration data
        password
      });

      if (response.status === 201) { // Assuming 201 status for successful registration
        // Show pop-up message for successful registration
        alert('Registration successful!');
        setIsSubmitting(false); // Set back to false after submission

        // Clear form after successful submission
        setName('');
        setEmail('');
        setRole('');
        setPassword('');

        // Redirect to the login page
        navigate('/');
      }
    } catch (error) {
      setIsSubmitting(false); // Set back to false after submission
      console.error('Error during registration:', error);
      alert(`Registration failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <button onClick={() => navigate('/')} className="home-button">Home</button>
      </div>
    </div>
  );
}

export default SignUp;
