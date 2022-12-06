import axios from 'axios'; // 👈 1
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const baseUrl = `http://localhost:9000/api/`;

const useBestelling= () => {

    const { getAccessTokenSilently } = useAuth0();

const createBestelling = useCallback( async (userId, list) => {
    const token = await getAccessTokenSilently();
    await axios.post(`${baseUrl}bestelling`, { userId, list}, {headers: {Authorization: `Bearer ${token}`}});
    console.log("in api front end")
    console.log(userId);
    console.log(list);

}, [getAccessTokenSilently]);
return {
    createBestelling
};
}

export default useBestelling;

