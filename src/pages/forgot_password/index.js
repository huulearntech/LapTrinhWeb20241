import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import paths from '../../router/paths';


const SetNewPassword = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSubmit(values.newPassword, values.confirmPassword);
  };

  return (
    <Form form={form} onFinish={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Reset your password</h2>
      <Form.Item
        name="newPassword"
        rules={[{ required: true, message: 'Please input your new password!' }]}
      >
        <Input.Password
          placeholder="New Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={['newPassword']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="w-full">
        Reset Password
      </Button>
    </Form>
  );
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleEmailSubmit = async (values) => {
    try {
      // await axios.post('/api/send-otp', { email: values.email });
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
      notification.error({
        message: 'Passwords do not match',
        description: 'Please make sure the passwords match',
        showProgress: true,
        pauseOnHover: false,
        duration: 3,
      });
      return;
    }

    try {
      // await axios.post('/api/reset-password', { email, newPassword });
      notification.success({
        message: 'Password reset successfully',
        description: 'You can now login with your new password',
        showProgress: true,
        pauseOnHover: false,
        duration: 3,
      });
      navigate(paths.home);
    } catch (error) {
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto my-20 bg-white rounded-lg p-6 shadow-lg">
        {step === 1 && (
          <Form onFinish={handleEmailSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Find your email</h2>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send OTP
            </Button>
          </Form>
        )}
        {step === 2 && (
          <Form onFinish={handleOtpSubmit} className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold text-center">Enter OTP</h2>
            <Form.Item
              name="otp"
              rules={[{ required: true, message: 'Please input the OTP!' }]}
            >
              <Input.OTP
                maxLength={6}
                formatter={(value) => value.replace(/\D/g, '')}
                autoFocus
                className="w-full p-3 border border-gray-300 rounded"
                inputMode='numeric'
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Verify OTP
            </Button>
          </Form>
        )}
        {step === 3 && <SetNewPassword onSubmit={handlePasswordReset} />}
      </div>
    </div>
  );
};

export default ForgotPassword;
