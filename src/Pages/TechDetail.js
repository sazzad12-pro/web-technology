import React from "react";
import { Button, Card } from "react-bootstrap";

const TechDetail = ({ tech }) => {
  const { id, name, img, description } = tech;
  return (
    <div>
      <div>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TechDetail;
