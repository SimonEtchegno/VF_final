"use client"; // 🔹 necesario para interactividad
import React from "react";
import Header from "../components/header/header";
import styles from "../components/header/Header.module.css";
import stylesContacto from "./contacto.module.css";

export default function Contacto_() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const payload = {
      name: form.get("name"),
      mail: form.get("mail"),
      phone: form.get("phone"),
      service: form.get("service"),
      date: form.get("date"),
      timeSlot: form.get("timeSlot"),
      problemDescription: form.get("problemDescription"),
    };

    // 1) Guardar en Supabase (via tu API de Next)
    const res = await fetch("/api/turnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      alert(data?.error || "Error guardando el turno");
      return;
    }

    // 2) Si guardó OK, armar WhatsApp
    const serviciosMap = {
      reparacion: "Reparación de PCs",
      mantenimiento: "Mantenimiento",
      software: "Instalación de Software",
      cambio_bateria: "Cambio de Batería",
    };

    const servicioLabel = serviciosMap[payload.service] ?? payload.service;

    const mensaje =
`Hola! Quiero solicitar un turno 👨‍💻
👤 Nombre: ${payload.name}
📧 Email: ${payload.mail}
📱 Tel: ${payload.phone}
🛠 Servicio: ${servicioLabel}
🗓 Día: ${payload.date}
⏰ Horario: ${payload.timeSlot}
📝 Problema: ${payload.problemDescription}

✅ Quedo a la espera de confirmación. Gracias!`;

    const numeroWhatsApp = "542923659885"; // tu número sin + y sin espacios
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
    e.target.reset();
  };

  return (
    <>
      <Header
        className={styles.imgParallaxContacto}
        showContent={true}
        title="Contacto"
        subtitle="Conoce más sobre nuestra empresa y valores"
        button="Contáctanos"
      />

      <section className="page-section" id="Contacto">
        <div className="container container__Contact px-4 px-lg-5 mt-50 mb-50">

          {/* Título y descripción */}
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0 titleContacto">Contáctanos</h2>
              <hr className="divider" />
              <p className="text-muted mb-5 contacto_p">
                ¿Querés dejarnos un mensaje? ¡Te vamos a responder lo antes posible! También podés mandarnos un email, llamarnos o hablarnos por Whatsapp.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form name="frmContacto" id="contactForm" onSubmit={handleSubmit}>

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" name="name" placeholder="Nombre y Apellido" required />
                  <label htmlFor="name">Nombre completo</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" name="mail" placeholder="ejemplo@correo.com" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" name="phone" placeholder="(123) 456-7890" required />
                  <label htmlFor="phone">Número de teléfono</label>
                </div>

                <div className="form-floating mb-3">
                  <select className="form-select" id="service" name="service" required>
                    <option value="">Seleccione un servicio</option>
                    <option value="reparacion">Reparación de PCs - $1000</option>
                    <option value="mantenimiento">Mantenimiento - $500</option>
                    <option value="software">Instalación de Software - $800</option>
                    <option value="cambio_bateria">Cambio de Batería - $600</option>
                  </select>
                  <label htmlFor="service">Servicio requerido</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="date"
                    type="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]} // evita fechas pasadas
                    required
                  />
                  <label htmlFor="date">Día para traer la PC</label>
                </div>

                <div className="form-floating mb-3">
                  <select className="form-select" id="timeSlot" name="timeSlot" required>
                    <option value="">Elegí un horario</option>
                    <option value="10:00">10:00</option>
                    <option value="11:30">11:30</option>
                    <option value="15:00">15:00</option>
                    <option value="16:30">16:30</option>
                    <option value="18:00">18:00</option>
                  </select>
                  <label htmlFor="timeSlot">Horario</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="problemDescription"
                    name="problemDescription"
                    placeholder="Describe el problema de tu PC"
                    style={{ height: "120px" }}
                    required
                  />
                  <label htmlFor="problemDescription">Descripción del problema</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary" id="submitButton" type="submit">
                    Solicitar turno
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contacto rápido */}
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div className="contactoNumero">
                <a
                  className={`d-flex align-items-center justify-content-center ${stylesContacto.btnwhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=542923568520"
                >
                  <i className={`bi bi-whatsapp fs-3 me-2 ${stylesContacto.logowhp}`}></i>
                  +54 2923 659885
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="backgroundMap">
          <div className={stylesContacto.containerContacto}>
            <div className="row">
              <div className="col-12">
                <h2 className={stylesContacto.titleDondeEstamos}>¿Dónde Estamos?</h2>
                <hr className="divider" />
                <iframe
                  className={stylesContacto.mapa}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.9535208581347!2d-62.26515322321646!3d-38.71887608630892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda34d2add1675%3A0x992fa4544367f154!2sBelgrano%2093%2C%20B8000%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1757455338774!5m2!1ses!2sar"
                  width="1300"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
