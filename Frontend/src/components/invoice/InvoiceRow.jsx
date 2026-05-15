import { useToggle } from "../../hooks/usetoggle";
import MenuInvoice from "./MenuInvoice";
import StatusBadge from "./StatusBadge";
import { MoreVertical } from "lucide-react";

function InvoiceRow({ invoice }) {
  const [state, toggle] = useToggle();
  return (
    <div
      className="grid grid-cols-6 items-center gap-2 px-6 py-6 border-b border-gray-200
     hover:bg-gray-50 transition"
    >
      <p className="text-lg font-medium">
        {invoice._id.toString().substring(0, 7) + "..."}
      </p>

      <p className="text-gray-700">{invoice.supplierId.name}</p>

      <p>{new Date(invoice.duDate).toDateString()}</p>

      <p className="font-medium">{invoice.amount}</p>

      <StatusBadge status={invoice.status} />

      <button
        className="w-11 relative h-11 rounded-xl border
      border-gray-200 flex items-center
       justify-center
        hover:bg-gray-100 transition"
      >
        <MoreVertical onClick={toggle} size={20} />

        {state && <MenuInvoice invoice={invoice} />}
      </button>
    </div>
  );
}

export default InvoiceRow;
