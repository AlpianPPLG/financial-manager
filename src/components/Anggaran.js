import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { BudgetContext } from "../context/BudgetContext";
import "./Anggaran.css";

const Anggaran = () => {
  const { budget, setBudget, getBudget } = useContext(BudgetContext);
  const [newBudget, setNewBudget] = useState(budget || "");

  useEffect(() => {
    const fetchBudget = async () => {
      const budgetData = await getBudget();
      setNewBudget(budgetData.amount);
    };

    fetchBudget();
  }, [getBudget]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setBudget({ amount: newBudget });
  };

  return (
    <Container className="anggaran">
      <Card>
        <Card.Body>
          <Card.Title>Set Anggaran</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Anggaran Bulanan</Form.Label>
              <Form.Control
                type="number"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="btn-set-anggaran">
              Set Anggaran
            </Button>
          </Form>
          {budget && (
            <Card.Text className="current-budget">
              Anggaran Saat Ini: Rp {budget.amount}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Anggaran;
