import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulo Leal Muller",
  description:
    "A portfolio of a Software Enginner that name is Paulo Leal Muller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
