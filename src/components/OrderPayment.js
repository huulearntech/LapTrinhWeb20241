import React, { useState } from "react";

const OrderPayment = () => {
  const room = [
    {
      name: "Deluxe Double View Room",
      rate: "Best Available Rate",
      breakfast: "Không gồm bữa sáng",
      cancellationPolicy: "Không hoàn tiền",
      paymentOption: "Thanh Toán Tại Khách Sạn",
      description: "Thanh toán khi bạn nhận phòng tại nơi ở",
      bedType: "1 giường cỡ king",
      originalPrice: "716.490 VND",
      discountedPrice: "650.000 VND",
      isPopular: true,
    }
  ];

  const [isGuest, setIsGuest] = useState(true);

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
              alt={room[0].name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Room Information */}
          <div className="flex-1 flex flex-col justify-between px-4">
            <div>
              <h2 className="font-bold text-gray-800">{room[0].name}</h2>
              <p className="text-sm text-gray-600">{room[0].rate}</p>
              <p className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Bữa sáng:</span> {room[0].breakfast}
              </p>
              <ul className="text-sm mt-2 text-gray-700 space-y-1">
                <li>✔ {room[0].cancellationPolicy}</li>
                <li>✔ {room[0].paymentOption}</li>
                <li>{room[0].description}</li>
                <li>✔ {room[0].bedType}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between w-1/4">
            {room[0].isPopular && (
            <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                Được nhiều người chọn!
            </div>
            )}
            <div className="text-right">
              <p className="text-gray-500 line-through text-sm mt-2">
                {room[0].originalPrice}
              </p>
              <p className="text-red-600 font-bold text-lg">{room[0].discountedPrice}</p>
              <p className="text-xs text-gray-500">Chưa bao gồm thuế và phí</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto bg-white shadow-md p-6 rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">
          Thông tin liên hệ (đối với E-voucher)
        </h2>
        <p className="text-gray-600 mt-2">
          Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận đặt phòng (E-voucher) qua email của mình.
        </p>

        {/* Form */}
        <div className="mt-6">
          {/* Họ và tên */}
          <label className="block text-sm font-medium text-gray-700 mb-2 ">
            Họ và tên
          </label>
          <input
            type="text"
            placeholder="Nhập họ và tên"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Email và Số điện thoại */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-2">
                Chúng tôi sẽ gửi e-voucher tới email này.
              </p>
            </div>

            {/* Số điện thoại */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại
              </label>
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="+84">+84</option>
                  <option value="+1">+1</option>
                  <option value="+62">+62</option>
                </select>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bạn là:
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="guestType"
                value="self"
                checked={isGuest}
                onChange={() => setIsGuest(true)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Tôi là khách lưu trú</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="guestType"
                value="others"
                checked={!isGuest}
                onChange={() => setIsGuest(false)}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">
                Tôi đang đặt cho người khác
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
