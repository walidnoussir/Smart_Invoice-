import "../../css/dashboard.css";
import { dashboardData } from "../Dashboard/data";
import { ExpensesChart, DoughnutChart } from "./Chart";

const facturesEnRetard = dashboardData.recentFactures.filter(
  (facture) => facture.statut === "En retard",
);

const totalDepenses = dashboardData.recentFactures.reduce(
  (total, facture) => total + facture.montant,
  0,
);

const moisActuel = new Date().getMonth(); //get actuel month
const anneeActuelle = new Date().getFullYear(); // year : 2026
const paiementCeMois = dashboardData.recentFactures
  .filter((facture) => {
    const dateFacture = new Date(facture.date); // str => obj ===> apply date methods

    return (
      dateFacture.getMonth() === moisActuel &&
      dateFacture.getFullYear() === anneeActuelle &&
      facture.statut === "Payée"
    );
  })
  .reduce((total, facture) => total + facture.montant, 0);

function Dashboard() {
  const name = "Zineb";
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="hero">
          <h3>Bonjour, {name} 👋</h3>
          <p>Voici un aperçu de votre activité</p>
        </div>

        <div className="cards">
          <article>
            <h3>Total Factures</h3>
            <p>{dashboardData.recentFactures.length}</p>
          </article>

          <article>
            <h3>Total Dépenses</h3>
            <p>{totalDepenses} DH</p>
          </article>

          <article>
            <h3>Facture en retard</h3>
            <p>{facturesEnRetard.length}</p>
          </article>

          <article>
            <h3>Paiement ce mois</h3>
            <p>{paiementCeMois} DH</p>
          </article>
        </div>
        <div className="charts-container">
          <div className="chart">
            <h2>Graphe des Dépenses</h2>
            <ExpensesChart />
          </div>

          <div className="chart">
            <h2>Répartition par status</h2>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
