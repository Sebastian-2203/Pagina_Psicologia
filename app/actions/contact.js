'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  try {
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const who = formData.get('who');
    const topic = formData.get('topic');
    const message = formData.get('message');
    const toEmail = process.env.CONTACT_EMAIL_TO;

    if (!toEmail) {
      return { success: false, error: 'Servidor mal configurado: Falta correo de destino.' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Consulta Web <onboarding@resend.dev>', // Dominio de prueba de Resend
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - Consulta Web`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'No proporcionado'}</p>
        <p><strong>Para quién:</strong> ${who || 'No especificado'}</p>
        <p><strong>Tema principal:</strong> ${topic || 'No especificado'}</p>
        <br />
        <h3>Mensaje:</h3>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return { success: false, error: 'No se pudo enviar el correo a través de Resend.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: 'Error interno del servidor.' };
  }
}
