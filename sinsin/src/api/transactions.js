import axios from 'axios'; // 👈 1

const baseUrl = `http://localhost:9000/api/`;

export const getAllMenuItems = async () => {
  const data = await axios.get(`${baseUrl}menu`); // 👈 2
  return data.data.items;
};
export const deleteByIdMenu = async (id) => {
  const data = await axios.delete(`${baseUrl}menu/${id}`);
  return data.data;
}

