import { BrowserRouter, data, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/suppliers")
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomPage />} />
          <Route path="suppliers" element={<SupplierPage />} />
          <Route path="invoices" element={<InvoicePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
