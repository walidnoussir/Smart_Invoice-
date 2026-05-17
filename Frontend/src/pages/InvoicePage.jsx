import { DiamondPlus } from "lucide-react";
import { invoices } from "../components/invoice/fakeData";
import InvoiceTable from "../components/invoice/InvoiceTable";
import Text from "../components/Text";
import Button from "../components/Button";
import { useToggle } from "../hooks/usetoggle";
import Model from "../components/Model";
import useSave from "../hooks/useSave";
import useRetreive from "../hooks/useRetreive";

function InvoicePage() {
  const [state, toggle] = useToggle();

  const [isLoading, isError, isLoaded] = useSave();

  const { loading, error, data } = useRetreive();

  return (
    <div className="relative w-[80vw] mt-2.5">
      <div className="flex justify-between items-center mb-5">
        <Text text={"Facture"} style={"font-bold"} />
        <Button onClick={toggle} icon={<DiamondPlus />} />
      </div>

      {state && (
        <Model closeModel={toggle}>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Invoice Number"
              className="w-full border rounded-lg p-3 outline-none"
            />

            <input
              type="text"
              placeholder="Supplier"
              className="w-full border rounded-lg p-3 outline-none"
            />

            <Button
              onClick={() => {
                console.log("Hello");
              }}
              icon={<DiamondPlus />}
            />
          </form>
        </Model>
      )}

      <InvoiceTable invoices={invoices} />
    </div>
  );
}

export default InvoicePage;
