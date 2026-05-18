export const dashboardData = {
  totalFactures: 128,
  totalDepenses: 15000,
  facturesRetard: 10,
  paiementMois: 1000,

  depensesMensuelles: [
    { mois: "Jan", montant: 12000 },
    { mois: "Fév", montant: 15000 },
    { mois: "Mar", montant: 14000 },
    { mois: "Avr", montant: 18000 },
    { mois: "Mai", montant: 22000 },
    { mois: "Juin", montant: 19000 },
    { mois: "Juil", montant: 25000 },
    { mois: "Aoû", montant: 27000 },
    { mois: "Sep", montant: 24000 },
    { mois: "Oct", montant: 30000 },
    { mois: "Nov", montant: 28000 },
    { mois: "Déc", montant: 32000 },
  ],

  repartitionStatus: [
    {
      status: "Payées",
      value: 65,
    },
    {
      status: "Partiellement payées",
      value: 20,
    },
    {
      status: "Impayées",
      value: 15,
    },
  ],
  recentFactures: [
    {
      id: 1,
      fournisseur: "TechNova",
      montant: 3200,
      statut: "Payée",
      date: "2026/05/12",
    },
    {
      id: 2,
      fournisseur: "Atlas Print",
      montant: 1800,
      statut: "En retard",
      date: "2026/05/10",
    },
    {
      id: 3,
      fournisseur: "DevHouse",
      montant: 5400,
      statut: "Partielle",
      date: "2026/05/08",
    },
    {
      id: 4,
      fournisseur: "MediaPro",
      montant: 2600,
      statut: "Payée",
      date: "2026/05/05",
    },
  ],
};