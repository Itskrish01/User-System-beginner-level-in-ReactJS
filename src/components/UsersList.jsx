import React from "react";
import {ListGroup, Container} from 'react-bootstrap'

const UsersList = (props) => {
  return (
    <Container className="mt-5">
    <ListGroup>
        {props.people.map(user => <ListGroup.Item key={Math.random.toString()} variant="primary">{user.name} ({user.age} Years old)</ListGroup.Item>)}
    </ListGroup>
    </Container>
  )
}


export default UsersList;