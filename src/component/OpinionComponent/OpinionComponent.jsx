import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const OpinionComponent = () => {
  const [selectedRole, setSelectedRole] = useState('generalUser');
  const [opinionText, setOpinionText] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleOpinionChange = (event) => {
    setOpinionText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpinionText('')
    setSelectedRole('General User')

    // Handle the submission of the opinion here.
    // You can send it to the server or perform any other necessary actions.
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className=' fw-bold  mb-4 '>Opinion Section</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Select Your Role:</Form.Label>
              <Form.Control as="select" value={selectedRole} onChange={handleRoleChange}>
                <option value="generalUser">General User</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Opinion:</Form.Label>
              <Form.Control as="textarea" rows={4} value={opinionText} onChange={handleOpinionChange} />
            </Form.Group>
            <Button className='d-block px-5 py-2 btn no-border-radius bg-blue mt-4 ' variant="primary" type="submit">
              Submit Opinion
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OpinionComponent;
