import React, { useRef, useEffect } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()(globeRef.current)
     .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
     .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
     .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');

    // Animate globe rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5; // Adjust speed here

    // Add sample data (e.g., arcs)
    const arcsData = [...Array(30).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
        ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      ]
    }));

    globe.arcsData(arcsData)
     .arcColor('color')
     .arcDashLength(0.4)
     .arcDashGap(4)
     .arcDashInitialGap(() => Math.random() * 5)
     .arcDashAnimateTime(1000);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black', // Change background color to black
      }}
    >
      <div
        ref={globeRef}
        style={{
          position: 'absolute',
          top: '100px',
          left: 0,
          width: '100%',
   
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10, // Ensure text is above the globe
          textAlign: 'center',
          color: 'white', // White text color for contrast
        }}
      >
        <div style={{ position: 'elative', top: '200px' }}>
          <h1 style={{ margin: 0 }}>Hello!</h1>
          <p style={{ fontSize: '1.5em', margin: '10px 0 0' }}>Welcome</p>
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;