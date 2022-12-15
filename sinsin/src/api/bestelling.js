import axios from "axios"; // 👈 1
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

const baseUrl = `${process.env.REACT_APP_BASEURL}`;

const useBestelling = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createBestelling = useCallback(
    async (list, adres) => {
      const token = await getAccessTokenSilently();
      await axios.post(
        `${baseUrl}bestelling`,
        { list, adres },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    [getAccessTokenSilently]
  );
  const getAllBestellingen = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const data = await axios.get(`${baseUrl}bestelling`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.data;
  }, [getAccessTokenSilently]);

  return {
    createBestelling,
    getAllBestellingen,
  };
};

export default useBestelling;
