import axios from "axios";
import { useEffect, useState } from "react";

const useSave = (api_url, payload) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.post(api_url, payload);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGameData();
  }, [api_url, payload]);

  return [loading, error, data];
};

export default useSave;
