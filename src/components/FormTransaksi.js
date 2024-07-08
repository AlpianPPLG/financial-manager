import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionContext";
import "../styles/FormTransaksi.css";

const FormTransaksi = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Pemasukan");
  const [date, setDate] = useState("");

  // Function to format input amount with dots
  const formatAmountInput = (input) => {
    // Remove non-numeric characters and convert to string
    let amountStr = input.toString().replace(/\D/g, "");

    // Format with dots every three digits from the right
    amountStr = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return amountStr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove dots before saving to context
    const amountWithoutDots = amount.replace(/\./g, "");
    addTransaction({ amount: amountWithoutDots, description, category, date });
    setAmount("");
    setDescription("");
    setCategory("Pemasukan");
    setDate("");
  };

  const handleAmountChange = (e) => {
    // Format the input value with dots
    const formattedAmount = formatAmountInput(e.target.value);
    setAmount(formattedAmount);
  };

  return (
    <Form onSubmit={handleSubmit} className="form-transaksi">
      <Form.Group>
        <Form.Label>Jumlah</Form.Label>
        <Form.Control
          type="text" // Changed to text to allow formatting
          value={amount}
          onChange={handleAmountChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Kategori</Form.Label>
        <Form.Control
          as="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Pemasukan</option>
          <option>Pengeluaran</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Tanggal</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="btn-tambah-transaksi">
        Tambah Transaksi
      </Button>
    </Form>
  );
};

export default FormTransaksi;
