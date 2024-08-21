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
              title="CSaR WEBSITE"
              description="CSaR focuses on promoting cultural activities, sports, and cultivating a sense of responsibility among the student community. "
              ghLink="https://github.com/shubham7372/csarwebsite-for-collage-.git"
              demoLink="http://csarcutm.infinityfreeapp.com/?i=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Protfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/shubham7372/protflio_html"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Redbus"
              description="An angular-based web application that allows users to chat in real time.
– redBus is an online bus ticket booking platform enabling users to search, book, and manage bus tickets with functionalities including.
– Technology Used: Angular, Tailwind CSS, JavaScript, CSS, HTML, API."
              ghLink="https://github.com/shubham7372"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Realtime Chat App"
              description="A react-based web application that allows users to chat in real-time.
– design and functionality, icons telling you who read the message, image support, sound notifications, the ability to create
multiple rooms, and much more, this chat app.
– Technology Used: Sockets, Rest APIs, Sending Images, React Hooks, Props, and CSS."
              ghLink="https://github.com/shubham7372"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
