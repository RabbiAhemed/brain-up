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
      <div className="topic-card text-center">
        <div>
          <img src={logo} className="img-fluid image " alt="" />
        </div>
        <div className="p-5">
          <h4 className="fw-bold">{name}</h4>
          <p className="question text-dark text-muted">{total} questions</p>
          <Link to={`/topic/${id}`}>
            <Button className="info text-white fw-bold d-flex align-items-center justify-content-space-around mx-auto">
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
