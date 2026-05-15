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
  const getInvoices = async () => {
    try {
      setLoading(true);

      const response = await axios.get("http://localhost:5000/api/invoices", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA0NDllMGI0ODNjODhkYTkyNWRmYzciLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNzc4NjY1OTkxLCJleHAiOjE3NzkyNzA3OTF9.HMPPOub6ISVDjgyxmRmNoO4Ict8OGtXkXmLoKhp7fIY",
        },
      });

      setInvoices(response.data.invoices);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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

  // ADD
  const addInvoice = async (invoice) => {
    try {
      await axios.post(`http://localhost:5000/api/invoices/`, invoice, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA0NDllMGI0ODNjODhkYTkyNWRmYzciLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNzc4NjY1OTkxLCJleHAiOjE3NzkyNzA3OTF9.HMPPOub6ISVDjgyxmRmNoO4Ict8OGtXkXmLoKhp7fIY",
        },
      });

      setInvoices([]);
      getInvoices();
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
        addInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
