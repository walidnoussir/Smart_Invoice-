
import {Dialog ,Card ,CardActions ,CardContent,Button,TextField,Typography,InputLabel,MenuItem,Select} from "@mui/material";
import axios from "axios";
import { useState } from "react";


export default function PaymentForm({ open, onClose,invoiceId ,token , onAddPayment }) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [reference, setReference] = useState("");
  const handleSubmit = async () => {
    const newPayment ={
      amount,
      paymentMethod,
      paymentDate,
      reference,
    }
    const response = await axios.post(
      `http://localhost:5000/api/invoices/${invoiceId}/payments`,
      newPayment,{
        headers : {
          Authorization :`Bearer ${token}`
        }
      }
    )
    onAddPayment(response.data.payment)
    onClose()
  }
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" aria-labelledby="draggable-dialog-title">
        <Card sx={{ width: "650px", padding: "20px", borderRadius: "16px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              AJOUTER PAYMENT
            </Typography>
            <TextField
              label="Montant"
              id="fullWidth"
              sx={{ marginTop: "30px", width: "500px" }}
              value={amount}
              onChange ={(e) => setAmount(e.target.value)}
            />
            <InputLabel
              id="demo-simple-select-label"
              sx={{ marginTop: "30px" }}
            >
              Payment Method
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              sx={{ width: "500px" }}
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <MenuItem>Bank Transfer</MenuItem>
              <MenuItem>Cash</MenuItem>
              <MenuItem>Credit Card</MenuItem>
              <MenuItem>Check</MenuItem>
            </Select>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ marginTop: "30px" }}
            >
              Payment Date
            </InputLabel>
            <TextField
              type="date"
                label="Payment Date"
              sx={{ width: "500px" }}
              InputLabelProps={{
                shrink: true,
              }}
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
            />
            <TextField
              label="Référence"
              id="fullWidth"
              sx={{ marginTop: "30px", width: "500px" }}
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </CardContent>
          <CardActions
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                width: "220px",
                height: "50px",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Enregistrer
            </Button>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                width: "220px",
                height: "50px",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Annuler
            </Button>
          </CardActions>
        </Card>
</Dialog>
  );
}
