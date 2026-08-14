import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mementos",
  description:
    "Proyecto personal para recordar una de las actividades que realmente disfruto: jugar videojuegos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
