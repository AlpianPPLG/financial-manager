import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import "../styles/Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container className="profile">
      <Card>
        <Card.Body>
          <Card.Title>Profil Pengguna</Card.Title>
          <Card.Text>Email: {user ? user.email : "Guest"}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
