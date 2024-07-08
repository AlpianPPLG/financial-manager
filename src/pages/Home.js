import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container className="home">
      <h1>Selamat Datang di Financial Manager</h1>
      <p>Kelola keuangan pribadi Anda dengan mudah dan efektif.</p>
    </Container>
  );
};

export default Home;
