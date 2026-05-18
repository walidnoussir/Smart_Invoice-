import { BrowserRouter, data, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import SupplierDetailsPage from "./pages/SupplierDetailsPage";
import AuthProvider from "./contexts/AuthContext";
import InvoiceProvider from "./components/invoice/context/InvoiceProvider";
import InvoiceDetails from "./pages/InvoiceDetails";

function App() {
 
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomPage />} />
            <Route path="suppliers" element={<SupplierPage />} />
            <Route
              path="suppliers-details/:id"
              element={<SupplierDetailsPage />}
            />
            <Route
              path="invoices"
              element={
                <InvoiceProvider>
                  <InvoicePage />
                </InvoiceProvider>
              }
            />
            <Route path="invoice-details/:id" element={<InvoiceDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
