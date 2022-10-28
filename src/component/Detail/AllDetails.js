import React from "react";
import { ListGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const AllDetails = () => {
  const alldetailsData = useLoaderData();
  const { id, name } = alldetailsData;
  return (
    <div className="w-50 mx-auto mt-3">
      <ListGroup>
        <ListGroup.Item> {name}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AllDetails;
