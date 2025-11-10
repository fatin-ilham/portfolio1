import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fatin Ilham | Portfolio",
  description: "Creative developer and AI enthusiast portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-white font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

