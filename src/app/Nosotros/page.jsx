import styles from "../components/header/Header.module.css";
import Header from "../components/header/header";
import style from "./nosotros.module.css";
export default function Nosotros_() {
  return (
    <>
      <Header
        className={styles.imgParallaxNosotros}
        showContent={true}
        title="Quiénes somos"
        subtitle="Conoce más sobre nuestra empresa y valores"
        button="Sobre nosotros"
        link="#Nosotros"
      />
      <main>
        <section id="Nosotros">
          <div className={` ${style.ContainerimgLogo}`}>
            <img src="/img/logo1.png" alt="Logo DataTech" />
          </div>

          <h1 className="text-center mt-5 mb-2 ">
            Apasionados por la tecnología
          </h1>

          <p className={` ${style.parrafoNosotros} `}>
            Somos un equipo de expertos en tecnología con una misión clara:
            ofrecer soluciones de reparación de computadoras confiables, <br />{" "}
            rápidas y asequibles. Creemos en un servicio honesto y en construir
            relaciones duraderas con nuestros clientes.
          </p>

          <div className={`${style.containerElegirnos}`}>
            <h2
              className="mb-3 text-center"
              style={{ fontSize: "2rem" }}
            >
              ¿Por Qué Elegirnos?
            </h2>

            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#6c757d" }}
            >
              Ofrecemos un servicio que va más allá de la simple reparación.
            </p>

            <div className="container mb-5">
              <div className="row align-items-stretch">
                <div className="col-md-4 d-flex ">
                  <div
                    className={`bg-white flex-fill h-100 p-4 shadow-sm card  ${style.Containerimg}`}
                  >
                    <div className={`${style.ContainerIMG} mb-3`}>
                      <img src="/img/iconConfig.png" alt="Técnico" />
                    </div>
                    <h4
                      className="text-center fw-semibold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      Técnicos Certificados
                    </h4>
                    <p
                      className="text-center"
                      style={{ fontSize: "16px", color: "#6c757d" }}
                    >
                      Nuestro equipo está formado por profesionales certificados
                      con años de experiencia en la reparación de todo tipo de
                      hardware.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 d-flex">
                  <div
                    className={`bg-white flex-fill h-100 p-4 shadow-sm card  ${style.Containerimg}`}
                  >
                    <div className={`${style.ContainerIMG} mb-3`}>
                      <img src="/img/rayoicon.png" alt="Rayo" />
                    </div>
                    <h4
                      className="text-center fw-semibold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      Servicio Rápido y Eficiente
                    </h4>
                    <p
                      className="text-center"
                      style={{ fontSize: "16px", color: "#6c757d" }}
                    >
                      Sabemos que tu tiempo es valioso. Ofrecemos diagnósticos
                      rápidos y reparaciones en tiempo récord.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 d-flex">
                  <div
                    className={`bg-white flex-fill h-100 p-4 shadow-sm card  ${style.Containerimg}`}
                  >
                    <div className={`${style.ContainerIMG} mb-3`}>
                      <img src="/img/iconCorazon.png" alt="Corazón" />
                    </div>
                    <h4
                      className="text-center fw-semibold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      Satisfacción Garantizada
                    </h4>
                    <p
                      className="text-center"
                      style={{ fontSize: "16px", color: "#6c757d" }}
                    >
                      No estamos contentos hasta que tú lo estés. Todos nuestros
                      trabajos cuentan con garantía de satisfacción.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


      <div className={` ${style.parallaxNosotros}`} >
        <div  className={` ${style.parallaxOverlay}`} >
          <p>Especialistas en reparación y mantenimiento</p>
        </div>
      </div>


      <div className="container mb-20 ">
        <h2 className="fw-bold mb-4">Nuestro Equipo</h2>
        <p className="text-muted mb-5">
          Detrás de cada reparación hay dedicación, experiencia y pasión por la tecnología.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <img
                  src="img/equipo.jpg"
                  alt="Foto de Simón Etchegno"
                  className="rounded-circle mb-3"
                  width="150"
                  height="150"
                />
                <h4 className="card-title mb-0">Simón Etchegno</h4>
                <p className="text-muted mb-2">Técnico en Computación</p>
                <p className="small text-secondary">
                  Soy Simón Etchegno, técnico en computación de Bahía Blanca. Me dedico a reparar, mantener y optimizar PCs y notebooks, ofreciendo soluciones rápidas, confiables y honestas. Mi objetivo es que cada equipo funcione al máximo y que cada cliente reciba un servicio cercano y profesional.
                </p>
                <div>
                  <a href="#" className="text-dark mx-2">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-dark mx-2">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-dark mx-2">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        </section>
      </main>
    </>
  );
}
