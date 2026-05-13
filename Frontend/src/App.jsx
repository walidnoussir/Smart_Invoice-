import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";
import SupplierDetailsPage from "./pages/SupplierDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomPage />} />
          <Route path="suppliers" element={<SupplierPage />} />
          <Route path="invoices" element={<InvoicePage />} />
          <Route path="supplier-details" element={<SupplierDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
