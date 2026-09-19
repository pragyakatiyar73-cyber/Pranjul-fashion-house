import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "../components/TopBar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WishlistProvider } from "../context/WishlistContext";

export const metadata: Metadata = {
  title: "Pranjul Fashion House | Fashion Store in Chaubepur, Uttar Pradesh",
  description: "Explore Sarees, Suits, Kurtis, Western Dresses, Formal Wear, and Wedding Collections at Pranjul Fashion House in Chaubepur. Digital fashion catalogue and store inquiry.",
  keywords: ["Pranjul Fashion House", "Chaubepur fashion", "silk sarees", "suits", "kurtis", "lehenga", "Varanasi fashion boutique"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#231815] font-sans antialiased">
        <WishlistProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
