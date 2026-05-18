import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Details.css";
import PaymentForm from "./PaymentForm";

import {
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const formatCurrency = new Intl.NumberFormat("fr-MA", {
  style: "currency",
  currency: "MAD",
}).format;

const token = localStorage.getItem("token")
console.log(token);


// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA5ZTQxYTdiN2UwMmM3NDE1NjI3NjkiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNzc5MDMzMTE0LCJleHAiOjE3Nzk2Mzc5MTR9.z0_BzyTH4gsQbOfn-6ucfLdtWYqODNctEq1vF5Ef0NE";

export default function InvoiceDetailsPage() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState(null);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openPaymentForm, setOpenPaymentForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [invoiceRes, paymentsRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/invoices/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`http://localhost:5000/api/invoices/${id}/payments`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const invoiceData = Array.isArray(invoiceRes.data.invoice)
          ? invoiceRes.data.invoice[0]
          : invoiceRes.data.invoice;

        setInvoice(invoiceData);
        setPayments(paymentsRes.data.payments || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <CircularProgress aria-label="Loading..." />;

  if (!invoice) return <p>Invoice not found</p>;

  const totalPaid = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );

  const remaining = Number(invoice.amount || 0) - totalPaid;
  console.log(payments);
  

  return (
    <>
      <Grid
        container
        spacing={25}
        sx={{ marginTop: "35px", marginLeft: "20px" }}
      >
        <Grid size={2}>
          <Typography variant="h5" component="h2">
            {invoice._id?.slice(0, 4)}......{invoice._id?.slice(-4)}
          </Typography>
        </Grid>

        <Grid size={1}>
          <span className={`badge badge-${invoice.status?.toLowerCase()}`}>
            {invoice.status}
          </span>
        </Grid>
      </Grid>

      <Card sx={{ width: "600px", marginTop: "20px", marginLeft: "40px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={5}>Fournisseur</Grid>
            <Grid size={6}>{invoice.supplierId?.name || "No supplier"}</Grid>

            <Grid size={5}>Date D'émission</Grid>
            <Grid size={6}>
              {invoice.createdAt
                ? new Date(invoice.createdAt).toLocaleDateString()
                : "-"}
            </Grid>

            <Grid size={5}>Échéance</Grid>
            <Grid size={6}>
              {invoice.duDate
                ? new Date(invoice.duDate).toLocaleDateString()
                : "-"}
            </Grid>

            <Grid size={5}>Montant TTC</Grid>
            <Grid size={6}>{formatCurrency(invoice.amount || 0)}</Grid>

            <Grid size={5}>Status</Grid>
            <Grid size={6}>
              <span className={`badge badge-${invoice.status?.toLowerCase()}`}>
                {invoice.status}
              </span>
            </Grid>

            <Grid size={5}>Total Payé</Grid>
            <Grid size={6}>{formatCurrency(totalPaid)}</Grid>

            <Grid size={5}>Remaining</Grid>
            <Grid size={6}>{formatCurrency(remaining)}</Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={20}
        sx={{ marginTop: "40px", marginLeft: "20px" }}
      >
        <Grid size={8}>
          <Typography variant="h5" component="h2">
            Payments
          </Typography>
        </Grid>

        <Grid size={4}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenPaymentForm(true)}
          >
            Ajouter une Payment
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ marginTop: "40px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="payments table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Montant</TableCell>
              <TableCell align="right">Reference</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {payments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No payments found
                </TableCell>
              </TableRow>
            ) : (
              payments.map((payment) => (
                <TableRow
                  key={payment._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {payment.paymentDate
                      ? new Date(payment.paymentDate).toLocaleDateString()
                      : "-"}
                  </TableCell>

                  <TableCell align="right">
                    {formatCurrency(payment.amount || 0)}
                  </TableCell>

                  
                  <TableCell align="right">
                    {payment._id?.slice(0, 4)}......{payment._id?.slice(-4)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <PaymentForm
        open={openPaymentForm}
        onClose={() => setOpenPaymentForm(false)}
        invoiceId={id}
        token={token}
        onAddPayment={(newPayment) => {
          setPayments((prev) => [...prev, newPayment]);
        }}
      />
    </>
  );
}