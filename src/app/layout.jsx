import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Nav";
import Footer from "./components/footer/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
  rel="stylesheet"
/>
      </head>
      <body>
        <Navbar/>
              

        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

