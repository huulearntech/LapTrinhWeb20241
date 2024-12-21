import axiosInstance from './axios_instance';

const register = async (registrationRequest) => {
  return await axiosInstance.post('/auth/register', registrationRequest);
};

const authenticateUser = async (authenticationRequest) => {
  return await axiosInstance.post('/auth/authenticate', authenticationRequest);
};

const activateAccount = async (token) => {
  return await axiosInstance.get('/auth/activate-account', {
    params: { token }
  });
};

const changePassword = async (oldPassword, newPassword) => {
  return await axiosInstance.post('/auth/change-password', {
    oldPassword,
    newPassword
  });
};

const resetPassword = async (email) => {
  return await axiosInstance.post('/auth/reset-password', {
    email
  });
};

export default {
  register,
  authenticateUser,
  activateAccount,
  changePassword,
  resetPassword
};