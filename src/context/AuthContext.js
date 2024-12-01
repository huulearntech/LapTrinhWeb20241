import React, { createContext, useState, useEffect, useContext } from 'react';

// Tạo context để quản lý trạng thái đăng nhập
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Kiểm tra xem có token trong localStorage không
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser); // Nếu có thì đăng nhập tự động
    };
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Lưu thông tin người dùng vào localStorage
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user'); // Xóa thông tin khi người dùng đăng xuất
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuthContext = (Component) => (props) => {
  const authContext = useAuth();
  return <Component {...props} authContext={authContext} />;
};

export const AuthRequired = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <div>Bạn cần đăng nhập để truy cập trang này</div>;
}

export const withAuthRequired = (Component) => (props) => {
  const { user } = useAuth();
  if (!user) {
    return <div>Bạn cần đăng nhập để truy cập trang này</div>;
  }
  return <Component {...props} />;
};