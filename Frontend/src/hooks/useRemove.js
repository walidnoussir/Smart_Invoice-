import axios from "axios";
import { useEffect, useState } from "react";

const useRemove = (api_url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const deleteInvoice = async () => {
      try {
        const response = await axios.delete(api_url);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    deleteInvoice();
  }, [api_url]);

  return [loading, error, data];
};

export default useRemove;
