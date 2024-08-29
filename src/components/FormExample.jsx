import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Row className="justify-content-center">
            <Col md={3} className="text-end">
              
            </Col>
            <Col md={6} className="w-auto">
              <Form.Control
                required
                type="text"
                placeholder="Enter Name"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Row className="justify-content-center">
            <Col md={3} className="text-end">
              
            </Col>
            <Col md={6} className="w-auto">
              <Form.Control
                required
                type="text"
                placeholder="Brand name"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Row className="justify-content-center">
            <Col md={3} className="text-end">
            
            </Col>
            <Col md={6} className="w-auto">
              <Form.Control
                type="text"
                placeholder="Enter the issue with the device"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid problem.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Row className="justify-content-center">
            <Col md={3} className="text-end">
              
            </Col>
            <Col md={6} className="w-auto">
              <Form.Control type="text" placeholder="Job Number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Row className="justify-content-center">
            <Col md={3} className="text-end">
              
            </Col>
            <Col md={6} className="w-auto">
              <Form.Control type="text" placeholder="Phone Number" />
            </Col>
          </Row>
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-center">
        <Button type="submit">Submit form</Button>
      </div>
    </Form>
  );
}

export default FormExample;
