'use client'

const logos = [
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Interpres',

  ];
  
  const Carousel = () => {
    return (
        <div className="carousel">
            <div className="track">
                {logos.map((item, index) => (
                    <div key={index} className="carousel-item2">
                        {typeof item === 'string' && item.startsWith('/assets/') ? (
                            <img src={item} alt={`Logo ${index + 1}`} className="logo2" />
                        ) : (
                            <p className="txt-carru">
                            Elige <span className="negrita-c">Interpres</span>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;