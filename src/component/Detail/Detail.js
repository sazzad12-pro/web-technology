import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Detail = () => {
  const itemLoad = useLoaderData();
  const { _id, description, img, name } = itemLoad;

  return (
    <div>
      <header>
        <h3 className="text-center mt-1 fw-bold text-success">
          Introduction to Information {name}
        </h3>
      </header>
      <div>
        <Card className="w-75 mx-auto mt-3">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Link to={`/checkout/${_id}`}>
            <Button className="w-100">More Access</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Detail;
