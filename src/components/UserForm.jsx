import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();


  const handleClose = () => {
    setError(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError(true);
      setErrorMessage({
        title: "Invalid Input",
        message: "Please Fill the fields before submitting!"
      });
      return;
    }

    if (+age < 0) {
      setError(true);
      setErrorMessage({
        title: "Invalid Age",
        message: "Age must be bigger than 0."
      });
      return;
    }

    props.onAddUser(name, age);
  };

  return (
    <Container>
      {error && (
        <ErrorModal
          show={error}
          onCloseModal={handleClose}
          message={errorMessage.message}
          title={errorMessage.title}
        />
      )}

      <Form className="mt-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Age</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your Age..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UserForm;
