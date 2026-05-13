import { X } from "lucide-react";

function Model({ closeModel, children }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeModel}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm "
      ></div>

      {/* Modal */}

      <div
        className="fixed top-1/2 left-1/2 z-50 w-125 max-w-[90%] 
      -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-xl font-bold">Add Invoice</h2>

          <button
            onClick={closeModel}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5">{children}</div>
      </div>
    </>
  );
}

export default Model;
