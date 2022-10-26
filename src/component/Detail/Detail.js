import React from "react";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const itemLoad = useLoaderData();
  const { _id, description } = itemLoad;

  return (
    <div>
      <h1>{_id}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Detail;
