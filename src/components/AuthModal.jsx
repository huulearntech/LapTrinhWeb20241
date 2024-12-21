import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useAuth } from "../context/AuthContext";
import paths from "../router/paths";

import authServices from '../services/authServices';

const AuthModal = ({ isOpen, closeModal, mode }) => {
  const { signIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(mode === 'signUp');
  const [form] = Form.useForm();

  useEffect(() => {
    setIsSignUp(mode === 'signUp');
  }, [mode]);

  const handleSubmit = async (values) => {
    if (isSignUp) {
      try {
        // Loai bo confirmPassword ra khoi object registrationRequest
        const { confirmPassword, ...registrationRequest } = values;
        await authServices.register(registrationRequest);
        closeModal();
      } catch (error) {
        console.error('Đăng ký thất bại', error);
      }
    } else {
      try {
        const response = await signIn(values);
        // Do something with the response
        console.log('Đăng nhập thành công', response);
        
        closeModal();
      } catch (error) {
        console.error('Đăng nhập thất bại', error);
      }
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      className="rounded-lg p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{isSignUp ? "Đăng ký" : "Đăng nhập"}</h2>
      </div>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {isSignUp && (
          <Form.Item
            label="Họ tên"
            name="fullName"
            rules={[{ required: true, message: 'Vui lòng nhập họ tên của bạn!' }]}
            style={{ marginBottom: '12px' }}
          >
            <Input size='large' />
          </Form.Item>
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
          style={{ marginBottom: '12px' }}
        >
          <Input size='large' />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
          { min: 8, message: 'Mật khẩu phải chứa ít nhất 8 ký tự!' },
          ]}
          style={{ marginBottom: '12px' }}
        >
          <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            size='large'
          />
        </Form.Item>
        {isSignUp && (
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu của bạn!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                },
              }),
            ]}
            style={{ marginBottom: '12px' }}
          >
            <Input.Password
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              size='large'
            />
          </Form.Item>
        )

        }
        <Form.Item style={{ marginBottom: '12px' }}>
          <Button type="primary" htmlType="submit" className="w-full" size='large'>
            {isSignUp ? "Đăng ký" : "Đăng nhập"}
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center">
        <button
          className='hover:underline text-blue-500'
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Bạn đã có tài khoản? Đăng nhập ở đây" : "Bạn chưa có tài khoản? Đăng ký ở đây"}
        </button>
      </div>
      {!isSignUp && (
        <div className="text-center mt-1">
          <a href={paths.forgotPassword} className="text-blue-500 hover:underline">
            Bạn quên mật khẩu?
          </a>
        </div>
      )}
    </Modal>
  );
};

export default AuthModal;