"use client";   
import { useState } from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
       <footer className={styles.footer}>
        <div className="container h-auto w-auto">
            <div className="row">
                <div className="col-lg-12"> 
                    <img className={styles.logoFooter} src="/img/logoFooter.png"  alt="" />
                       <div className={styles.redes}>
                            <a href=""><img className={styles.iconos} src="/img/iconoTel.png" alt="Telefono" /></a>
                            <a href="https://www.facebook.com/"><img className={styles.iconos} src="/img/iconoWhsp.png" alt="Whatsapp" /></a>
                            <a href="https://www.instagram.com/"><img className={styles.iconos} src="/img/iconoIg.png" alt="Instagram" /></a>
                        </div>
                    <p className="text-center">© 2025 Todos los derechos reservados | DataTech. .</p>
                    <p className="text-center">Developed By Simón Etchegno</p>
                    
                </div>

            </div>
        </div>
       </footer>
  );
}