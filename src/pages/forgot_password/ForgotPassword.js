import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import paths from '../../router/paths';


import { BiHide as HidePasswordIcon, BiShow as ShowPasswordIcon } from "react-icons/bi";
import InputField from '../../components/FormInputField';

const OtpInputForm = ({ onSubmit }) => {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    setOtp(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('OTP entered: ' + otp);
    onSubmit(otp);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Enter OTP</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          maxLength="6"
          className="w-32 text-center text-xl font-bold border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          inputMode="numeric"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit OTP
        </button>
      </form>
    </div>
  );
};

const SetNewPassword = ({ onSubmit }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newPassword, confirmPassword);
  }

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Reset your password</h2>
      <div className="relative">
        <InputField
          label="New Password"
          name="newPassword"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center p-1 text-gray-500 hover:text-gray-600 rounded-full hover:bg-gray-200">
          {showPassword ? <ShowPasswordIcon className="w-6 h-6" /> : <HidePasswordIcon className="w-6 h-6" />}
        </button>
      </div>
      <div className="relative">
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPassword && (
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center p-1 rounded-full">
            {newPassword === confirmPassword ? (
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </span>
        )}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded disabled:bg-gray-200 disabled:text-gray-500" disabled={newPassword !== confirmPassword}>
        Reset Password
      </button>
    </form>
  );

};


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post('/api/send-otp', { email });
      setStep(2);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOtpSubmit = async (otp) => {
    try {
      // await axios.post('/api/verify-otp', { email, otp });
      setStep(3);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handlePasswordReset = async (newPassword, confirmPassword) => {

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      // await axios.post('/api/reset-password', { email, newPassword });
      toast.success('Password reset successfully');
      navigate(paths.home);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto my-20 bg-white rounded-lg p-6 shadow-lg">
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Find your email</h2>
            <InputField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
              Send OTP
            </button>
          </form>
        )}
        {step === 2 && <OtpInputForm onSubmit={handleOtpSubmit} />}
        {step === 3 && (
          <SetNewPassword onSubmit={handlePasswordReset} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;