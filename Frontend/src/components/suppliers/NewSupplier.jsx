import { useState } from "react";
import useSave from "../../hooks/useSave";

function NewSupplier({ setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { loading, error, saveData } = useSave();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await saveData(
        "http://localhost:5000/api/suppliers",
        formData,
      );

      console.log(result);

      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter un fournisseur
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-red-500 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du fournisseur
            </label>

            <input
              type="text"
              name="name"
              placeholder="nome de fournisseur"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <textarea
            rows="4"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Adresse"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 rounded-lg border"
            >
              Annuler
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white"
            >
              {loading ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewSupplier;
