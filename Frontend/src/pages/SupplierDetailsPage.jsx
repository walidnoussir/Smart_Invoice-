import { useNavigate, useParams } from "react-router-dom";
import useRetreive from "../hooks/useRetreive";
import Spinner from "../components/ui/Spinner";
import { ArrowLeft } from "lucide-react";

function SupplierDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const { loading, data: supplier } = useRetreive(
    `http://localhost:5000/api/suppliers/${id}`,
  );
  // const supplier = {
  //   name: "TechPro SARL",
  //   email: "contact@techpro.com",
  //   phone: "0555 12 34 56",
  //   address: "123 Rue des Entreprises, Alger",
  //   totalInvoices: 24,
  //   totalAmount: "25,600.00 €",
  //   paid: "17,800.00 €",
  //   unpaid: "7,800.00 €",
  // };

  if (loading) return <Spinner />;

  console.log(supplier);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <button
        className="text-blue-500 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="size-8" />
      </button>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm text-blue-600 font-medium mb-2">
              Fournisseurs
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              {supplier.name}
            </h1>

            <p className="text-gray-500 mt-2">Détails du fournisseur</p>
          </div>
        </div>
      </div>

      {/* Supplier Info + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Informations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            Informations
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">
                {supplier.supplier.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Téléphone</p>
              <p className="font-medium text-gray-800">
                {supplier.supplier.phone}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Adresse</p>
              <p className="font-medium text-gray-800">
                {supplier.supplier.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierDetailsPage;
