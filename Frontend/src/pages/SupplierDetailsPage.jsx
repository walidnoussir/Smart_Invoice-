function SupplierDetailsPage() {
  const supplier = {
    name: "TechPro SARL",
    email: "contact@techpro.com",
    phone: "0555 12 34 56",
    address: "123 Rue des Entreprises, Alger",
    totalInvoices: 24,
    totalAmount: "25,600.00 €",
    paid: "17,800.00 €",
    unpaid: "7,800.00 €",
  };

  const invoices = [
    {
      id: "INV-001",
      date: "15/05/2024",
      amount: "2,500.00 €",
      status: "Payée",
    },
    {
      id: "INV-002",
      date: "20/05/2024",
      amount: "1,200.00 €",
      status: "Partiellement payée",
    },
    {
      id: "INV-003",
      date: "01/06/2024",
      amount: "980.00 €",
      status: "Impayée",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm text-blue-600 font-medium mb-2">
              Fournisseurs
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              {supplier.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Détails et statistiques du fournisseur
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition">
            Modifier
          </button>
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
              <p className="font-medium text-gray-800">{supplier.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Téléphone</p>
              <p className="font-medium text-gray-800">{supplier.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Adresse</p>
              <p className="font-medium text-gray-800">{supplier.address}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <p className="text-sm text-gray-500 mb-2">Total Factures</p>

            <h3 className="text-3xl font-bold text-gray-800">
              {supplier.totalInvoices}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <p className="text-sm text-gray-500 mb-2">Montant Total</p>

            <h3 className="text-3xl font-bold text-gray-800">
              {supplier.totalAmount}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <p className="text-sm text-gray-500 mb-2">Payées</p>

            <h3 className="text-3xl font-bold text-green-600">
              {supplier.paid}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
            <p className="text-sm text-gray-500 mb-2">Impayées</p>

            <h3 className="text-3xl font-bold text-red-600">
              {supplier.unpaid}
            </h3>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Factures</h2>

            <p className="text-sm text-gray-500 mt-1">
              Liste des factures liées au fournisseur
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            + Nouvelle facture
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">N° Facture</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Montant</th>
                <th className="px-6 py-4">Statut</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {invoices.map((invoice, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {invoice.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{invoice.date}</td>

                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {invoice.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        invoice.status === "Payée"
                          ? "bg-green-100 text-green-700"
                          : invoice.status === "Partiellement payée"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SupplierDetailsPage;
