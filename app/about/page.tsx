"use client"
import { CarouselPlugin } from "@/components/carrusel-img1";
import { title } from "@/components/primitives";
import { Navbar as NextUINavbar } from "@/components/navbar2"; 
import Image from "next/image";

export default function AboutPage() {
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
        <CarouselPlugin/>
        <div className="text-carrusel">
          <h2 className="propuesta-title2">Aprende idiomas de la mano de<br></br> profesionales</h2>
          <p className="txt-carru-p">Párrafo acerca de los profesores que enseñan en Interpres, haciendo especial hincapié en la importancia de que sus profesores tienen una carrera profesional y certificado de enseñanza, no son nativos enseñando el idioma, sino que cuentan con una formación y herramientas pedagógicas.</p>
          <button className="boton-generico">Quiero más información</button>
        </div>
      </div>

      <div className="contenedor-secciontarjeton">
      <div className="contenedor-tarjeton">
        <h2 className="titulo-tarjeton">Empieza un idioma con nosotros hoy mismo</h2>
        <button className="boton-generico2">Quiero más información</button>
      </div>
      </div>
    </section>

  );
}
