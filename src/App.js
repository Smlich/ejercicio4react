import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

function App() {
  const [tarea, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim() !== '') {
      setTaskList([...taskList, tarea]);
      setTask('');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5" >
        <Col md={6}>
          <h1 className='mb-3'>Lista de tareas</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Ingresa una tarea"
                value={tarea}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Agregar tarea
            </Button>
          </Form>
          <ListGroup className="mt-3">
            {taskList.map((tarea, index) => (
              <ListGroup.Item key={index}>{tarea}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;