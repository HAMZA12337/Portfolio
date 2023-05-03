import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              title="ENSET"
              height="250px"
              description="This application will serve as a communication interface between ENSET students and
              the school counter, thus eliminating student congestion during working hours."
              link="https://github.com/HAMZA12337/Projet-Scolaire-Enset-Mohmmediia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              height="250px"
              isBlog={false}
              title="AZOUL"
              description="The Azoul application is an innovative idea to meet the needs of people who have a curiosity to create relationships and solve their problems in the virtual world."
              link="https://github.com/HAMZA12337/mern-social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              height="270px"
              isBlog={false}
              title="Form_Api"
              description="Is  the concept that  I started:
               weekly challenge, in this example
              Login-form-Using-Fetch-API-Simple-JS-Project"
              link="https://github.com/HAMZA12337/Login-form-Using-Fetch-API-Simple-JS-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              height="250px"
              isBlog={false}
              title="Employee Management"
              description="Give customers and employees an intuitive, 
              self-service portal that provides them with one place to get help fast.
               Easily spin up service desks that fit unique team needs.
                this  Service Management’s knowledge base to respond to and resolve incoming requests faster.

              "
              link="https://github.com/HAMZA12337/gestion-de-conge-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              height="250px"
              isBlog={false}
              title="Peer to Perr"
              description="Build a Zoom Clone with Node JS for Beginners."
              link="https://github.com/HAMZA12337/HAMZAZOOM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              height="230px"
              isBlog={false}
              title="Engine Chat"
              description=", you'll build a full-fledged Firebase Chat Application. With social authentication including Google and Facebook using Fb engine chat, online statuses, great design, and functionality, image support, sound notifications, the ability to create multiple rooms."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
