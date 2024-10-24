import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const inconsolata = localFont({
  src: "./fonts/Inconsolata.ttf",
  variable: "--primary",
  weight: "100 900",
});
const spaceGrotest = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--secondary",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pokemon Journeys",
  description: "Avance mais na sua aventura pokemon!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inconsolata.variable} ${spaceGrotest.variable} antialiased font-secondary flex flex-col w-full min-h-screen`}
      >
        <Header />
        <main className="bg-[#ffc21c] flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
