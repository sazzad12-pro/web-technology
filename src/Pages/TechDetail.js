import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./detail.css";

const TechDetail = ({ tech }) => {
  const { id, name, img, description } = tech;

  return (
    <div>
      <div>
        <Card
          id="animation"
          style={{ width: "16rem", height: "20rem", position: "relative" }}
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              style={{ position: "absolute", bottom: "0px" }}
              variant="primary"
              className="w-75"
            >
              <Link
                className="text-white text-decoration-none"
                to={`/tec/${id}`}
              >
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
