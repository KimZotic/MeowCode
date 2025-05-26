import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MeowCode - Topup Game Murah",
  description: "Panel Topup Game Murah dan Laju di Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
