"use client"
import { CarouselPlugin } from "@/components/carrusel-img1";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="container-titulo">
      <h1 className={`${title()} customTitle`}>Conoce al equipo<br></br> detrás de Interpres.</h1>
      </div>
      <div className="container-carrusel-fotos-txt">
        <CarouselPlugin/>
        <div className="text-carrusel">
          <h2 className="propuesta-title">Aprende idiomas de la mano de<br></br> profesionales</h2>
          <p className="txt-carru-p">Párrafo acerca de los profesores que enseñan en Interpres, haciendo especial hincapié en la importancia de que sus profesores tienen una carrera profesional y certificado de enseñanza, no son nativos enseñando el idioma, sino que cuentan con una formación y herramientas pedagógicas.</p>
          <button className="boton-generico">Quiero más información</button>
        </div>
      </div>

      <div className="contenedor-secciontarjeton">
      <div className="contenedor-tarjeton">
        <h2 className="titulo-tarjeton">Empieza un idioma con nosotros hoy mismo</h2>
        <button className="boton-generico">Quiero más información</button>
      </div>
      </div>
    </section>

  );
}
