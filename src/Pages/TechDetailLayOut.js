import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const TechDetailLayOut = ({ tech }) => {
  const { id, name } = tech;
  return (
    <div>
      <ListGroup>
        <ListGroup.Item className="mt-3 ">
          {" "}
          <Link to={`/tec/${id}`}>{name}</Link>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TechDetailLayOut;
