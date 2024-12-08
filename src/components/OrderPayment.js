import React, { useState } from "react";

const OrderPayment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const [total] = useState(1200000); // Tổng tiền mặc định

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thông tin thanh toán:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tên */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên khách hàng</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Nhập tên của bạn"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Nhập email của bạn"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Địa chỉ */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Nhập địa chỉ của bạn"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Phương thức thanh toán */}
      <div>
        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Phương thức thanh toán</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="credit-card">Thẻ tín dụng</option>
          <option value="bank-transfer">Chuyển khoản ngân hàng</option>
          <option value="cash-on-delivery">Thanh toán khi nhận hàng</option>
        </select>
      </div>

      {/* Tổng tiền */}
      <div className="text-right text-lg font-semibold">
        Tổng tiền: <span className="text-blue-600">{total.toLocaleString()} VND</span>
      </div>

      {/* Nút gửi */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition duration-200"
      >
        Xác nhận thanh toán
      </button>
    </form>
  );
};

export default OrderPayment;
