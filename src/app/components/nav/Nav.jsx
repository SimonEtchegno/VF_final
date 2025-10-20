"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`${styles.nav}`}>
      <Link href="/" className={styles.logoContainer}>
        <img src="/img/logo1.png" alt="Logo" className={styles.logo} />
      </Link>

      {/* Botón hamburguesa */}
      <button
        className={`${styles.hamburger}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <span className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></span>
      </button>

      {/* Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/" className={styles.link}>Inicio</Link>
        </li>
        <li>
          <Link href="/Nosotros" className={styles.link}>Nosotros</Link>
        </li>
        <li>
          <Link href="/Servicios" className={styles.link}>Servicios</Link>
        </li>
        <li>
          <Link href="/Contacto" className={styles.link}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
