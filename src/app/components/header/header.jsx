import styles from "./Header.module.css";
import 'animate.css';

export default function Header({ className, showContent = true, title, subtitle, button, link }) {
  return (
    <header className={`${styles.imgParallax} ${className || ""}`}>
      {showContent && (
        <div className="relative z-10 flex items-center h-full animate__animated animate__fadeIn">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h1 className="text-5xl font-bold text-white mb-4">{title || "Datatech"}</h1>
            <p className="text-xl text-gray-200 mb-6">{subtitle || "Soluciones tecnológicas para tu PC"}</p>
            
            <a
              href={link || "#Inicio"}
              className=" text-decoration-none inline-block no-underline px-6 py-2 bg-[#311dcf] hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
            >
              {button || "Inicio"}
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
