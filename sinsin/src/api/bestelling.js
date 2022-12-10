import axios from "axios"; // 👈 1
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

const baseUrl = `http://localhost:9000/api/`;

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
  return {
    createBestelling,
  };
};

export default useBestelling;
