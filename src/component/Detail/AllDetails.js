import React from "react";
import { useLoaderData } from "react-router-dom";

const AllDetails = () => {
  const alldetailsData = useLoaderData();
  const { id } = alldetailsData;
  return (
    <div>
      <h1> {id}</h1>
    </div>
  );
};

export default AllDetails;
