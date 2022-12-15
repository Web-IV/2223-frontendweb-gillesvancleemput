import axios from "axios"; // 👈 1
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

const baseUrl = `http://localhost:9000/api/`;

const useMenuItems = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAllMenuItems = useCallback(async () => {
    const data = await axios.get(`${baseUrl}menu`);
    return data.data.items;
  }, []);
  const deleteByIdMenu = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const data = await axios.delete(`${baseUrl}menu/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data;
    },
    [getAccessTokenSilently]
  );
  const createMenuItem = useCallback(
    async (item) => {
      const token = await getAccessTokenSilently();
      const data = await axios.post(`${baseUrl}menu`, item, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data;
    },
    [getAccessTokenSilently]
  );
  const getByIdMenu = useCallback(async (id) => {
    const data = await axios.get(`${baseUrl}menu/${id}`);
    return data.data;
  }, []);
  const updateMenuItemById = useCallback(
    async (id, item) => {
      const token = await getAccessTokenSilently();
      const data = await axios.put(`${baseUrl}menu/${id}`, item, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data;
    },
    [getAccessTokenSilently]
  );

  return {
    getAllMenuItems,
    deleteByIdMenu,
    createMenuItem,
    getByIdMenu,
    updateMenuItemById,
  };
};

export default useMenuItems;
