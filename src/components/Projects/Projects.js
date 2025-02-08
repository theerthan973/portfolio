import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sorting from "../../Assets/Projects/sorting.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorting}
              isBlog={false}
              title="Sorting visualizer"
              description="A visualizer tool to demonstrate various sorting algorithms such as Bubble Sort, Merge Sort, Quick Sort, and more, built using python libraries. It allows users to visualize the sorting process step-by-step, with customizable input size, speed, and algorithm selection."
              ghLink="https://github.com/theerthan973/sorting-simulator"
              demoLink="null"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
