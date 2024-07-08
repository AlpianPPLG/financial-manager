import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container className="home">
      <h1>Selamat Datang di Financial Manager</h1>
      <p>Kelola keuangan pribadi Anda dengan mudah dan efektif.</p>
      <Button className="btn-get-started" variant="primary" size="lg">Mulai Sekarang</Button>
    </Container>
  );
};

export default Home;
