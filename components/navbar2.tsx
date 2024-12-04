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

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" className="back-menug" position="static">
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full back-menug"
        justify="start"
      >
        <NavbarItem className="hidden sm:flex gap-6 item-nav ml-20">
          <Link href="/about" className="navbar-link">
            Sobre Nosotros
          </Link>
          <Link href="/cursos" className="navbar-link">
            Cursos On-line
          </Link>
          <Link href="/contacto" className="navbar-link">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="back-menu">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="navbar-link">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
