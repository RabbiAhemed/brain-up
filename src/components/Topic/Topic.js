import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Topic.css";
const Topic = ({ topic }) => {
  const { name, total, logo, id } = topic;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} className="img-fluid" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{total}</Card.Text>
          <Link to={`/topic/${id}`}>
            <Button variant="primary">Participate</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topic;
