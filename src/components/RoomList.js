import React from "react";

const RoomList = () => {
  const rooms = [
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
    },
    {
      name: "Executive Suite",
      rate: "Flexible Rate",
      breakfast: "Gồm bữa sáng",
      cancellationPolicy: "Hủy miễn phí",
      paymentOption: "Thanh Toán Trước",
      description: "Hoàn tiền nhanh khi bạn hủy",
      bedType: "2 giường đôi",
      originalPrice: "1.200.000 VND",
      discountedPrice: "900.000 VND",
      isPopular: false,
    },
    {
      name: "Family Room",
      rate: "Best Value",
      breakfast: "Không gồm bữa sáng",
      cancellationPolicy: "Không hoàn tiền",
      paymentOption: "Thanh Toán Tại Khách Sạn",
      description: "Dành riêng cho gia đình",
      bedType: "3 giường cỡ queen",
      originalPrice: "2.000.000 VND",
      discountedPrice: "1.800.000 VND",
      isPopular: true,
    },
  ];

  return (
    <div className="bg-gray-50 p-2">
      <h1 className="text-2xl font-bold mb-2">Danh sách phòng</h1>
      <div className="flex flex-col space-y-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start bg-white rounded-lg shadow-md p-4"
          >
            <div className="flex flex-row items-stretch bg-white rounded-lg shadow-md p-4 w-full h-full">
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
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    Đặt phòng
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
