"use client";

import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { Navbar as NextUINavbar } from "@/components/navbar"; // Asumiendo que este es el componente
import Carousel from "@/components/carrusel";
import Image from "next/image";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about"; // Detectamos si estamos en la página About

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <div>
          {/* Contenedor envolvente que aplica las clases según la página */}
          <div className={isAboutPage ? "bg-white text-pink-500" : "bg-blue-500 text-white"}>
            <NextUINavbar />
          </div>
          <main>{children}</main>
          <footer className="w-full items-center justify-center py-3 footer">
            <Carousel />
            <div className="divider"></div>
            <div className="logo-mail-footer">
              <Image
                src="/assets/logo-footer.png"
                alt="Descripción de la imagen"
                width={100}
                height={100}
              />
              <div className="mail-inter-container">
                <h2 className="titulos-footer">Contactate con nosotros</h2>
                <p className="p-footer2">direccionmail@gmai.com</p>
              </div>
              <div className="seccion-dos-footer">
                <div className="list-container-foo">
                  <h2 className="titulos-footer">Links</h2>
                  <p className="p-footer">Sobre Nosotros</p>
                  <p className="p-footer">Cursos on-line</p>
                  <p className="p-footer">Contacto</p>
                </div>
                <div className="list-container-foo">
                  <h2 className="titulos-footer">Redes Sociales</h2>
                  <p className="p-footer">Instagram</p>
                  <p className="p-footer">Tiktok</p>
                  <p className="p-footer">Facebook</p>
                </div>
              </div>
            </div>
          </footer>
          <div className="ultimalinea">
            <p className="p-footer-ultimo">© 2024 | diseñado por FICA TEAM</p>
            <p className="p-footer-ultimo">Interpres | Todos los derechos reservados</p>
          </div>
        </div>
      </body>
    </html>
  );
}
