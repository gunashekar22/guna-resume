import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const projects = [
    {
      title: "Amazon Wesite",
      url: "https://gunashekar22.github.io/AMAZON_WEBSITE/index.html",
      description: "Replicated Amazon Website by using the following Technologies-HTML,CSS,JS and accepted data from an API call "
    },
    {
      title: "Rock Paper Scissors",
      url: "https://gunashekar22.github.io/Stone-Paper-Scissor/",
      description: "Online Game that can play by human vs Computer and auto play with computer.This is done by using following Technologies-HTML,CSS,JS"
    },
    {
      title: "TODO list",
      url: "https://gunashekar22.github.io/TODO/",
      description: "Its an application which creates a TODO list.Once that task is completed we can delete from the TODO list."
    },
    
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">My Projects</h1>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto align-self-center"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
