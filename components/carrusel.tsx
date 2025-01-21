'use client';

import React from 'react';
import { Link } from '@nextui-org/react';

const logos = [
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
    '/assets/vector.png',
    'Elige Interpres',
    '/assets/vector.png',
    'Elige Calidad',
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
                                {item === 'Elige Interpres' ? (
                                    <>Elige <span className="negrita-c">Interpres</span></>
                                ) : (
                                    <>Elige <span className="negrita-c">Calidad</span></>
                                )}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
