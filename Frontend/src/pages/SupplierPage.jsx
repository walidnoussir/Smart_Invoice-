import { useState } from "react";
import NewSupplier from "../components/suppliers/NewSupplier";
import { useNavigate } from "react-router-dom";

const suppliers = [
  {
    id: 1,
    name: "TechPro SARL",
    email: "contact@techpro.com",
    phone: "0555 12 34 56",
  },
  {
    id: 2,
    name: "Office Plus",
    email: "contact@officeplus.com",
    phone: "0555 98 76 54",
  },
  {
    id: 3,
    name: "BuildIt",
    email: "contact@buildit.com",
    phone: "0555 23 45 67",
  },
];

function SupplierPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white w-full rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Fournisseurs
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Liste des fournisseurs enregistrés
            </p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm cursor-pointer"
          >
            + Nouveau fournisseurs
          </button>
        </div>

        {/* Search */}
        <div className="p-5 border-b border-gray-100 w-full">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Nom</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Téléphone</th>
                <th className="px-6 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {supplier.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{supplier.email}</td>

                  <td className="px-6 py-4 text-gray-600">{supplier.phone}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {/* View */}
                      <button
                        onClick={() => navigate("/supplier-details")}
                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5
                      c4.478 0 8.268 2.943 9.542 7
                      -1.274 4.057-5.064 7-9.542 7
                      -4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-5 border-t border-gray-100">
          <button className="w-8 h-8 rounded-lg border border-gray-300 text-sm hover:bg-gray-100">
            1
          </button>

          <button className="w-8 h-8 rounded-lg border border-gray-300 text-sm hover:bg-gray-100">
            2
          </button>

          <button className="w-8 h-8 rounded-lg border border-gray-300 text-sm hover:bg-gray-100">
            3
          </button>
        </div>
      </div>
      {isOpen && <NewSupplier setIsOpen={setIsOpen} />}
    </div>
  );
}

export default SupplierPage;
