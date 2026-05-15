import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {dashboardData} from "./data"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
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


function DoughnutChart() {
  const data = {
    labels: dashboardData.repartitionStatus.map(
      (el) => el.status
    ),

    datasets: [
      {
        label: "Répartition des statuts",
        data: dashboardData.repartitionStatus.map(
          (el) => el.value
        ),

        backgroundColor: [
          "#22c55e",
          "#facc15",
          "#ef4444",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="doughnut-wrapper">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export { ExpensesChart, DoughnutChart };