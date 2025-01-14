"use client";

import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import Carousel from "@/components/carrusel";
import Image from "next/image";
import { Providers } from "./providers"; 
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isContactPage = pathname === "/contacto"; 

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers>
          <div>
            <main>{children}</main>
            {!isContactPage && (
              <footer className="w-full items-center justify-center py-3 footer">
                <Carousel />
                <div className="divider"></div>
                <div className="logo-mail-footer">
                  <Image
                    src="/assets/logofooterinter.png"
                    alt="Descripción de la imagen"
                    width={100}
                    height={100}
                  />
                  <div className="mail-inter-container">
                    <h2 className="titulos-footer">Contactate con nosotros</h2>
                    <p className="p-footer2">interpres.ok@gmail.com</p>
                  </div>
                  <div className="seccion-dos-footer">
                    <div className="list-container-foo">
                      <h2 className="titulos-footer">Links</h2>
                      <p className="p-footer">
                        <Link href="/about" className="navbar-link">
                          Sobre Nosotros
                        </Link>
                      </p>
                      <p className="p-footer">
                        <Link href="/cursos" className="navbar-link">
                          Cursos On-line
                        </Link>
                      </p>
                      <p className="p-footer">
                        <Link href="/contacto" className="navbar-link">
                          Contacto
                        </Link>
                      </p>
                    </div>
                    <div className="list-container-foo">
                      <h2 className="titulos-footer">Redes Sociales</h2>
                      <p className="p-footer">
                        <a href="https://www.instagram.com/interpres.ok/" target="_blank" rel="noopener noreferrer">Instagram</a>
                      </p>
                      <p className="p-footer">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a>
                      </p>
                      <p className="p-footer">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            )}
            <div className="ultimalinea">
              <p className="p-footer-ultimo">© 2024 | diseñado por FICA TEAM</p>
              <p className="p-footer-ultimo">Interpres | Todos los derechos reservados</p>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
