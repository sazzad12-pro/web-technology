import React from "react";
import { ListGroup } from "react-bootstrap";

const TechDetailLayOut = ({ tech }) => {
  const { name } = tech;
  return (
    <div>
      <ListGroup style={{ cursor: "pointer" }}>
        <ListGroup.Item className="mt-3 ">{name}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TechDetailLayOut;
