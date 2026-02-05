import { supabaseServer } from "@/lib/supabaseServer";

export async function POST(req) {
  try {
    const body = await req.json();

    const required = [
      "name",
      "mail",
      "phone",
      "service",
      "date",
      "timeSlot",
      "problemDescription",
    ];

    for (const field of required) {
      if (!body[field]) {
        return Response.json(
          { error: `Falta el campo ${field}` },
          { status: 400 }
        );
      }
    }

    const { error } = await supabaseServer.from("turnos").insert([
      {
        nombre: body.name,
        email: body.mail,
        telefono: body.phone,
        servicio: body.service,
        fecha: body.date,
        horario: body.timeSlot,
        problema: body.problemDescription,
        estado: "pendiente",
      },
    ]);

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Error procesando el request" },
      { status: 500 }
    );
  }
}