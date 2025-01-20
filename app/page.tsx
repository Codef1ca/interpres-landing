"use client";

import { CarouselPlugin } from "@/components/carrusel-img1";
import { AccordionDemo } from "@/components/acordeon2";
import { SeparatorDemo } from "@/components/separador";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { Navbar as NextUINavbar } from "@/components/navbar"; // Asumiendo que este es el componente

export default function Home() {
  const message = encodeURIComponent('¡Hola! Vengo de la página web. Me gustaría saber mas información sobre:');
  const phoneNumber = '+5493875773043'; // Reemplaza con el número de teléfono deseado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="home-section">
      <NextUINavbar />
      <div className="hero-home-container">
        <div className="container-maquina">
          <Typewriter
            options={{
              strings: ["Hello!", "Hola!", "Bonjour!", "Olá!"], // Textos en español, francés y portugués
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50, // Velocidad para borrar el texto
            }}
          />
        </div>
        <h2 className="subt-hero">Somos <span className="negrita">Interpres</span>, academia de idiomas</h2>
      </div>

      <div className="container-propuesta">
        <h2 className="propuesta-title">Propuesta académica</h2>
        <p className="propuesta-text">Ofrecemos cursos de idiomas diseñados para todos los niveles.</p>
        <p className="propuesta-text">Nuestros programas están estructurados para ayudarte a desarrollar tus habilidades lingüísticas de manera efectiva y amena, ajustándose a tus tiempos y brindándote completa flexibilidad.</p>
      </div>

      <AccordionDemo />

      <div className="container-carrusel-fotos-txt">
        <CarouselPlugin />
        <div className="text-carrusel">
          <h2 className="propuesta-title">Interpres se adapta a tí</h2>
          <p className="txt-carru-p">Nuestros niveles A1, A2 Y B1 pueden realizarse completamente on-line y desde donde quieras. Con la compra del curso, además de acceder a todo el material grabado, vas a poder agendar clases sincrónicas con nuestros profesores, para despejar todas tus dudas y asegurarte de que tu proceso de aprendizaje sea completo.</p>
          <p className="txt-carru-p">Para los niveles B1, B2, C1 y C2, las clases on-line se toman de forma sincrónica, asegurando que estés siempre acompañado por un profesional en cada una de tus clases. </p>
          <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>Cursos on-line</button>
        </div>
      </div>

      <div className="container-rosa">
        <Image
          src="/assets/fototraduccion.png"
          alt="Descripción de la imagen"
          width={400}
          height={200}
          className="foto-container-rosa"
        />
        <div className="text-carrusel">
          <h2 className="propuesta-title">Traducción legalizada</h2>
          <p className="txt-carru-p">Interpres proporciona traducciones legalizadas certificadas y aceptadas por las autoridades oficiales. Ofrecemos traducciones legalizadas rápidas y rentables y nos aseguramos de que en su proyecto trabajen únicamente traductores matriculados según sus requisitos.</p>
          <div className="container-btn">
            <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
              Contactarme
            </button>
          </div>
        </div>
      </div>

      <div className="container-separador-gestion">
        <div className="text-carrusel">
          <h2 className="propuesta-title">Gestión de visados</h2>
          <p className="txt-carru-p">Ofrecemos gestión de visados a Estados Unidos, tanto de trabajo y estudio como turista. Nos centramos en cada caso particular para brindarte el mejor servicio personalizado y adaptado especialmente a ti y tus necesidades. </p>
          <p className="txt-carru-p">Aceptamos todos los medios de pago y cuotas sin interés.</p>
          <p className="txt-carru-p"><span className="ponteazul">Ponte en contacto con nosotros para más información y agenda una entrevista con nuestros asesores.</span></p>
          <div className="container-btn">
            <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
              Contactarme
            </button>
          </div>
        </div>
        <SeparatorDemo />
      </div>
    </section>
  );
}
