import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from "chart.js";
import { Bar } from "react-chartjs-2";
import {dashboardData} from "./data"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ExpensesChart() {
  const data = {
    labels: dashboardData.depensesMensuelles.map((el) => el.mois),
    datasets: [
      {
        label: "Dépenses",
        data: dashboardData.depensesMensuelles.map((el) => el.montant),
        backgroundColor: "#4f46e5",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Bar data={data} options={options} />;
}

export default ExpensesChart;