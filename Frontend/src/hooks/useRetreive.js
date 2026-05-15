import axios from "axios";
import { useEffect, useState } from "react";

const useRetreive = (api_url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const token = localStorage.getItem("token");

        console.log(token);

        const response = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (err) {
        console.log(err.response);

        setError(err.response?.data?.message || err.message);
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
