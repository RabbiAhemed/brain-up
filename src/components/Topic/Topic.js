import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Topic = ({ topic }) => {
  const { name, total, logo, id } = topic;

  return (
    <div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} className="img-fluid image" />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-muted font-italic fw-bold">
            Total {total} questions
          </Card.Text>
          <Link to={`/topic/${id}`}>
            <Button variant="info text-white fw-bold">Participate</Button>
          </Link>
        </Card.Body>
      </Card> */}
      <div className="topicCard text-center">
        <div>
          <img src={logo} className="img-fluid image " alt="" />
        </div>
        <div className="p-5">
          <h4 className="fw-bold">{name}</h4>
          <p>{total} question</p>
          <Link to={`/topic/${id}`}>
            <Button className="info text-white fw-bold d-flex align-items-center justify-content-space-around m-2">
              Participate
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
