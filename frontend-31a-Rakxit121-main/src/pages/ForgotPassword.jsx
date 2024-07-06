import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send a password reset email
    // For demonstration purposes, let's just show a message
    setMessage(
      `An email has been sent to ${email} with password reset instructions.`
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2>Forgot Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {message && <p className="mt-3">{message}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
