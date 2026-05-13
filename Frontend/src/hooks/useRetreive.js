import axios from "axios";
import { useEffect, useState } from "react";

const useRetreive = (api_url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(api_url);
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
  }, [api_url]);

  return {
    loading,
    error,
    data,
  };
};

export default useRetreive;
