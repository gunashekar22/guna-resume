import React, { useState } from 'react';
import "./toggle.css";
import {Link} from "react-router-dom";
import {Row,Col,Container} from "react-bootstrap";

function Toggle() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);//first button click then change false to true and next similar way false to true
    };

    return (
        <>
         <Container>
            <Row>
                <Col>
                
                <nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? (<h1 style={{color:"red"}}>Close</h1>): (<h1 style={{fontStyle:"italic",color:"green"}}>Open Menu</h1>)}
                </button>
                <ul className={isMenuOpen ? 'open' : ''} style={{}} >
                  <li><Link to="/resume"  className="no-underline">Home</Link></li>
                    <li><Link to="/profile"  className="no-underline">Profile</Link></li>
                    <li><Link to="/education"  className="no-underline">Education</Link></li>
                    <li><Link to="/skills"  className="no-underline">Skills</Link></li>
                    {/* <li><Link to="/certifications"  className="no-underline">certifications</Link></li> */}
             
                    <li><Link to="/projects"  className="no-underline">Projects</Link></li>
                    <li><Link to="/contact"  className="no-underline">contact me</Link></li>
                  
                    
                </ul>
            </nav>
                </Col>
            </Row>
         </Container>
        </>
    );
}

export default Toggle;
