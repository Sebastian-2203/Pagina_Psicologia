'use client';

import { useState } from 'react';
import { Photo, Eyebrow, SectionHead } from '@/components/shared';

const FAQ = [
  {
    q: '¿Cuánto dura una sesión y cada cuánto nos vemos?',
    a: 'Las sesiones individuales duran 60 minutos. Las familiares o de pareja, 75 minutos. Habitualmente nos vemos cada semana al comienzo del proceso; con el tiempo el ritmo puede espaciarse. No hay una receta — lo conversamos.',
  },
  {
    q: '¿Atiendes por EPS o seguro?',
    a: 'No estoy vinculada a EPS ni a planes de seguros en este momento. Si tu plan reembolsa terapia psicológica con factura, te entrego la documentación correspondiente al cierre de cada mes.',
  },
  {
    q: '¿Cómo manejas la confidencialidad, sobre todo con adolescentes?',
    a: 'Lo que se conversa en sesión es confidencial. En el caso de menores de edad, los padres reciben una orientación general del proceso, pero los contenidos específicos del adolescente no se comparten — salvo si hay riesgo vital. Te lo explico en detalle el primer día.',
  },
  {
    q: '¿Qué pasa si tengo una crisis fuera del horario de consulta?',
    a: 'Si estás en mi proceso terapéutico activo, tienes un canal de WhatsApp para escribirme. Respondo en horario laboral. Para emergencias inmediatas hay líneas de crisis 24/7 que te entrego en la primera sesión, además de un plan de seguridad personal.',
  },
  {
    q: '¿Y si no estoy segura de que la terapia es para mí?',
    a: 'Eso es exactamente para lo que sirve la primera sesión. Hablamos, te cuento cómo trabajo, me cuentas qué te trae, y al final decides — sin compromiso. A veces el "no aún" también es una respuesta válida.',
  },
  {
    q: '¿Trabajas con un enfoque específico o mezclas varios?',
    a: 'Soy integrativa con base en cognitivo-conductual. Uso herramientas de ACT, mindfulness y compasión según lo que cada persona necesita. Todas con evidencia clínica. Nada de pseudociencia.',
  },
  {
    q: '¿Cuánto vale una sesión?',
    a: 'El valor te lo comparto por WhatsApp o correo según la modalidad y el tipo de acompañamiento. Tengo cupos sociales mensuales para personas que no pueden acceder al valor regular — escríbeme si es tu caso, sin culpa.',
  },
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', who: '', topic: '', message: '', consent: false, urgent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const er = {};
    if (!form.name.trim()) er.name = 'Por favor, escribe tu nombre.';
    if (!form.email.match(/.+@.+\..+/)) er.email = 'Necesito un correo válido para contactarte.';
    if (!form.message.trim() || form.message.trim().length < 12) er.message = 'Cuéntame un poco más, sin afán.';
    if (!form.consent) er.consent = 'Necesito tu consentimiento para responder.';
    setErrors(er);
    
    if (Object.keys(er).length === 0) {
      setLoading(true);
      
      const formData = new FormData();
      Object.keys(form).forEach(k => formData.append(k, form[k]));
      
      try {
        const { sendContactEmail } = await import('@/app/actions/contact');
        const result = await sendContactEmail(formData);
        
        if (result.success) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5500);
          setForm({ name: '', email: '', whatsapp: '', who: '', topic: '', message: '', consent: false, urgent: false });
        } else {
          alert('Hubo un problema enviando el mensaje: ' + result.error);
        }
      } catch (err) {
        alert('Error conectando con el servidor.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="page-transition" data-screen-label="Contacto">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="page">
          <Eyebrow line>Contacto — Estás a una conversación de empezar</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem', alignItems: 'end' }}>
            <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: '.96', letterSpacing: '-.025em', fontSize: 'var(--t-h1)', margin: 0 }}>
              No tienes que tener las palabras <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>exactas</em> todavía.
            </h1>
            <p className="lede">
              Cuéntame en pocas líneas qué te trae. Te respondo en menos de 24 horas hábiles — sin formularios eternos, sin escripts de venta.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FORM + ASIDE ====== */}
      <section>
        <div className="page">
          <div className="contact-grid">
            <form onSubmit={submit}>
              <div className="meta" style={{ marginBottom: '1.5rem' }}>01 — Formulario · todo opcional excepto correo y mensaje</div>

              <div className="field-row" style={{ marginBottom: '1.25rem' }}>
                <div className={"field" + (errors.name ? ' error' : '')}>
                  <label>Tu nombre</label>
                  <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Como te gusta que te llamen" />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>
                <div className={"field" + (errors.email ? ' error' : '')}>
                  <label>Correo</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="ojos.cerrados@correo.com" />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>
              </div>

              <div className="field-row" style={{ marginBottom: '1.25rem' }}>
                <div className="field">
                  <label>WhatsApp (opcional)</label>
                  <input value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} placeholder="+57 300 000 0000" />
                </div>
                <div className="field">
                  <label>¿Para quién es el acompañamiento?</label>
                  <select value={form.who} onChange={e => update('who', e.target.value)}>
                    <option value="">— Selecciona</option>
                    <option>Para mí (adulto / a)</option>
                    <option>Para mi hijo / a (3 — 11 años)</option>
                    <option>Para mi adolescente (12 — 18 años)</option>
                    <option>Para mi familia / pareja</option>
                    <option>Aún no estoy seguro / a</option>
                  </select>
                </div>
              </div>

              <div className="field" style={{ marginBottom: '1.25rem' }}>
                <label>¿Qué tema sientes que pesa más?</label>
                <input value={form.topic} onChange={e => update('topic', e.target.value)} placeholder="Ansiedad, vínculo, crianza, duelo, crisis, otro…" />
              </div>

              <div className={"field" + (errors.message ? ' error' : '')} style={{ marginBottom: '1.5rem' }}>
                <label>Cuéntame en una pequeña carta qué te trae</label>
                <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Sin formato. Escribe como lo dirías en voz alta si pudieras." />
                {errors.message && <div className="field-error">{errors.message}</div>}
              </div>



              <label className={"checkbox" + (errors.consent ? ' error' : '')}>
                <input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} />
                <span>
                  Acepto que Daniela me responda por correo o WhatsApp con información sobre el proceso terapéutico. Mi información se trata con confidencialidad ética según el Código Deontológico del Psicólogo (Ley 1090).
                </span>
              </label>
              {errors.consent && <div className="field-error" style={{ marginTop: '-1rem', marginBottom: '1rem' }}>{errors.consent}</div>}

              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar mensaje'} <span className="arrow">→</span>
                </button>
                <button type="button" className="btn btn-ghost" onClick={() => alert('Abre WhatsApp en una conversación real con texto sugerido.')}>
                  Mejor por WhatsApp
                </button>
              </div>
            </form>

            <aside className="contact-aside">
              <div className="aside-card">
                <h4>WhatsApp — cercano</h4>
                <div className="big"><a href="https://wa.me/573024614385" target="_blank" rel="noopener noreferrer">Escríbeme por WhatsApp <span className="arrow" style={{ color: 'var(--accent)' }}>→</span></a></div>
                <p>Para preguntas, dudas, primera conversación. Lunes a viernes, 8am — 6pm Bogotá. Respuesta en horario hábil.</p>
              </div>


              <div className="aside-card" style={{ background: 'var(--ink)', color: 'var(--bg)', border: '0' }}>
                <h4 style={{ color: 'color-mix(in oklab, var(--bg) 60%, transparent)' }}>Si estás en crisis ahora</h4>
                <div className="big" style={{ color: 'var(--bg)' }}>Llama a línea 106</div>
                <p style={{ color: 'color-mix(in oklab, var(--bg) 78%, transparent)' }}>
                  Línea Distrital de Salud Mental — Bogotá, gratuita, 24/7. Si tu vida está en riesgo inmediato, llama al 123. No es exagerado.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="page">
          <SectionHead num="02" eyebrow="Preguntas frecuentes" title="Lo que la gente <em style='color:var(--accent);font-style:italic'>quiere saber</em> antes de escribir." />
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <div key={i} className={"faq-item" + (openFaq === i ? ' open' : '')}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{f.q}</span>
                  <span className="toggle">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {submitted && <div className="toast">✦ Gracias. Te respondo en menos de 24h hábiles.</div>}
    </div>
  );
}
