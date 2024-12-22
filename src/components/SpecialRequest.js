import React, { useState } from "react";

const SpecialRequest = () => {
  const [formData, setFormData] = useState({
    noSmoking: false,
    connectingRoom: false,
    highFloor: false,
    bedType: "single",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    otherRequest: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "otherRequest" && value.trim() === "") {
      setError("Mục bắt buộc.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.otherRequest.trim()) {
      setError("Mục bắt buộc.");
    } else {
      alert("Yêu cầu của bạn đã được gửi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-white rounded-lg shadow-sm space-y-1">
      <h2 className="font-bold text-lg">Bạn yêu cầu nào không?</h2>
      <p className="text-sm text-gray-500">
        Khi nhận phòng, khách sạn sẽ thông báo liệu yêu cầu này có được đáp ứng
        hay không. Một số yêu cầu cần trả thêm phí để sử dụng nhưng bạn hoàn
        toàn có thể hủy yêu cầu sau đó.
      </p>

      {/* Checkbox Options */}
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="noSmoking"
            checked={formData.noSmoking}
            onChange={handleChange}
            className="form-checkbox text-blue-600"
          />
          <span>Phòng không hút thuốc</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="connectingRoom"
            checked={formData.connectingRoom}
            onChange={handleChange}
            className="form-checkbox text-blue-600"
          />
          <span>Phòng liên thông</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="highFloor"
            checked={formData.highFloor}
            onChange={handleChange}
            className="form-checkbox text-blue-600"
          />
          <span>Tầng lầu</span>
        </label>
      </div>

      {/* Radio Buttons for Bed Type */}
      <div className="space-y-2">
        <span className="font-medium">Loại giường</span>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bedType"
              value="single"
              checked={formData.bedType === "single"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Giường đơn</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="bedType"
              value="double"
              checked={formData.bedType === "double"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Giường lớn</span>
          </label>
        </div>
      </div>

      {/* Time Input */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Giờ nhận phòng</span>
            <input
              type="time"
              name="checkInTime"
              value={formData.checkInTime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Giờ trả phòng</span>
            <input
              type="time"
              name="checkOutTime"
              value={formData.checkOutTime}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1"
            />
          </label>
        </div>
      </div>

      {/* Other Request */}
      <div>
        <label className="block text-sm text-gray-700">Khác</label>
        <textarea
          name="otherRequest"
          value={formData.otherRequest}
          onChange={handleChange}
          className={`w-full mt-1 px-4 py-2 border rounded-md ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    </form>
  );
};

export default SpecialRequest;
