import axios from "axios";

const API_URL = "http://localhost:5000/api/room/";

export const getHotelData = async () => {
  // Dữ liệu giả định
  const fakeData = {
    rooms: [
      {
        name: "Phòng Deluxe",
        type: "Deluxe",
        price: "$100",
        location: "Hanoi",
        service: "Free Wi-Fi",
        comment: "Rất tốt",
        facilities: [
            { name: "Hồ bơi", image: "https://via.placeholder.com/150" },
            { name: "Khu vui chơi", image: "https://via.placeholder.com/150" }
        ],
        images: [
          "https://via.placeholder.com/600x400?text=Deluxe+Image+1",
          "https://via.placeholder.com/600x400?text=Deluxe+Image+2",
        ],
        feedback: [
            {guestName: "An", guestComment: "Rất hài lòng", guestImage: "https://via.placeholder.com/150"},
            {guestName: "Bình", guestComment: "Vô cùng hài lòng", guestImage: "https://via.placeholder.com/150"},
            {guestName: "Chiến", guestComment: "Rất thoải mái", guestImage: "https://via.placeholder.com/150"},
        ],
      },
      {
        name: "Phòng Standard",
        type: "Standard",
        price: "$70",
        location: "HCMC",
        service: "Free Parking",
        comment: "Tuyệt vời",
        facilities: [{ name: "Gym", image: "https://via.placeholder.com/150" }],
        images: [
          "https://via.placeholder.com/600x400?text=Standard+Image+1",
          "https://via.placeholder.com/600x400?text=Standard+Image+2",
        ],
        feedback: [
            {guestName: "A", guestComment: "Rất hài lòng", guestImage: "https://via.placeholder.com/150"},
            {guestName: "B", guestComment: "Vô cùng hài lòng", guestImage: "https://via.placeholder.com/150"},
            {guestName: "C", guestComment: "Rất thoải mái", guestImage: "https://via.placeholder.com/150"},
        ],
      },
    ],
  };

  try {
    const response = await axios.get(API_URL); // Thay bằng URL API của bạn
    const roomsWithImages = response.data.rooms.map((room) => ({
      ...room,
      images: room.images || [], // Giả sử API trả về `images` trong từng room
    }));

    return {
      rooms: roomsWithImages,
    };
  } catch (error) {
    console.error("Lỗi khi gọi API, sử dụng dữ liệu giả:", error);

    // Trả về dữ liệu giả nếu lỗi xảy ra
    return {
      rooms: fakeData.rooms,
    };
  }
};
