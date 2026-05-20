import { InvoiceContext } from "./InvoiceContext";
import { useState, useCallback, useMemo } from "react";
import axios from "axios";

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [suppliers, setSuppliers] = useState([]);

  const token = localStorage.getItem("token");

  // GET INVOICES

  const getInvoices = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get("http://localhost:5000/api/invoices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInvoices(response.data.invoices);
      console.log("Invoices-------------------", response.data.invoices);
    } catch (error) {
      setIsError(error.response?.data?.message || "Failed to fetch invoices");
    } finally {
      setLoading(false);
    }
  }, [token]);

  // DELETE INVOICE
  const removeInvoice = useCallback(
    async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/invoices/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setInvoices((prev) => prev.filter((invoice) => invoice._id !== id));
      } catch (error) {
        console.log("DELETE ERROR:", error);

        setIsError(error.response?.data?.message || "Failed to delete invoice");
      }
    },
    [token],
  );

  // ADD INVOICE
  const addInvoice = useCallback(
    async (invoice) => {
      console.log("Inserted invoice", invoice);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/invoices",
          invoice,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setInvoices((prev) => [...prev, response.data.invoice]);
      } catch (error) {
        console.log("ADD ERROR:", error);

        setIsError(error.response?.data?.message || "Failed to add invoice");
      }
    },
    [token],
  );

  // Get Suppliers.
  const getSuppliers = useCallback(async () => {
    try {
      setLoading(true);
      const suppliers = await axios.get("http://localhost:5000/api/suppliers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuppliers(suppliers.data);
      console.log(suppliers.data);
    } catch (error) {
      setIsError(error.response?.data?.message || "Failed to fetch invoices");
      console.log("GET INVOICES ERROR:", error.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  const value = useMemo(
    () => ({
      invoices,
      loading,
      isError,
      getInvoices,
      removeInvoice,
      addInvoice,
      getSuppliers,
      suppliers,
    }),
    [
      invoices,
      loading,
      isError,
      getInvoices,
      removeInvoice,
      addInvoice,
      getSuppliers,
      suppliers,
    ],
  );
  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
