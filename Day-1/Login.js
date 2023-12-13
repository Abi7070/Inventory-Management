import React, { useState } from 'react';
import './App.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault(); // Prevents the default form submission behavior
  
      // Basic form validation
      if (!email.trim() || !password.trim()) {
        setError('Please enter both email and password.');
        return;
      }
  
      // Add your login logic here
      console.log('Login Email:', email);
      console.log('Login Password:', password);
      // You can add authentication logic here
  
      // Reset form and error state
      setEmail('');
      setPassword('');
      setError('');
    };
  
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  export default Login;