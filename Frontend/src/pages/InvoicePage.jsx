import { DiamondPlus } from "lucide-react";
import InvoiceTable from "../components/invoice/InvoiceTable";
import Text from "../components/Text";
import Button from "../components/Button";
import { useToggle } from "../hooks/usetoggle";
import Model from "../components/Model";
import { useInvoiceContext } from "../hooks/useInvoiceContext";
import { InvoiceContext } from "../components/invoice/context/InvoiceContext";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";

function InvoicePage() {
  const [state, toggle] = useToggle();
  const { addInvoice, loading, getSuppliers, suppliers, getInvoices } =
    useInvoiceContext(InvoiceContext);

  const [invoice, setInvoice] = useState({
    amount: null,
    supplierId: "",
    duDate: "",
    description: "",
  });

  useEffect(() => {
    getInvoices();
    getSuppliers();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log("key:", name, "value", value);
    setInvoice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addInvoice(invoice);
    toggle();

    console.log("invoice added");
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="relative w-[80vw] mt-2.5">
        <div>
          <div className="flex justify-between items-center mb-5">
            <Text text={"Facture"} style={"font-bold"} />
            <Button onClick={toggle} icon={<DiamondPlus />} />
          </div>

          {state && (
            <Model closeModel={toggle}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  onChange={handleChange}
                  name="amount"
                  type="number"
                  placeholder="Invoice Amount"
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  onChange={handleChange}
                  name="duDate"
                  type="text"
                  placeholder="Invoice DueDate e.g : 2026-03-06"
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  onChange={handleChange}
                  name="description"
                  type="text"
                  placeholder="Invoice Description"
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <label htmlFor="fournisseur">Choisir un fournisseur:</label>
                <select onChange={handleChange} name="supplierId">
                  <option value="">Choose supplier</option>
                  {suppliers.map((supplier) => {
                    return (
                      <option key={supplier._id} value={supplier._id}>
                        {supplier.name}
                      </option>
                    );
                  })}
                </select>

                <div className=" flex justify-center items-center">
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Add Invoice
                  </button>
                </div>
              </form>
            </Model>
          )}

          <InvoiceTable />
        </div>
      </div>
    );
  }
}

export default InvoicePage;
