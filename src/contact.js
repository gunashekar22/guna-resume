import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const contactDetails = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/gunashekar2253",
      icon: <Linkedin size={30} />,
      description: "Connect with me on LinkedIn to view my professional profile and network."
    },
    
    {
      platform: "Instagram",
      url: "https://www.instagram.com/_guna_shekar_22/profilecard/?igsh=c3ozbTF1eDBmYTQ4",
      icon: <Instagram size={30} />,
      description: "Check out my Instagram for personal updates and behind-the-scenes moments."
    }
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">Contact Me</h1>
        </Col>
      </Row>
      <Row>
        {contactDetails.map((contact, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>{contact.icon} {contact.platform}</Card.Title>
                <Card.Text>{contact.description}</Card.Text>
                <a href={contact.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit {contact.platform}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;
