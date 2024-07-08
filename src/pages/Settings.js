import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import "../styles/Settings.css";

const Settings = () => {
  const { bahasa, setBahasa } = useContext(AuthContext);

  const handleChangeBahasa = (e) => {
    setBahasa(e.target.value);
    // Simpan preferensi bahasa di sini, misalnya di localStorage atau database
  };

  return (
    <Container className="settings">
      <h2>Pengaturan</h2>
      <Form>
        <Form.Group>
          <Form.Label>Bahasa</Form.Label>
          <Form.Control
            as="select"
            value={bahasa}
            onChange={handleChangeBahasa}
          >
            <option value="Indonesia">Indonesia</option>
            <option value="English">English</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tema</Form.Label>
          <Form.Control as="select">
            <option>Terang</option>
            <option>Gelap</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className="btn-settings">
          Simpan Pengaturan
        </Button>
      </Form>
    </Container>
  );
};

export default Settings;
