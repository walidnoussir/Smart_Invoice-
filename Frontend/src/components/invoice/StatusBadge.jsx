// components/StatusBadge.jsx
function StatusBadge({ status }) {
  const styles = {
    paid: "bg-green-100 text-green-600",
    partial: "bg-orange-100 text-orange-500",
    unpaid: "bg-red-100 text-red-500",
  };

  const labels = {
    paid: "Payée",
    partial: "Partial Payée",
    unpaid: "Unpaid",
  };

  return (
    <div
      className={`w-fit  px-4 py-2 rounded-full text-sm font-semibold ${styles[status]}`}
    >
      {labels[status]}
    </div>
  );
}

export default StatusBadge;
