import React, { useState } from "react";
import { SlideShow, RoomList } from "../components";


const RoomInfo = () => {
    const images = [
        "https://via.placeholder.com/600x400?text=Slide+1",
        "https://via.placeholder.com/600x400?text=Slide+2",
        "https://via.placeholder.com/600x400?text=Slide+3",
    ];

    const [room] = useState([
        {
            id: 1, 
            name: "Davue Hotel Da Nang", 
            type: "Khách sạn",
            comment: "Rất rộng rãi và thích hợp cho 2 người", 
            location: "57-59 Đỗ Bí, Mỹ An, Ngũ Hành Sơn, Đà Nẵng, Việt Nam",
            service: "Điều hòa, thang máy, nhà hàng, lễ tân 24h, ...",
            price: "800.000 VND",
            facilities: [
                { name: "Khu vực công cộng", image: "https://via.placeholder.com/200" },
                { name: "Sảnh chờ", image: "https://via.placeholder.com/200" },
                { name: "Phòng ngủ", image: "https://via.placeholder.com/200" },
                { name: "Phòng tắm bên trong", image: "https://via.placeholder.com/200" },
                { name: "Nhà hàng", image: "https://via.placeholder.com/200" },
            ]
        },
        {
            id: 2, 
            name: "Luxury Hotel Saigon", 
            type: "Homestay",
            comment: "Phong cách hiện đại và tiện nghi cao cấp", 
            location: "22 Lê Lợi, Quận 1, Hồ Chí Minh, Việt Nam",
            service: "Hồ bơi, nhà hàng, phòng tập gym, spa, ...",
            price: "1.200.000 VND",
            facilities: [
                { name: "Khu vực công cộng", image: "https://via.placeholder.com/200" },
                { name: "Sảnh chờ", image: "https://via.placeholder.com/200" },
                { name: "Phòng ngủ", image: "https://via.placeholder.com/200" },
                { name: "Phòng tắm bên trong", image: "https://via.placeholder.com/200" },
                { name: "Nhà hàng", image: "https://via.placeholder.com/200" },
            ]
        }
    ]);

    const [currIndex, setCurrIndex] = useState(0); // Chỉ số phần tử hiện tại
    const handleNext = () => {
        setCurrIndex((prevIndex) => (prevIndex + 1) % room.length); // Chuyển sang phần tử tiếp theo
    };
    const handlePrevious = () => {
        setCurrIndex((prevIndex) => (prevIndex - 1 + room.length) % room.length); // Chuyển về phần tử trước đó
    };
    
    const [selectedImage, setSelectedImage] = useState(null);
    const closeModal = () => setSelectedImage(null);

    return (
        <div>
            <SlideShow images={images} />
            <div className="bg-blue-300 w-[1100px] rounded-md shadow-sm">
                <div className="flex justify-between items-center bg-white rounded-md shadow-md p-2 w-full max-w-[1100px]">
                    <div className="flex items-center gap-4">
                        <div>
                            <h3 className="text-3xl font-sans text-gray-800"><b>{ room[currIndex].name }</b></h3>
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-500 px-2 py-1 text-sm rounded">{ room[currIndex].type }</span>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="text-yellow-500 text-sm">&#9733;</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-gray-500">Giá/phòng/đêm từ</p>
                        <p className="text-lg font-bold text-red-500">{ room[currIndex].price }</p>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                            <b>Chọn phòng</b>
                        </button>
                    </div>  
                </div>
                <div className="flex items-center bg-blue-100 p-2 shadow-md w-full max-w-[1100px]">
                    <p className="ml-4 text-blue-900 text-sm">
                        Dừng khoảng chừng là 2 giây! Chỉ còn <span className="font-bold text-blue-700">một số</span> có giá thấp nhất này!
                    </p>
                </div>    
            
                <div className="flex flex-wrap justify-between bg-white shadow-lg p-2 rounded-lg ">
                    {/* Cột 1 */}
                    <div className="w-full bg-blue-50 rounded-md md:w-[33%] p-2">
                        <h2 className="text-gray-800 font-bold text-lg">Ấn tượng</h2>
                        <p className="text-xs text-gray-800">Từ đánh giá của khách đã ở</p>
                        <p className="mt-2 font-medium text-gray-700">
                            Khách nói gì về kỳ nghỉ của họ
                        </p>
                    </div>
                    {/* Cột 2 */}
                    <div className="w-full bg-blue-50 rounded-md md:w-[33%] p-2">
                        <h3 className="font-bold text-gray-800">Trong khu vực</h3>
                        <p className="text-sm text-gray-600">
                            { room[currIndex].location }
                        </p>
                    </div>
                    {/* Cột 3 */}
                    <div className="w-full bg-blue-50 rounded-md md:w-[33%] p-2">
                        <h3 className="font-bold text-gray-800"><b>Tiện ích chính</b></h3>
                        <div className="flex items-center mt-2">
                            <p className="ml-2 text-gray-700 text-sm">{ room[currIndex].service }</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-md p-3">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Những phòng còn trống tại { room[currIndex].name }
                    </h2>
                    
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex flex-wrap gap-4">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">Miễn phí hủy phòng</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">Thanh Toán Tại Khách Sạn</span>
                                <div className="relative group">
                                    <span className="text-blue-500 cursor-pointer">?</span>
                                    <div className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-48 bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg">
                                        Cho chuyến đi thêm linh hoạt: KHÔNG CẦN THANH TOÁN NGAY khi đặt phòng! Bạn có thể đặt ngay phòng có giá tốt nhất hôm nay và thanh toán sau bằng tiền mặt hoặc thẻ khi nhận phòng.
                                    </div>
                                </div>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">Giường lớn</span>
                                <div className="relative group">
                                    <span className="text-blue-500 cursor-pointer">?</span>
                                    <div className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-48 bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg">
                                        Giường lớn có thể bao gồm giường đôi/queen/king. Phù hợp cho 2 người lớn.
                                    </div>
                                </div>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">Miễn phí bữa sáng</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">Bể bơi, khu vui chơi</span>
                            </label>
                        </div>

                        <div className="flex items-center">
                        <span className="text-gray-700 mr-2">Hiển thị giá:</span>
                        <select className="border rounded-md p-2 text-blue-600">
                            <option>Mỗi phòng mỗi đêm (chưa bao gồm thuế)</option>
                        </select>
                        </div>
                    </div>
                </div>

                <RoomList />

                <div className="bg-gray-50">
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Reception"
                            className="w-full h-64 object-cover"
                        />
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Room"
                            className="w-full h-64 object-cover"
                        />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-4">
                            <h1 className="text-white text-lg md:text-2xl font-bold ml-4">
                                Khám phá thêm về {room[currIndex].name}
                            </h1>
                        </div>
                    </div>
                    <div className="p-6">
                        <h2 className="text-sm font-bold text-gray-800 mb-4">
                            Mô tả về khách sạn {room[currIndex].name}
                        </h2>
                        <p className="text-gray-700 text-xs leading-relaxed">
                            { room[currIndex].comment }
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Tất cả những tiện ích tại {room[currIndex].name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {room[currIndex].facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg"
                            onClick={() => setSelectedImage(facility.image)}
                        >
                            <img
                            src={facility.image}
                            alt={facility.name}
                            className="w-full h-32 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 text-white text-sm font-semibold p-1 text-center">
                            {facility.name}
                            </div>
                        </div>
                        ))}
                    </div>
                    {/* đóng mở modal */}
                    {selectedImage && (
                        <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                        >
                            <div
                                className="bg-white rounded-lg overflow-hidden shadow-lg relative transform scale-120 transition-transform duration-300 ease-in-out"
                                onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng modal khi click vào modal
                            >
                                <button
                                    className="absolute top-2 right-2 text-gray-800 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                                    onClick={closeModal}
                                >
                                    &times;
                                </button>
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="w-full h-auto max-w-screen-md"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex space-x-4 mt-4">
                <button onClick={handlePrevious} className="btn">Previous</button>
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    )
}

export default RoomInfo