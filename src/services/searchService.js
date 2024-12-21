import axios from "axios";

const API_URL = "http://localhost:5000/api/search/";

export const getAccommodationsByQuery = async (query) => {
  try {
    const response = await axios.get(API_URL + query);
    return response.data;
  } catch (error) {
    console.error("Error searching:", error);
    throw error.response?.data || error.message;
  }
}

export const getAccommodationsByMapBounds = async (mapBounds) => {
  try {
    const response = await axios.get(API_URL + mapBounds);
    return response.data;
  } catch (error) {
    console.error("Error searching:", error);
    throw error.response?.data || error.message;
  }
}

export const getLocationsContaining = async (query, amount=5) => {
  // try {
  //   const response = await axios.get(API_URL + query);
  //   return response.data;
  // } catch (error) {
  //   console.error("Error searching:", error);
  //   throw error.response?.data || error.message;
  // }
  if (!query) {
    console.log('No query');
    return fake_locations.slice(0, amount);
  }
  return fake_locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase())).slice(0, amount);
}

const fake_locations = [
  {
    id: 1,
    name: "Hà Nội",
    count: 123
  },
  {
    id: 2,
    name: "Hồ Chí Minh",
    count: 123
  },
  {
    id: 3,
    name: "Đà Nẵng",
    count: 123
  },
  {
    id: 4,
    name: "Hải Phòng",
    count: 123
  },
  {
    id: 5,
    name: "Cần Thơ",
    count: 123
  },
  {
    id: 6,
    name: "Vũng Tàu",
    count: 123
  },
  {
    id: 7,
    name: "Quảng Ninh",
    count: 123
  },
  {
    id: 8,
    name: "Nha Trang",
    count: 123
  },
  {
    id: 9,
    name: "Đà Lạt",
    count: 123
  },
  {
    id: 10,
    name: "Phú Quốc",
    count: 123
  }
];
