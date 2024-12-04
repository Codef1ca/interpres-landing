'use client';

import React, { useState, useEffect } from 'react';

const titles = [
  'Ingles.',
  'Francés.',
  'Español.',
  'Portugues.',
];

const CarouselTitulo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === titles.length) {
          setIsAnimating(false); // Detenemos la animación para el reinicio
          return 0; // Reinicia al índice 0
        }
        return prevIndex + 1;
      });
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Reinicia la animación al cambiar al índice 0
  useEffect(() => {
    if (!isAnimating && currentIndex === 0) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 50); // Vuelve a habilitar la animación después de un pequeño retraso
    }
  }, [currentIndex, isAnimating]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {[...titles, titles[0]].map((title, index) => (
          <div key={index} className="carousel-item">
            {title}
          </div>
        ))}
      </div>
      <p className="propuesta-text">Contamos con clases en todos los niveles, ajustadas a tus necesidades y con la posibilidad de realizar los cursos A1, A2 y B1 de manera on-line, desde tu casa y a tu propio ritmo.</p>
    </div>
  );
};

export default CarouselTitulo;



