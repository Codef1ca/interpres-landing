import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Clases presenciales.</AccordionTrigger>
          <AccordionContent>
            <div className="container-apertura">
              <p className="p1-acordeon">Dictadas para todos los niveles, en la sede de Salta Capital.</p>
              <p className="p2-acordeon"><span className="negrita">Niveles:</span> A1, A2, B1, B2, C1, C2.</p>
              <div className="container-botones">
              <button className="boton-generico22">Quiero más información</button>
              <button className="boton-generico-blanco">Quiero inscribirme</button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Clases on-line sincrónicas</AccordionTrigger>
          <AccordionContent>
          <div className="container-apertura">
              <p className="p1-acordeon">Vas a poder inscribirte y estudiar desde cualquier lugar. Contamos con horarios flexibles, para que armes tu cursada según tus necesidades.
              Los niveles A1 y A2 tienen una duración aproximada de cuatro meses, mientras que el resto de niveles duran diez meses.</p>
              <p className="p2-acordeon"><span className="negrita">Niveles:</span> A1, A2, B1, B2, C1, C2.</p>
              <div className="container-botones">
              <button className="boton-generico22">Quiero más información</button>
              <button className="boton-generico-blanco">Quiero inscribirme</button>
              </div>
          </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Clases on-line asincrónicas</AccordionTrigger>
          <AccordionContent>
          <div className="container-apertura">
              <p className="p1-acordeon">Gestiona tu estudio como gustes. Vas a tener acceso a las clases grabadas de todo el curso y todo el material necesario para llevar el programa sin complicaciones.
              Además, el pack incluye la posibilidad de agendar seis clases sincrónicas con nuestros profesores, para que despejes todas tus dudas durante el curso.</p>
              <p className="p2-acordeon"><span className="negrita">Niveles:</span> A1, A2.</p>
              <div className="container-botones">
              <button className="boton-generico22">Quiero más información</button>
              <button className="boton-generico-blanco">Quiero inscribirme</button>
              </div>
          </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  