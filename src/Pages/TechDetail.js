import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Button variant="primary" className="w-100">
              <Link className="text-white" to={`/tec${id}`}>
                Read More
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TechDetail;
