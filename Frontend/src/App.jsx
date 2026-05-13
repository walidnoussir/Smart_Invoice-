import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";
import InvoiceProvider from "./components/invoice/context/InvoiceProvider";
import InvoiceDetails from "./pages/InvoiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomPage />} />
          <Route path="suppliers" element={<SupplierPage />} />

          <Route
            path="invoices"
            element={
              <InvoiceProvider>
                <InvoicePage />
              </InvoiceProvider>
            }
          />
          <Route path="/invoice-details/:id" element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
