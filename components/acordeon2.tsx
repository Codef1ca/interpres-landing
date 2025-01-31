import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function AccordionDemo() {
  const message = encodeURIComponent('¡Hola! Vengo de la página web. Me gustaría saber mas información sobre:');
  const phoneNumber = '+5493875773043'; // Reemplaza con el número de teléfono deseado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  
    return (
      <Accordion type="single" collapsible className="w-full container-acordeon">
        <AccordionItem value="item-1" className="item-cont">
          <AccordionTrigger className="itemacordeon2">Inglés.</AccordionTrigger>
          <AccordionContent className="linea">
            <div className="container-apertura">
              <p className="p1-acordeon">Contamos con clases en todos los niveles, ajustadas a tus necesidades y con la posibilidad de realizar los cursos A1, A2 y B1 de manera asincrónica, desde tu casa y a tu propio ritmo.</p>
              <p className="p2-acordeon"><span className="negrita">Planes:</span></p>
              <p className="p2-acordeon">Low cost (1 clase por semana de 1:30hs)</p>
              <p className="p2-acordeon">Regular (2 clases por semana de 1:30hs)</p>
              <p className="p2-acordeon">Intensivo (3 clases por semana de 1:30hs)</p>

              <div className="incorporacion-carru">
                <h2 className="titulo-minero">Inglés Minero</h2>
                <p className="p-minero">Contamos con clases de Inglés <span className="negrita2">Minero</span> en conjunto con la <span className="negrita2">Escuela de Minería</span>,  ajustadas a las demandas del sector minero y con la posibilidad de realizar los cursos A1, A2 y B1 de manera presencial o virtual.</p>
                <div className="items-carru">
                   <Image
                                      src="/assets/logo-cambio1.png"
                                      alt="Descripción de la imagen"
                                      width={100}
                                      height={100}
                  />
                   <Image
                                      src="/assets/logo-cambio2.png"
                                      alt="Descripción de la imagen"
                                      width={100}
                                      height={100}
                                    />
                </div>
              </div>

              <div className="items-carru">
                  <p>Presencial</p>
                  <p>On-line</p>
                </div>
                <div className="container-center">
                  <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
                    Quiero más información
                  </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="item-cont">
          <AccordionTrigger className="itemacordeon2">Francés.</AccordionTrigger>
          <AccordionContent>
            <div className="container-apertura">
              <p className="p1-acordeon">Contamos con clases en todos los niveles, ajustadas a tus necesidades y con la posibilidad de realizar los cursos A1, A2 y B1 de manera asincrónica, desde tu casa y a tu propio ritmo.</p>
              <p className="p2-acordeon"><span className="negrita">Planes:</span></p>
              <p className="p2-acordeon">Low cost (1 clase por semana de 1:30hs)</p>
              <p className="p2-acordeon">Regular (2 clases por semana de 1:30hs)</p>
              <p className="p2-acordeon">Intensivo (3 clases por semana de 1:30hs)</p>
              <div className="items-carru">
                  <p>Presencial</p>
                  <p>On-line</p>
                </div>
                <div className="container-center">
                  <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
                    Quiero más información
                  </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="item-cont">
          <AccordionTrigger className="itemacordeon2">Portugués.</AccordionTrigger>
          <AccordionContent>
            <div className="container-apertura">
              <p className="p1-acordeon">Contamos con clases en todos los niveles, ajustadas a tus necesidades y con la posibilidad de realizar los cursos A1, A2 y B1 de manera asincrónica, desde tu casa y a tu propio ritmo.</p>
              <p className="p2-acordeon"><span className="negrita">Planes:</span></p>
              <p className="p2-acordeon">Low cost (1 clase por semana de 1:30hs)</p>
              <p className="p2-acordeon">Regular (2 clases por semana de 1:30hs)</p>
              <div className="items-carru">
                  <p>On-line</p>
                </div>
                <div className="container-center">
                  <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
                    Quiero más información
                  </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="item-cont">
          <AccordionTrigger className="itemacordeon2">Español.</AccordionTrigger>
          <AccordionContent>
            <div className="container-apertura">
              <p className="p1-acordeon">Contamos con clases en todos los niveles, ajustadas a tus necesidades y con la posibilidad de realizar los cursos A1, A2 y B1 de manera asincrónica, desde tu casa y a tu propio ritmo.</p>
              <p className="p2-acordeon"><span className="negrita">Planes:</span></p>
              <p className="p2-acordeon">Low cost (1 clase por semana de 1:30hs)</p>
              <p className="p2-acordeon">Regular (2 clases por semana de 1:30hs)</p>
              <p className="p2-acordeon">Intensivo (3 clases por semana de 1:30hs)</p>
              <div className="items-carru">
                  <p>Presencial</p>
                  <p>On-line</p>
                </div>
                <div className="container-center">
                  <button className="boton-generico" onClick={() => window.open(whatsappLink, '_blank')}>
                    Quiero más información
                  </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  
  