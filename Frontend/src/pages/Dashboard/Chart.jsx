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

export const ExpensesChart = ({invoices}) => {
  // Tous les mois de l'année (style original)
  const moisNoms = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
  // Initialiser tous les mois avec 0
  const depensesMensuelles = new Array(12).fill(0);
  
  // Remplir avec les données des factures
  if (invoices && invoices.length > 0) {
    invoices.forEach(invoice => {
      const date = new Date(invoice.createdAt || invoice.date);
      const mois = date.getMonth();
      const montant = invoice.amount || 0;
      depensesMensuelles[mois] += montant;
    });
  }
  
  const data = {
    labels: moisNoms,
    datasets: [
      {
        label: "Dépenses",
        data: depensesMensuelles,
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

export const DoughnutChart = ({invoices}) => {
  // Initialiser tous les statuts avec 0
  let paid = 0;           // Payée
  let unpaid = 0;         // Non payée / En attente
  let partiallyPaid = 0;  // Partiellement payée / En retard
  
  // Compter les factures par statut
  if (invoices && invoices.length > 0) {
    invoices.forEach(invoice => {
      let status = invoice.status || 'unpaid';
      
      console.log("Invoice status:", status); // Pour debug
      
      if (status === 'paid') {
        paid++;
      } else if (status === 'partially_paid') {
        partiallyPaid++;
      } else if (status === 'unpaid') {
        unpaid++;
      }
    });
  }
  
  console.log("Counts - Paid:", paid, "Partially Paid:", partiallyPaid, "Unpaid:", unpaid); // Pour debug
  
  // Toujours afficher tous les statuts même s'ils sont à 0
  const data = {
    labels: ['Payée', 'Partiellement payée', 'Non payée'],
    datasets: [
      {
        label: "Répartition des statuts",
        data: [paid, partiallyPaid, unpaid],
        backgroundColor: [
          "#22c55e",  // Vert pour payée
          "#facc15",  // Jaune pour partiellement payée
          "#ef4444",  // Rouge pour non payée
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
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = paid + partiallyPaid + unpaid;
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${value} facture(s) (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="doughnut-wrapper">
      <Doughnut data={data} options={options} />
    </div>
  );
}