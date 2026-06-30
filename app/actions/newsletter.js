'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(formData) {
  try {
    const email = formData.get('email');
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      return { success: false, error: 'Falta configurar el ID de la audiencia en el servidor.' };
    }

    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });

    if (error) {
      console.error(error);
      // Ignoramos si el usuario ya existe en la lista para no dar errores confusos
      if (error.name === 'validation_error' && error.message.includes('already exists')) {
        return { success: true };
      }
      return { success: false, error: 'Hubo un error al guardar tu suscripción.' };
    }

    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: 'Error interno del servidor.' };
  }
}
