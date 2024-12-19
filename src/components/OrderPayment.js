import React from "react";

const OrderPayment = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <header className="max-w-[1100px] mx-auto flex items-center justify-between px-1 py-1 bg-white">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-xl">traveloka</span>
          <img
            src="https://via.placeholder.com/20x20"
            alt="logo"
            className="w-6 h-6 object-contain"
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
              1
            </div>
            <span className="text-blue-500 font-medium text-xs">Đặt</span>
          </div>
          <div className="text-gray-400">—</div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full text-xs">
              2
            </div>
            <span className="text-gray-600 font-medium text-xs">Thanh toán</span>
          </div>
          <div className="text-gray-400">—</div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full text-xs">
              3
            </div>
            <span className="text-gray-600 font-medium text-xs">Gửi phiếu xác nhận</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default OrderPayment;
