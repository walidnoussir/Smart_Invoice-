import useRetreive from "../../hooks/useRetreive";
import InvoiceRow from "./InvoiceRow";

function InvoiceTable({ invoices }) {
  //const { loading, error, data } = useRetreive();
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-200 px-6 py-5 font-semibold text-lg">
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
          <InvoiceRow key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
}

export default InvoiceTable;
