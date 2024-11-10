import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    navigate('/')
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

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-12 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
            >
              {showPassword ? <BiShow className="text-lg" /> : <BiHide className="text-lg" />}
            </button>
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
