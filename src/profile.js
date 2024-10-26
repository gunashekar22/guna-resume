import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
 // Uncomment and update the path to your profile image
import "./profile.css";
import guna_pic from './guna_pic.jpg';
const Profile = () => {
  return (
<div className='profile'>

<Container className="my-5" style={{"padding":"50px 50px 50px 50px"}}>
    
      
    <Card className="p-3 shadow-lg" style={{ transition: 'transform 0.2s' }}>
      <Card.Body>
        <div className="text-center">
<center>    <Image  src={guna_pic}   className="mb-3" style={{  width: '150px',height: '150px',
borderRadius:"50%",
              objectFit: 'cover',
              border: '5px solid #ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          /></center>
        </div>
        <Card.Title className="text-center">
       <center>   
          <h1>GunaShekar Undabatla</h1>
       
       
       </center>
        </Card.Title>
        <Card.Text className="text-center mb-3">
    <center>  
      <p><strong>Date of Birth:</strong> May 22 2003</p>
    
     <p><strong>email:</strong>undabatlagunashekar25253@gmai.com</p>
     <p><strong>Phone:</strong>8106697168</p>
    
    </center>
        </Card.Text>
        <Card.Text>
          <h5>Summary</h5>
          <p>
          Aspiring Java Developer with a foundational understanding of Java programming, object-oriented principles, and basic software development practices. Skilled in writing clean, efficient, and well-documented code and eager to apply and expand my knowledge in a professional setting. Familiar with core Java libraries, basic data structures, algorithms, and commonly used tools like Git and IDE (Eclipse). Motivated to learn, grow, and contribute to team success through continuous learning and hands-on experience.
          </p>
          <p>
            I pride myself on my creative thinking and problem-solving skills, which I apply to develop innovative solutions. My goal is to contribute to impactful projects and collaborate with like-minded professionals in the tech industry.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>


</Container>
</div>
  );
};

export default Profile;
