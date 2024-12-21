import axios from "axios";

const addFavorite = async (roomId) => {
  try {
    const response = await axios.post(API_URL + "favorite", { roomId });
    return response.data;
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error.response?.data || error.message;
  }
}

const removeFavorite = async (roomId) => {
  try {
    const response = await axios.delete(API_URL + "favorite", { data: { roomId } });
    return response.data;
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error.response?.data || error.message;
  }
}

const addFeedback = async (userId, roomId, content) => {
  // do something
}

const getFavorites = async () => {
  try {
    const response = await axios.get(API_URL + "favorites");
    return response.data;
  } catch (error) {
    console.error("Error getting favorites:", error);
    throw error.response?.data || error.message;
  }
}

export default {
  addFavorite,
  removeFavorite,
  getFavorites
};