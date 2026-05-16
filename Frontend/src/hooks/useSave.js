import axios from "axios";
import { useState } from "react";

const useSave = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const saveData = async (api_url, payload) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.post(api_url, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setData(response.data);

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;

      setError(message);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    saveData,
  };
};

export default useSave;
