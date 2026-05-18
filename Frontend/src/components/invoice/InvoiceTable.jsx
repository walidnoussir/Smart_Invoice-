import { useEffect } from "react";
import { useInvoiceContext } from "../../hooks/useInvoiceContext";
import { InvoiceContext } from "./context/InvoiceContext";
import InvoiceRow from "./InvoiceRow";
import Spinner from "../ui/Spinner";

function InvoiceTable() {
  const { loading, invoices, getInvoices } = useInvoiceContext(InvoiceContext);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md  border border-gray-200">
        {/* Header */}
        <div className="grid grid-cols-6 content-center bg-gray-50 border-b border-gray-200 px-6 py-5 font-semibold text-lg">
          <h2>N Facture</h2>
          <h2>Fournisseur</h2>
          <h2>Échéance</h2>
          <h2>Montant</h2>
          <h2>Status</h2>
          <h2>Action</h2>
        </div>
        {/* Rows */}
        <div>
          {invoices.map((invoice) => (
            //console.log("data", data),
            <InvoiceRow key={invoice._id} invoice={invoice} />
          ))}
        </div>
      </div>
    );
  }
}

export default InvoiceTable;
