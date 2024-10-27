import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center text-xl font-bold mb-5">Logo</div>
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-xl font-semibold text-gray-800 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="m-1"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="cursor-pointer">Show password</label>
          </div>
          <button
            className="w-full p-3 mb-4 text-white font-bold bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="space-x-4 text-center">
          <Link to="/forgot" className="text-blue-500 hover:underline">Forgot account?</Link>
          <Link to="/signup" className="text-blue-500 hover:underline">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

