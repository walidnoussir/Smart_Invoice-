import axios from "axios";
import { useEffect, useState } from "react";

const useRetreive = (api_url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  ///// -- i'll unComment this line after after compilation of project.
  // const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get(api_url, {
          headers: {
            //// --- I'll unComment this line after compilation of project.
            //Authorization:token
            // I'll add the 'token' as a hard coded.
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA0NDllMGI0ODNjODhkYTkyNWRmYzciLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNzc4NjY1OTkxLCJleHAiOjE3NzkyNzA3OTF9.HMPPOub6ISVDjgyxmRmNoO4Ict8OGtXkXmLoKhp7fIY",
          },
        });

        console.log("response", response);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log("error", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoice();
  }, [api_url]);

  return {
    loading,
    error,
    data,
  };
};

export default useRetreive;
