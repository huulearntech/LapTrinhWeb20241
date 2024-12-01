// src/components/AuthModal.js
import React, { useState, useEffect } from 'react';
import { BiHide as HidePasswordIcon, BiShow as ShowPasswordIcon } from "react-icons/bi";
import { RxCross2 as CloseModalIcon } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";
import paths from "../router/paths";
import InputField from './FormInputField';

const AuthModal = ({ isOpen, closeModal, mode }) => {
  const { signIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(mode === 'signUp');
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsSignUp(mode === 'signUp');
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className={`fixed z-50 flex items-center justify-center inset-0 bg-gray-500 bg-opacity-50 transition-all ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={closeModal}
    >
      <div
        className={`transition-transform transform w-full max-w-md mx-auto my-20 bg-white rounded-lg p-6 shadow-lg ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex p-2 justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <button onClick={closeModal} className="flex rounded-full p-1 items-center justify-center text-gray-600 hover:bg-gray-200">
            <CloseModalIcon className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isSignUp && (
            <>
              <InputField label="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleChange} />
              <InputField label="Phone number" name="phone" type="text" value={formData.phone} onChange={handleChange} />
            </>
          )}
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <div className="relative">
            <InputField label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} />
            <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center p-1 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-200">
              {showPassword ? <ShowPasswordIcon className="w-6 h-6" /> : <HidePasswordIcon className="w-6 h-6" />}
            </button>
          </div>
          <button type="submit" className="w-full p-3 text-white font-bold text-lg bg-blue-500 rounded hover:bg-blue-600">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 hover:underline">
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
        {!isSignUp && (
          <div className="mt-4 text-center">
            <a href={paths.forgotPassword} className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;