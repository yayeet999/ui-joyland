import React, { useState } from 'react';

const GlassAuthFormPreview = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="glass-container">
      <form className="glass-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>

      <style>
        {`
          .glass-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background: url('https://images.unsplash.com/photo-1682685797527-99189472b334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
          }

          .glass-form {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 2rem;
            width: 300px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: white;
          }

          .glass-form h2 {
            text-align: center;
            margin-bottom: 1rem;
            color: white;
          }

          .input-group {
            display: flex;
            flex-direction: column;
          }

          .input-group label {
            margin-bottom: 0.5rem;
          }

          .input-group input {
            padding: 0.75rem;
            border-radius: 0.25rem;
            border: none;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
          }

          .input-group input::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          .glass-form button {
            padding: 0.75rem;
            border-radius: 0.25rem;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .glass-form button:hover {
            background-color: #367C39;
          }
        `}
      </style>
    </div>
  );
};

export default GlassAuthFormPreview;
