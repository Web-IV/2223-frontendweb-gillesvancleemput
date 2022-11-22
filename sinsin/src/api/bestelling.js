import axios from 'axios'; // 👈 1

const baseUrl = `http://localhost:9000/api/`;

export const createBestelling = async (userId, list) => {
    const response = await axios.post(`${baseUrl}bestelling`, { userId, list });
    console.log("in api front end")
    console.log(userId);
    console.log(list);
    return response.data;
}
