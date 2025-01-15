"use client";
import { Navbar as NextUINavbar } from "@/components/navbar2"; 

export default function ContactoPage() {
  const message = encodeURIComponent('¡Hola! Vengo de la página web. Me gustaría saber mas información sobre:');
  const phoneNumber = '+5493875773043'; // Reemplaza con el número de teléfono deseado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  const emailLink = 'mailto:interpres.ok@gmail.com';

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
            <h2 className="title2a">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">+54 9 3875 77-3043</a>
            </h2>
            <h2 className="title2a">
              <a href={emailLink}>interpres.ok@gmail.com</a>
            </h2>
          </div>
          <div className="list-container-foo">
            <h2 className="titulos-footer2">Redes Sociales</h2>
            <p className="p-footer-con"><a href="https://www.instagram.com/interpres.ok/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p className="p-footer-con"><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a></p>
            <p className="p-footer-con"><a href="https://www.facebook.com/p/Interpresok-100077385134937/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

