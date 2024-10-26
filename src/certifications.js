import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Bootcamp from "./bootcamp.jpg";
import Ai from "./Aiml.jpg";
import Aws from "./aws.jpg";
import privacy from "./privacy.jpg";
import centric from "./usercentric.jpg";
import fullstackweb3 from "./fullstackweb3.jpg";
import Google from "./google.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Certification() {

  return (
    <Container>

      <Row>
      <h1>My Own Certifications:</h1>
      <center>
     
          <Col key={1} xs={12} sm={6} className="mb-4">
            <Card>
            <Card.Title>Full Stack Block Chain Development</Card.Title>
              <Card.Img variant="top" src={fullstackweb3} style={{width:"100%"}} />
              <Card.Body>
              
                <Card.Text>I have completed full stack Ethereum blockchain development, integrating it with the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
                    This combination allows me to build robust decentralized applications (dApps) that leverage Ethereum's smart contracts and decentralized architecture. 
                    My proficiency extends to using Web3.js for interacting with Ethereum blockchain networks,
                     implementing secure transactions, and developing user-friendly interfaces using React.js. 
                     With a solid understanding of Solidity, Ethereum's smart contract language, 
                     I can design and deploy smart contracts for various decentralized applications </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </center>
       
        </Row>

<Row className="mb-4">
<center>
        <Col xs={12} sm={6} className="mb-4">
          <Card>
            <Card.Title className="text-center mt-3">Bootcamp on Microsoft</Card.Title>
            <Card.Img variant="top" src={Bootcamp} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Text>
                Description for Bootcamp on Microsoft. Mention the details of the bootcamp,
                 the skills you acquired, and any projects or key learnings you had during this experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </center>
      </Row>
   


      <Row className="mb-4">
    <h1> Certifications through my College:</h1>
    <center>
        <Col xs={12} sm={6} className="mb-4">
    
       <Card>
            <Card.Title className="text-center mt-3">AI/ML Certification</Card.Title>
            <Card.Img variant="top" src={Ai} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Text>
                I got certified in AI/ML with the support of my college. This certification covered a wide range of topics including machine learning algorithms, data preprocessing, and neural networks. 
                I also worked on several projects that involved building and deploying AI models.i just got basic knowledge.
              </Card.Text>
            </Card.Body>
          </Card>
  
        </Col>
        </center>
      </Row>

      <Row className="mb-4">
 <center>
 <Col xs={12} sm={6} className="mb-4">
          <Card>
            <Card.Title className="text-center mt-3">AWS Cloud Certification</Card.Title>
            <Card.Img variant="top" src={Aws} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Text>
                I got certified in AWS Cloud with the support of my college. This certification provided me with knowledge on various AWS services, cloud computing concepts, and architecture best practices. 
                I gained hands-on experience with deploying and managing applications on the AWS cloud platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
 </center>
      </Row>

      <Row className="mb-4">
   <center>
   <Col xs={12} sm={6} className="mb-4">
          <Card>
            <Card.Title className="text-center mt-3">Google Certification</Card.Title>
            <Card.Img variant="top" src={Google} style={{ width: "100%" }} />
            <Card.Body>
              <Card.Text>
                I got certified by Google with the support of my college. This certification covered various Google technologies and services, providing me with a solid foundation in using Google Cloud Platform and other tools for developing and deploying applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </center>
      </Row>
    </Container>
  );
}

export default Certification;
