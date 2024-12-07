import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const EventSubmissionForm = ({ onSubmit, defaultType }) => {
  const [eventData, setEventData] = useState({
    eventType: defaultType || 'webinar',
    eventName: '',
    eventTime: '',
    eventId: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
    setEventData({
      eventType: defaultType || 'webinar',
      eventName: '',
      eventTime: '',
      eventId: Date.now(),
    });
  };

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="eventName">Event Name</Label>
            <Input
              type="text"
              name="eventName"
              id="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="eventTime">Event Time</Label>
            <Input
              type="datetime-local"
              name="eventTime"
              id="eventTime"
              value={eventData.eventTime}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4} className="d-flex align-items-end">
          <Button color="primary" type="submit" className="mb-3">
            Submit Event
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EventSubmissionForm; 