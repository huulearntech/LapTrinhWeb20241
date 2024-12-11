import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './containers/Public';
import { path } from './ultils/constant';
import { ProductList } from './containers/Public';
import { OrderPayment } from "./components"
import { RoomInfo } from "./pages";

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
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOTEL} element={<RoomInfo />} />
          <Route path={path.PAYMENT} element={<OrderPayment />} />
          <Route path={path.PRODUCTLIST} element={<ProductList products={products} />} />
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
