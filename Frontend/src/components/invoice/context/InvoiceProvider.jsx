import { InvoiceContext } from "./InvoiceContext";
import { useState } from "react";
import axios from "axios";

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  //"http://localhost:5000/api/invoices/"

  const token = localStorage.getItem("token");

  // GET INVOICES
    useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/invoices/", {
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

  // DELETE
  const removeInvoice = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/invoices/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA0NDllMGI0ODNjODhkYTkyNWRmYzciLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNzc4NjY1OTkxLCJleHAiOjE3NzkyNzA3OTF9.HMPPOub6ISVDjgyxmRmNoO4Ict8OGtXkXmLoKhp7fIY",
        },
      });

      setInvoices((prev) => prev.filter((invoice) => invoice._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InvoiceContext.Provider
      value={{
        loading,
        invoices,
        getInvoices,
        removeInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
