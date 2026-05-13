import { useNavigate } from "react-router-dom";
import { InvoiceContext } from "./context/InvoiceContext";
import { useInvoiceContext } from "../../hooks/useInvoiceContext";

function MenuInvoice({ invoice }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "absolute space-y-1 z-20 top-1/2 left-1/2 bg-gray-200 p-2 rounded "
      }
    >
      <button
        onClick={() => navigate(`/invoice-details/${invoice.id}`)}
        className="
         text-sm font-semibold
        rounded
       bg-green-100
       hover:bg-green-200
        text-green-500
        p-1
        w-18
        "
      >
        See
      </button>

      <button
        onClick={() => seeInvoice(invoice.id)}
        className="
         text-sm font-semibold
        rounded
       bg-red-100
       hover:bg-red-200
        text-red-500
        p-1
        w-18
        "
      >
        Delete
      </button>
    </div>
  );
}

export default MenuInvoice;
