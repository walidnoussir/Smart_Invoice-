import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function InvoiceDetailsPage() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    async function fetchInvoice() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/invoices/${id}`,
        );

        setInvoice(response.data.invoice[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchInvoice();
  }, [id]);

  if (!invoice) return <p>Loading...</p>;

  console.log(invoice.description);

  return (
    <div>
      <h1>{invoice.description}</h1>
    </div>
  );
}

export default InvoiceDetailsPage;
