import React from "react";
import { useLoaderData } from "react-router-dom";
import TechDetail from "./TechDetail";
import "./tech.css";
import { Col, Container, Row } from "react-bootstrap";
import TechDetailLayOut from "./TechDetailLayOut";

const Tech = () => {
  const technology = useLoaderData();
  console.log(technology);

  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col className="tech-container" lg={9}>
            {technology.map((tech) => (
              <TechDetail key={tech.id} tech={tech}></TechDetail>
            ))}
          </Col>
          <Col className="border  " lg={3}>
            {technology.map((tech) => (
              <TechDetailLayOut key={tech.id} tech={tech}></TechDetailLayOut>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tech;
