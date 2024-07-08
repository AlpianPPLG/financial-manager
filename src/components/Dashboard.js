import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <Row className="dashboard">
      <Col md={4}>
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title>Saldo Total</Card.Title>
            <Card.Text>Rp. 10,000,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title>Pemasukan Bulanan</Card.Title>
            <Card.Text>Rp. 5,000,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="dashboard-card">
          <Card.Body>
            <Card.Title>Pengeluaran Bulanan</Card.Title>
            <Card.Text>Rp. 3,000,000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
