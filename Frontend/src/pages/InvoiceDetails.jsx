import { useParams } from "react-router-dom";

function InvoiceDetails() {
  const { id } = useParams();
  return <div>InvoiceDetails: {id}</div>;
}

export default InvoiceDetails;
