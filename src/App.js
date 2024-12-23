import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './containers/Public';
import { path } from './ultils/constant';
import { ProductList } from './containers/Public';
import { OrderPayment, HotelInfo, Feedback } from "./pages"
import { products } from "./services/productData";
import { room, images } from "./services/hotelData"

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route  path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.HOTEL} element={<HotelInfo room={room} images={images}/>} />
          <Route path={path.PRODUCTLIST} element={<ProductList products={products} />} />
        </Route>
        <Route path={path.PAYMENT} element={<OrderPayment />} />
        <Route path={path.FEEDBACK} element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
