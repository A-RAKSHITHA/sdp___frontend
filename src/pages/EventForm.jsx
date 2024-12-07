import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const EventForm = ({ eventType }) => {
  const [formData, setFormData] = useState({
    eventId: '',
    eventName: '',
    date: '',
    time: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: eventType });
    // Here you can add API call to save the event
    setFormData({
      eventId: '',
      eventName: '',
      date: '',
      time: '',
      price: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="event-form p-4 bg-light rounded">
      <h3>Add New {eventType}</h3>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="eventId">Event ID</Label>
            <Input
              type="text"
              name="eventId"
              id="eventId"
              value={formData.eventId}
              onChange={handleChange}
              required
              placeholder="Enter event ID"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="eventName">Event Name</Label>
            <Input
              type="text"
              name="eventName"
              id="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              placeholder="Enter event name"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="time">Time</Label>
            <Input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
          </FormGroup>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button color="primary" size="lg" type="submit">
          Submit {eventType}
        </Button>
      </div>
    </Form>
  );
};

export default EventForm; 