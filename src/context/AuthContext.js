// AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // To store user info

//   const signIn = (userInfo) => {
//     setUser(userInfo);
//     setIsAuthenticated(true);
//   };

//   const signOut = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


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
    }
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
