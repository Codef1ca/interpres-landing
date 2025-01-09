"use client"
import { Navbar as NextUINavbar } from "@/components/navbar2"; 

export default function ContactoPage() {
  return (
    <section className="contact-section">
       <NextUINavbar />
       <div className="margin-contacto">
       <div className="container1-contacto">
        <h1 className="title-container1">¿Quieres saber más sobre nuestros cursos y servicios?</h1>
        <p className="p-container1">Contáctate con nosotros, estaremos encantados de ayudarte.</p>
       </div>
       <div className="container2-contacto">
        <div className="container-title2">
          <h2 className="title2a">+54 9 3875 77-3043</h2>
          <h2 className="title2a">interpres.ok@gmail.com</h2>
        </div>
        <div className="list-container-foo">
                      <h2 className="titulos-footer2">Redes Sociales</h2>
                      <p className="p-footer-con">Instagram</p>
                      <p className="p-footer-con">Tiktok</p>
                      <p className="p-footer-con">Facebook</p>
        </div>
       </div>
       </div>
    </section>

  );
}
