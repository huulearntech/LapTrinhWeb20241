import React, { useState } from "react";
import { SpecialRequest } from '../components'
import { useLocation } from "react-router-dom";

const OrderPayment = () => {

  const location = useLocation();
  const room = location.state?.room;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Vui lòng nhập giá trị lớn hơn hoặc tương đương 2 ký tự.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 5) {
      newErrors.phone =
        "Vui lòng nhập giá trị lớn hơn hoặc tương đương 5 ký tự.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  const [isForSomeoneElse, setIsForSomeoneElse] = useState(false);

  if (!room) {
    return <p>Không có thông tin phòng. Vui lòng chọn lại phòng!</p>;
  }

  const handleRadioChange = (e) => {
    setIsForSomeoneElse(e.target.value === "someoneElse");
  };

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

      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        <div className="flex item-center bg-white rounded-lg shadow-sm p-4 w-full h-full">
          {/* Image */}
          <div className="w-1/4 flex-shrink-0">
            <img
              src="https://via.placeholder.com/150"
              alt={room.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Room Information */}
          <div className="flex-1 flex flex-col justify-between px-4">
            <div>
              <h2 className="font-bold text-gray-800">{room.name}</h2>
              <p className="text-sm text-gray-600">{room.rate}</p>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Bữa sáng:</span> {room.breakfast}
              </p>
              <ul className="text-sm mt-2 text-gray-700 space-y-1">
                <li>✔ {room.cancellationPolicy}</li>
                <li>✔ {room.paymentOption}</li>
                <li>{room.description}</li>
                <li>✔ {room.bedType}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between w-1/4">
            {room.isPopular && (
            <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                Được nhiều người chọn!
            </div>
            )}
            <div className="text-right">
              <p className="text-gray-500 line-through text-sm mt-2">
                {room.originalPrice}
              </p>
              <p className="text-red-600 font-bold text-lg">{room.discountedPrice}</p>
              <p className="text-xs text-gray-500">Chưa bao gồm thuế và phí</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto bg-white p-6 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-6 bg-white shadow-sm rounded-sm"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Thông tin liên hệ (đối với E-voucher)
          </h2>
          <p className="text-gray-600 mb-4">
            Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác
            nhận đặt phòng (E-voucher) qua email của mình.
          </p>

          {/* Họ và Tên */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Số điện thoại */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Số điện thoại
            </label>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option value="+84">+84</option>
                {/* Thêm các tùy chọn khác nếu cần */}
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Radio Buttons */}
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="guestType"
                value="self"
                checked={!isForSomeoneElse}
                onChange={handleRadioChange}
                className="form-radio text-blue-500"
                defaultChecked
              />
              <span className="text-gray-700">Tôi là khách lưu trú</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="guestType"
                value="someoneElse"
                checked={isForSomeoneElse}
                onChange={handleRadioChange}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">Tôi đang đặt cho người khác</span>
            </label>
          </div>

          {isForSomeoneElse && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Tên đầy đủ của khách
              </label>
              <input
                type="text"
                placeholder="Nhập tên khách sẽ lưu trú"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
        </form>
      </div>
      <div className="max-w-[1100px] mx-auto bg-white p-2 rounded-lg">
        <SpecialRequest />
      </div>
      <div className="p-2 bg-white rounded-lg shadow-sm space-y-4 max-w-[1100px] mx-auto">
        {/* Header */}
        <h2 className="font-bold text-lg">Chi tiết giá</h2>
        <p className="text-sm text-gray-600 flex items-start">
          <span className="mr-2 text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn. Mọi
          thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện
          của Traveloka để được giải đáp.
        </p>

        {/* Giá chi tiết */}
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Giá phòng</span>
            <span className="text-gray-700">{ room.discountedPrice }</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            { room.name }
          </p>
          <div className="flex justify-between mt-4">
            <span className="text-gray-700">Thuế và phí</span>
            <span className="text-gray-700">0 VND</span>
          </div>
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span className="text-gray-800">Tổng giá</span>
            <span className="text-red-600">{ room.discountedPrice }</span>
          </div>
        </div>

        {/* Notification */}
        <div className="flex items-center space-x-2 text-blue-500 text-sm mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Bạn chưa bị trừ tiền!</span>
        </div>

        {/* Button */}
        <button className="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600">
          Tiếp tục thanh toán
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Bằng việc chấp nhận thanh toán, bạn đã đồng ý với{" "}
          <a href="#" className="text-blue-500 underline">
            Điều khoản & Điều kiện
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 underline">
            Chính sách quyền riêng tư
          </a>{" "}
          và{" "}
          <a href="#" className="text-blue-500 underline">
            Quy trình hoàn tiền
          </a>{" "}
          của Traveloka.
        </p>
      </div>
    </div>
  );
};

export default OrderPayment;
