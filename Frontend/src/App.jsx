import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
// import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import SupplierDetailsPage from "./pages/SupplierDetailsPage";
import AuthProvider from "./contexts/AuthContext";
import InvoiceProvider from "./components/invoice/context/InvoiceProvider";
import Dashboard from "./pages/Dashboard/DashboardPage";
import InvoiceDetailsPage from "./pages/InvoiceDetailPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <InvoiceProvider>
          {" "}
          {/* Move InvoiceProvider here */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

<<<<<<< HEAD
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />

            <Route path="suppliers" element={<SupplierPage />} />

            <Route
              path="suppliers-details/:id"
              element={<SupplierDetailsPage />}
            />

            <Route
              path="invoices"
=======
            <Route
              path="/home"
>>>>>>> 3f80cad258e0b6b13c8e3650218938d04647c9b0
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="suppliers" element={<SupplierPage />} />
              <Route
                path="suppliers-details/:id"
                element={<SupplierDetailsPage />}
              />
              <Route path="invoices" element={<InvoicePage />} />{" "}
              {/* Remove InvoiceProvider from here */}
              <Route
                path="invoice-details/:id"
                element={<InvoiceDetailsPage />}
              />
            </Route>
          </Routes>
        </InvoiceProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
