import React from "react";
import { Container, Row, Col, ListGroup, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", details: "Markup language for web development" },
        { name: "CSS", details: "Styling web pages with modern techniques" },
        { name: "JS", details: "Building dynamic user interfaces" },
        { name: "React.js", details: "Frontend Frame work for user interface" },
        {name:"web development(without react)",details:"i can develop website without React framework"}
      ]
    },
    {
      category: "Technologies",
      skills: [
        { name: "Git", details: "Version control system" },
        { name: "GitHub", details: "Hosting for version control and collaboration" }
        

      ]
    },
    {
      category: " Backend Development ",
      skills: [
        { name: "Java", details: "Building server-side applications" },
        { name: "JSP", details: "Creating dynamic web content" },
 
    ]
    },
    {
      category: "Other",
      skills: [
        { name: "Data Structures", details: "Understanding of various data structures" }
        
      
      ]
    }
    ,
    {

      category:"Programming Languages",
      skills:[
        {name:"Python" ,details:"used for Dsa and problem solving"},
        {name:"Java", details:"Problem solving"},
        {name:"C",details:"Problem solving"}
        
        

      ]

    }

    
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">My Skills ...</h1>
        </Col>
      </Row>
      {skills.map((skillCategory, index) => (
        <Row key={index} className="mb-4">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">{skillCategory.category}</Card.Title>
                <ListGroup variant="flush">
                  {skillCategory.skills.map((skill, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5>{skill.name}</h5>
                        <small className="text-muted">{skill.details}</small>
                      </div>
                      <Badge bg="secondary" pill>
                        {skill.name.split(' ').length} Skills
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Skills;
