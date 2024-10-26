import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';




function Education() {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8} xl={6}>
          <Card className="shadow-lg">
            <Card.Header as="h5" className="bg-dark text-white">
              Education Details
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Level</th>
                    <th>Institution</th>
                    <th>Percentage</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Schooling</td>
                    <td>Catherine High School</td>
                    <td>92%</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Intermediate</td>
                    <td>Tirumala Junior College</td>
                    <td>97%</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>B.Tech</td>
                    <td>Lendi Institute of Engineering and Technology  (CSE)</td>
                    <td>Pursuing...</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;