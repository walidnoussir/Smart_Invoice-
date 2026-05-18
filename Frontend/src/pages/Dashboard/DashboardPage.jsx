import "../../css/dashboard.css";
import { ExpensesChart, DoughnutChart } from "./Chart";
import { useEffect, useState, useContext } from "react";
import { getProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import { InvoiceContext } from "../../components/invoice/context/InvoiceContext";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { invoices, getInvoices, loading: invoicesLoading } = useContext(InvoiceContext);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        await getInvoices();
        console.log("Invoices data:", invoices);
      } catch (err) {
        console.error("Error fetching invoices:", err);
        setError("Impossible de charger les factures");
      }
    };

    if (getInvoices) {
      fetchInvoices();
    }
  }, [getInvoices]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getProfile();
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération du profil:", err);
        
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          setError("Impossible de charger les informations utilisateur");
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Calculs à partir des factures réelles
  const totalFactures = invoices?.length || 0;
  
  // Total Dépenses = somme de tous les montants
  const totalDepenses = invoices?.reduce(
    (total, facture) => total + (facture.amount || 0),
    0
  ) || 0;
  
  // Factures en retard = filtrer par date d'échéance < date actuelle
  const facturesEnRetard = invoices?.filter((facture) => {
    const dueDate = new Date(facture.duDate);
    const today = new Date();
    return dueDate < today;
  }).length || 0;
  


  // Log pour debug
  console.log("=== Dashboard Calculs ===");
  console.log("Toutes les factures:", invoices);
  console.log("Nombre total de factures:", totalFactures);
  console.log("Total des dépenses:", totalDepenses);
  console.log("Factures en retard:", facturesEnRetard);

  if (loading || invoicesLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>

        <div className="hero">
          <h3>Bonjour, {user?.name || user?.username || "Utilisateur"} 👋</h3>
          <p>Voici un aperçu de votre activité</p>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="cards">
          <article>
            <h3>Total Factures</h3> 
            <p>{totalFactures}</p>
          </article>

          <article>
            <h3>Total Dépenses</h3>
            <p>{totalDepenses} DH</p>
          </article>

          <article>
            <h3>Factures en retard</h3>
            <p>{facturesEnRetard}</p>
          </article>
        </div>
        
        <div className="charts-container">
          <div className="chart">
            <h2>Graphe des Dépenses</h2>
            <ExpensesChart invoices={invoices} />
          </div>

          <div className="chart">
            <h2>Répartition par statut</h2>
            <DoughnutChart invoices={invoices} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;