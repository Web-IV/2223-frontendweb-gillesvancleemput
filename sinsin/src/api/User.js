import axios from 'axios'; // 👈 1

import { useCallback } from 'react';

const baseUrl = `http://localhost:9000/api/`;

const useUser= () => {

const getUserById = useCallback( async (Id) => {
    const response = await axios.get(`${baseUrl}user/${Id}`);
    return response.data;
}, []);

return {
    getUserById
};
}

export default useUser;