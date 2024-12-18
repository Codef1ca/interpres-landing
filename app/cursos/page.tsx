"use client"
import { CarouselPlugin } from "@/components/carrusel-img1";
import { title } from "@/components/primitives";
import { Navbar as NextUINavbar } from "@/components/navbar2"; 
import CarouselTitulo from "@/components/carrusel-titulo2";
import Image from "next/image";
import { AccordionDemo } from "@/components/acordeon";

export default function CursosPage() {
  return (
    <section className="about-section">
       <NextUINavbar />
      <div className="container-titulo2">
      <h1 className={`${title()} customTitle`}>Nuestros cursos.</h1>
      <p className="parrafo-cursos">Inscríbete a clases on-line sincrónicas y asincrónicas y<br></br> aprende de la mano de profesionales</p>
      </div>
            <div className="foto-curso">
              <Image
                  src="/assets/fotos-cursos.png"
                  alt="Descripción de la imagen"
                  width={1200}
                  height={600}
                />
                </div>
      
      <CarouselTitulo/>
      <div className="contenedor-acordeon">
      <AccordionDemo/>
      </div>
      <div className="contenedor-secciontarjeton">
      <div className="contenedor-tarjeton2">
        <h2 className="titulo-tarjeton2">¿Ya estás inscripto al pack asincrónico?</h2>
        <p className="p-tarjeton2">Agenda tus clases sincrónicas con nuestros profesores<br></br> y despeja todas tus dudas</p>
        <button className="boton-generico2">Agendar mi clase sincrónica</button>
      </div>
      </div>
    </section>

  );
}
