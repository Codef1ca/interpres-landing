import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" className="back-menug2" position="static">
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full back-menug2"
        justify="start"
      >
        <NavbarItem className="hidden sm:flex gap-6 item-nav ml-20">
          <Link href="/" className="navbar-link-logo">
            <Image
              src="/assets/logonegrointer.png"
              alt="Descripción de la imagen"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/about" className="navbar-link2">
            Sobre Nosotros
          </Link>
          <Link href="/cursos" className="navbar-link2">
            Cursos On-line
          </Link>
          <Link href="/contacto" className="navbar-link2">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 togle">
        <NavbarMenuToggle />
        <Link href="/" className="navbar-link-logo">
          <Image
            src="/assets/logonegrointer.png"
            alt="Descripción de la imagen"
            width={100}
            height={100}
          />
        </Link>
      </NavbarContent>

      <NavbarMenu className="back-menu">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link href={item.href} className="navbar-link">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
