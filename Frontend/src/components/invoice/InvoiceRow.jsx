import StatusBadge from "./StatusBadge";
import { MoreVertical } from "lucide-react";

function InvoiceRow({ invoice }) {
  return (
    <div
      className="grid grid-cols-6 items-center gap-2 px-6 py-6 border-b border-gray-200
     hover:bg-gray-50 transition"
    >
      <p className="text-lg font-medium">{invoice.id}</p>

      <p className="text-gray-700">{invoice.fournisseur}</p>

      <p>{invoice.echeance}</p>

      <p className="font-medium">{invoice.montant}</p>

      <StatusBadge status={invoice.status} />

      <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
        <MoreVertical size={20} />
      </button>
    </div>
  );
}

export default InvoiceRow;
