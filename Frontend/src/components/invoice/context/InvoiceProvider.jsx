import { InvoiceContext } from "./InvoiceContext";
import { useState, useEffect } from "react";
import axios from "axios";

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const token = localStorage.getItem("token");

  // CONFIG
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // GET INVOICES
  const getInvoices = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/invoices",
        config,
      );

      setInvoices(response.data.invoices);
    } catch (error) {
      console.log("GET INVOICES ERROR:", error);

      setIsError(error.response?.data?.message || "Failed to fetch invoices");
    } finally {
      setLoading(false);
    }
  };

  // DELETE INVOICE
  const removeInvoice = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/invoices/${id}`, config);

      setInvoices((prev) => prev.filter((invoice) => invoice._id !== id));
    } catch (error) {
      console.log("DELETE ERROR:", error);

      setIsError(error.response?.data?.message || "Failed to delete invoice");
    }
  };

  // ADD INVOICE
  const addInvoice = async (invoice) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoices",
        invoice,
        config,
      );

      setInvoices((prev) => [...prev, response.data.invoice]);
    } catch (error) {
      console.log("ADD ERROR:", error);

      setIsError(error.response?.data?.message || "Failed to add invoice");
    }
  };

  // FETCH ON MOUNT
  useEffect(() => {
    if (token) {
      getInvoices();
    }
  }, []);

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        loading,
        isError,
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
