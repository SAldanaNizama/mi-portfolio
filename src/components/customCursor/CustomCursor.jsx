import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setTrail((prevTrail) => [
        ...prevTrail,
        { x: event.clientX, y: event.clientY, id: Math.random() },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('a, button, input, textarea, select');
    elements.forEach((el) => {
      el.style.cursor = 'none';
    });
  }, []);

  return (
    <>
      <div
        className="custom-cursor fixed bg-blue-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${position.x}px`, top: `${position.y}px`, width: '15px', height: '15px' }}
      />
      {trail.map((t) => (
        <div
          key={t.id}
          className="trail fixed bg-blue-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
          style={{
            left: `${t.x}px`,
            top: `${t.y}px`,
            width: '1rem',
            height: '1rem',
            opacity: 10,
            animation: 'trail-fade 0.5s ease-out forwards',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
