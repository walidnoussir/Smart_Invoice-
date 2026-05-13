import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomPage from "./pages/HomPage";
import SupplierPage from "./pages/SupplierPage";
import InvoicePage from "./pages/InvoicePage";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={ 
          <ProtectedRoute> 
            <AppLayout /> 
          </ProtectedRoute>
        }>
            <Route index element={<HomPage />} />
            <Route path="suppliers" element={<SupplierPage />} />
            <Route path="invoices" element={<InvoicePage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
