import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Card, CardBody } from 'reactstrap';

const Conferences = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventId: '',
    date: '',
    time: ''
  });

  const [submissions, setSubmissions] = useState([]);
  const [registrationData, setRegistrationData] = useState({
    registeredEventId: '',
    registeredEventName: ''
  });

  const [showRegistration, setShowRegistration] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({
      eventName: '',
      eventId: '',
      date: '',
      time: ''
    });
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setShowRegistration(false);
  };

  const handleShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <Container style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '20px' }}>
      <Row className="justify-content-center">
        <Col md="6" className="bg-white p-4 rounded shadow">
          {!showRegistration && (
            <>
              <h2 className="text-center mb-4">Create Conference</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="eventName">Event Name</Label>
                  <Input
                    type="text"
                    name="eventName"
                    id="eventName"
                    placeholder="Enter event name"
                    value={formData.eventName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="eventId">Event ID</Label>
                  <Input
                    type="text"
                    name="eventId"
                    id="eventId"
                    placeholder="Enter event ID"
                    value={formData.eventId}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

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

                <Button color="primary" type="submit" className="w-100 mt-3">
                  Create Conference
                </Button>
              </Form>
            </>
          )}

          {!showRegistration && (
            <Button 
              color="secondary" 
              className="w-100 mt-3" 
              onClick={handleShowRegistration}
            >
              Register for Conference
            </Button>
          )}

          {showRegistration && (
            <Form onSubmit={handleRegisterSubmit} className="mt-3">
              <FormGroup>
                <Label for="registeredEventId">Event ID</Label>
                <Input
                  type="text"
                  name="registeredEventId"
                  id="registeredEventId"
                  placeholder="Enter Event ID to register"
                  value={registrationData.registeredEventId}
                  onChange={handleRegistrationChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="registeredEventName">Event Name</Label>
                <Input
                  type="text"
                  name="registeredEventName"
                  id="registeredEventName"
                  placeholder="Enter Event Name to register"
                  value={registrationData.registeredEventName}
                  onChange={handleRegistrationChange}
                  required
                />
              </FormGroup>

              <Button color="primary" type="submit" className="w-100 mt-3">
                Register
              </Button>
            </Form>
          )}
        </Col>
      </Row>

      <Row className="mt-5">
        {submissions.map((submission, index) => (
          <Col md="4" className="mb-4" key={index}>
            <Card>
              <CardBody>
                <h5>{submission.eventName}</h5>
                <p>Event ID: {submission.eventId}</p>
                <p>Date: {submission.date}</p>
                <p>Time: {submission.time}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {registrationData.registeredEventId && registrationData.registeredEventName && (
        <Row className="mt-5">
          <Col md="12">
            <Card>
              <CardBody>
                <h5>Registered for Conference</h5>
                <p>Event ID: {registrationData.registeredEventId}</p>
                <p>Event Name: {registrationData.registeredEventName}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Conferences;
