import axios from "axios";
import { useEffect, useState } from "react";
import { httpMethodType } from "../components/invoice/Types/httpMethodTypes";

const useCrudState = (api_url, httpMethod, payload) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  ///// -- i'll unComment this line after after compilation of project.
  // const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("fetchInvoice");
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

    const saveInvoice = async () => {
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

    if (httpMethod == httpMethodType.GET) {
      console.log("fetchInvoice");
      fetchInvoice();
    } else if (httpMethod == httpMethodType.POST) {
      saveInvoice(payload);
    } else if (httpMethod == httpMethodType.DELETE) {
      deleteInvoice();
    }
  }, [api_url, httpMethod, payload]);

  return {
    loading,
    error,
    data,
  };
};

export default useCrudState;
