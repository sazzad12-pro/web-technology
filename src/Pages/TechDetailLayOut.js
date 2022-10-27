import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const TechDetailLayOut = ({ tech }) => {
  const { id, name } = tech;
  return (
    <div>
      <ListGroup>
        <Link className="text-decoration-none" to={`/tec/${id}`}>
          <ListGroup.Item className="mt-3 list fw-bold">{name}</ListGroup.Item>
        </Link>
      </ListGroup>
    </div>
  );
};

export default TechDetailLayOut;
