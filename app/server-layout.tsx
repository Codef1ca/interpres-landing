import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
