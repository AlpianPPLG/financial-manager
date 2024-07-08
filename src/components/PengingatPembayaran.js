import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Card, ListGroup } from 'react-bootstrap';
import { PaymentReminderContext } from '../context/PaymentReminderContext';
import './PengingatPembayaran.css';

const PengingatPembayaran = () => {
  const { reminders, addReminder, getReminders } = useContext(PaymentReminderContext);
  const [newReminder, setNewReminder] = useState('');

  useEffect(() => {
    const fetchReminders = async () => {
      await getReminders();
    };

    fetchReminders();
  }, [getReminders]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addReminder({ text: newReminder });
    setNewReminder('');
  };

  return (
    <Container className="pengingat-pembayaran">
      <Card>
        <Card.Body>
          <Card.Title>Pengingat Pembayaran</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Tambah Pengingat</Form.Label>
              <Form.Control
                type="text"
                value={newReminder}
                onChange={(e) => setNewReminder(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" className="btn-add-reminder">Tambah Pengingat</Button>
          </Form>
          <ListGroup className="reminder-list">
            {reminders.map((reminder, index) => (
              <ListGroup.Item key={index}>{reminder.text}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PengingatPembayaran;
