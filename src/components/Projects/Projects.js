import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Plastic Bottle Operated Reverse Vending Machine with Image Processing"
              description="a machine which accepts plastic bottles and convert it into either water or money."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bluetooth Servo Motor with Firebase"
              description="This project is designed for the security of the door that lock and unlock through the use of Bluetooth connections. Its creative door lock is placed at the back or front of the door."
              link="https://z18r.github.io/Cardoza_Joezer_E_Portfolio_2021_Updated_December/bluetoothservomotor/servomotor.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cardoza, Joezer E. Portfolio Using bootstrap"
              description="Portfolio Making. "
              link="https://z18r.github.io/Cardoza_Joezer_E_Portfolio_2021_Updated_December/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=" AmazingPizza2021"
              description="The project is Amazing Pizza using PHP using php/mysql this projects aims to build an simple pizza that user can add and delete with Mysql."
              link="https://github.com/Z18R/AmazingPizza2021"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Java Script Game Interactive, random Number Generator, API(Dog breeds)"
              description="JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive."
              link="https://z18r.github.io/Cardoza_Joezer_E_Portfolio_2021_Updated_December/javapage/javapage.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
