import axios from 'axios'; // 👈 1

const baseUrl = `http://localhost:9000/api/`;

export const getAllMenuItems = async () => {
  const data = await axios.get(`${baseUrl}menu`);
  return data.data.items;
};
export const deleteByIdMenu = async (id) => {
  const data = await axios.delete(`${baseUrl}menu/${id}`);
  return data.data;
}
export const createMenuItem = async (item) => {
  const {id, ...data} = item;
  await axios({
    method: id ? 'Put' : 'Post',
    url: `${baseUrl}menu/${id ?? ''}`,
    data: data
  })
}
export const getByIdMenu = async (id) => {
  const data = await axios.get(`${baseUrl}menu/${id}`);
  return data.data;
}

