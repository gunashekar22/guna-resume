import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './profile';
import './App.css';
import Toggle from './toggle';
import Education from './education';
import Home from './home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Certification from './certifications.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Projects from './projects.js';

function App() {
  return (
    <Router basename="/guna-resume"> {/* Updated basename here */}
      <Container>
        {/* Row 1 - Toggle */}
        <Row className="mb-4">
          <Col xs={12} lg={12} className="text-center">
            <Toggle />
          </Col>
        </Row>
        
        {/* Row 2 - Globe */}
        <Row className="mb-4">
          <Col xs={12} lg={12}>
            {/* Your globe component or content */}
          </Col>
        </Row>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          {/* Uncomment if you want to use certifications route */}
          {/* <Route path="/certifications" element={<Certification />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes here */}
        </Routes>
      </Container>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
