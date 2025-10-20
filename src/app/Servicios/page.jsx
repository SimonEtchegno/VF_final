"use client";
import React from "react";
import Header from "../components/header/header";
import styles from "../components/header/Header.module.css";
import Serviciostyles from "./servicios.module.css";

export default function Servicios() {
  return (
    <>
      <Header
        className={styles.imgParallaxServicios}
        showContent={true}
        title="Nuestros Servicios"
        subtitle="Conoce más sobre lo que ofrecemos"
        button="Servicios"
        link="#Servicios"
      />

<div id="Servicios">

</div>
  <main  className="p-4 text-center" >
  <h1 className="mb-4 mt-5 #servicios">Nuestros Servicios</h1>
  <p className="mb-5">
    Ofrecemos una amplia gama de servicios de reparación y mantenimiento de computadoras.
  </p>

  <div className="container">
    <div className="row g-4 align-items-stretch">
      {/* Card 1 */}
      <div className="col-md-4 d-flex ">
        <div className=" card p-4 rounded shadow bg-light flex-fill">
          <img
            src="/img/iconAntiVirus.png"
            alt="Antivirus"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Eliminación de Virus y Malware</h2>
          <p className="mt-2 text-secondary">
            Eliminamos virus, spyware y malware para restaurar el rendimiento y la seguridad.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 d-flex ">
        <div className=" card p-4 rounded shadow bg-light flex-fill">
          <img
            src="/img/iconHardware.png"
            alt="Hardware"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Actualizaciones de Hardware</h2>
          <p className="mt-2 text-secondary">
            Mejore la velocidad y capacidad de su computadora con actualizaciones de RAM, SSD y tarjetas gráficas.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 d-flex ">
        <div className="card p-4 rounded shadow bg-light flex-fill card">
          <img
            src="/img/iconDatos.png"
            alt="Recuperación de datos"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Recuperación de Datos</h2>
          <p className="mt-2 text-secondary">
            Servicios profesionales para recuperar archivos perdidos o eliminados de discos duros dañados o formateados.
          </p>
        </div>
      </div>

       <div className="col-md-4 d-flex">
        <div className="card p-4 rounded shadow bg-light flex-fill">
          <img
            src="/img/iconRep.png"
            alt="Recuperación de datos"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Reparación de Componentes</h2>
          <p className="mt-2 text-secondary">
            Diagnóstico y reparación de problemas de hardware</p>
        </div>
      </div>

       <div className="col-md-4 d-flex">
        <div className="card p-4 rounded shadow bg-light flex-fill">
          <img
            src="/img/iconSistema.png"
            alt="Recuperación de datos"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Ensamblaje de PCs Personalizadas</h2>
          <p className="mt-2 text-secondary">
            Construimos computadoras a medida para gaming, diseño gráfico o uso profesional, adaptadas a sus necesidades.
          </p>
        </div>
      </div>

       <div className="col-md-4 d-flex">
        <div className="card p-4 rounded shadow bg-light flex-fill">
          <img
            src="/img/iconOptimizacion.png"
            alt="Recuperación de datos"
            className="d-block mx-auto mb-3"
          />
          <h2 className="fs-6 fw-bold">Optimización del Sistema</h2>
          <p className="mt-2 text-secondary">
           Ajustamos y optimizamos su sistema operativo para un arranque más rápido y un rendimiento general superior.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center mt-40">
    <h1 className="fs-3">Nuestro Proceso Simplificado</h1>
    <p className="text-secondary"   >Te mantenemos informado en cada paso del camino para una experiencia transparente y sin estrés.</p>
  </div>

<div className="container mt-20 mb-40">
  <div className="row g-4">
    <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
      <img
        src="/img/1.svg"
        alt="Teléfono"
        className="rounded-circle mb-4 border border-4 border-white shadow"
        style={{ width: "80px", height: "80px" }}
      />
      <h4 className="fs-4 fw-bold">1. Diagnóstico Inicial</h4>
      <p className="text-secondary fs-6">
        Contáctanos y describe tu problema. Ofrecemos un diagnóstico inicial gratuito, ya sea en nuestro taller o de forma remota.
      </p>
    </div>

    <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
      <img
        src="/img/2.svg"
        alt="Teléfono"
        className="rounded-circle mb-4 border border-4 border-white shadow"
        style={{ width: "80px", height: "80px" }}
      />
      <h4 className="fs-4 fw-bold">2. Reparación Experta</h4>
      <p className="text-secondary fs-6">
        Nuestros técnicos certificados utilizan herramientas de última generación para reparar tu equipo de manera eficiente y precisa.
      </p>
    </div>

    <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
      <img
        src="/img/3.svg"
        alt="Teléfono"
        className="rounded-circle mb-4 border border-4 border-white shadow"
        style={{ width: "80px", height: "80px" }}
      />
      <h4 className="fs-4 fw-bold">3. Control de Calidad</h4>
      <p className="text-secondary fs-6">
        Realizamos pruebas exhaustivas para asegurar que tu PC funcione perfectamente antes de devolvértelo. Tu satisfacción es nuestra prioridad.
      </p>
    </div>
  </div>
</div>

</main>
       
    </>
  );
}