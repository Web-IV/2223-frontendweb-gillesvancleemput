import axios from 'axios'; // 👈 1

const baseUrl = `http://localhost:9000/api/`;

export const getAllMenuItems = async () => {
  const data = await axios.get(`http://localhost:9000/api/menu`);
  return data.data;
};

