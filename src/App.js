import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './containers/Public';
import { path } from './ultils/constant';
import { ProductList } from './containers/Public';


function App() {

  const [products] = useState([
    { id: 1, name: "Sản phẩm A", price: 150000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sản phẩm B", price: 250000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Sản phẩm C", price: 350000, image: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route  path={path.HOME} element={<Home />}>
          <Route  path={path.LOGIN} element={<Login />} />
          
        </Route>
        
      </Routes>
      <div className="bg-gray-100 min-h-screen p-5">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">Danh Sách Sản Phẩm</h1>
        <ProductList products={products} />
    </div>
    </div>
  );
}

export default App;
