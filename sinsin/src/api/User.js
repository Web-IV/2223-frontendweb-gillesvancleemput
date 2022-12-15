import axios from "axios"; // 👈 1

import { useCallback } from "react";

const baseUrl = `${process.env.REACT_APP_BASEURL}`;

const useUser = () => {
  const getUserById = useCallback(async (Id) => {
    const response = await axios.get(`${baseUrl}user/${Id}`);
    return response.data;
  }, []);

  const getByAuth0Id = useCallback(async (auth0id) => {
    const { data } = await axios.get(`${baseUrl}user/${auth0id}`);
    return { data };
  }, []);
  const create = useCallback(async () => {
    const response = await axios.post(`${baseUrl}user/`);
    return response.data;
  }, []);
  const checkForUser = useCallback(async (auth0id) => {
    const response = await axios.get(`${baseUrl}user/check/${auth0id}`);
    return response.data;
  }, []);
  const updateUser = useCallback(
    async (email, straat, huisnummer, postcode, gemeente) => {
      const response = await axios.put(`${baseUrl}user/${email}`, {
        straat,
        huisnummer,
        postcode,
        gemeente,
      });
      return response.data;
    },
    []
  );

  return {
    getUserById,
    create,
    getByAuth0Id,
    checkForUser,
    updateUser,
  };
};

export default useUser;

// export const getByAuth0Id = async (auth0id) => {
//   const { data } = await axios.get(`${baseUrl}user/${auth0id}`);

//   return data;
// };
