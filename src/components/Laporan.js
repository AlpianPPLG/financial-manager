import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionContext";
import "../styles/Laporan.css";

// Function to format number with dots
const formatAmount = (amount) => {
  if (amount) {
    // Convert amount to string, remove non-digit characters, and add dots
    const amountStr = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return amountStr;
  }
  return "0";
};

const Laporan = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <Table striped bordered hover className="laporan">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Deskripsi</th>
          <th>Kategori</th>
          <th>Jumlah</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{formatAmount(transaction.amount)}</td> {/* Format amount */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Laporan;
