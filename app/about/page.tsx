"use client";

import { CarouselPlugin } from "@/components/carrusel-img2";
import { title } from "@/components/primitives";
import { Navbar as NextUINavbar } from "@/components/navbar2"; 
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const message = encodeURIComponent('¡Hola! Vengo de la página web. Me gustaría saber mas información sobre:');
  const phoneNumber = '+5493875773043'; // Reemplaza con el número de teléfono deseado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="about-section">
      <NextUINavbar />
      <div className="container-titulo">
        <h1 className={`${title()} customTitle`}>Conoce la experiencia<br></br> de estudiar en Interpres.</h1>
      </div>
      <div className="foto-curso">
        <Image
          src="/assets/conoceexperiencia.png"
          alt="Descripción de la imagen"
          width={1200}
          height={600}
        />
      </div>
      <div className="container-carrusel-fotos-txt">
        <CarouselPlugin />
        <div className="text-carrusel2">
          <h2 className="propuesta-title2">Aprende idiomas de la mano de<br></br> profesionales</h2>
          <p className="txt-carru-p2">En Interpres contamos con un equipo de profesionales altamente capacitados. Todos nuestros profesores tienen formación y experiencia en el área pedagógica, especialmente enfocada en la enseñanza de idiomas.</p>
          <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
            Quiero más información
          </button>
        </div>
      </div>

      <div className="container-comentarios">
        <h2 className="comentarios-title1">Nuestros estudiantes<br></br> dicen de nosotros</h2>
        <div className="container-card">
        <Link href="https://instagram.com/reel/C8tBLU1Bw3b/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/card-coment-1.png"
            alt="Descripción de la imagen"
            width={300}
            height={1100}
            className="card-medio2"
          />
        </Link>
        <Link href="https://www.instagram.com/reel/C_sgKj8xAUk/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/card-coment-2.png"
            alt="Descripción de la imagen"
            width={300}
            height={1100}
            className="card-medio"
          />
        </Link>
        <Link href="https://www.instagram.com/reel/DA4FZyqxTzO/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/card-coment-3.png"
            alt="Descripción de la imagen"
            width={300}
            height={1100}
            className="card-medio2"
          />
        </Link>

        </div>
      </div>


      <div className="contenedor-secciontarjeton">
        <div className="contenedor-tarjeton">
          <h2 className="titulo-tarjeton">Empieza un idioma con nosotros hoy mismo</h2>
          <button className="boton-generico2" onClick={() => window.open(whatsappLink, '_blank')}>
            Quiero más información
          </button>
        </div>
      </div>
    </section>
  );
}

