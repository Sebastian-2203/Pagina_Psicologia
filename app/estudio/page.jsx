import Link from 'next/link';
import { Photo, Eyebrow, SectionHead } from '@/components/shared';

export const metadata = {
  title: 'El Estudio — Daniela Ortega Higuita',
  description: 'Acompañamiento psicológico con foco en regulación emocional y vínculos.',
};

export default function EstudioPage() {
  return (
    <div className="page-transition" data-screen-label="Estudio — Sobre Daniela">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="page">
          <div className="about-hero">
            <Photo
              src="/estudio-intro.png"
              note="Daniela sirviendo una taza de café en el estudio. Luz de mañana. Sensación de pausa."
              kind="Retrato principal"
            />
            <div>
              <Eyebrow accent>El estudio — Quién soy</Eyebrow>
              <h1>
                Daniela <em>Ortega</em><br />
                Higuita
              </h1>
              <p className="lede" style={{ marginTop: '1.5rem', maxWidth: '40ch' }}>
                Acompañamiento psicológico con foco en regulación emocional y vínculos.
                Atendiendo desde 2017.
              </p>
              <div style={{ display: 'flex', gap: '.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <Link href="/contacto" className="btn btn-primary">
                  Agendar primera sesión <span className="arrow">→</span>
                </Link>
                <Link href="/acompanamiento" className="btn btn-ghost">
                  Ver acompañamientos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LONG TEXT — historia ====== */}
      <section style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="page">
          <div className="long-text">
            <div className="lt-side">
              <div>Carta — Sobre mí</div>
              <div style={{ marginTop: '.4rem', color: 'var(--ink-soft)' }}>Léelo sin prisa</div>
            </div>
            <div className="lt-body">
              <p>
                Mi nombre es Daniela Ortega y soy psicóloga, egresada de la Universidad San Martín y graduada con honores.
              </p>
              <p>
                Desde que tengo memoria, la palabra &ldquo;psicología&rdquo; despertó algo especial en mí. Cuando escuchaba hablar de los psicólogos sentía emoción, curiosidad y una sensación difícil de explicar, como si ese fuera el lugar al que pertenecía. En ese momento no entendía realmente qué hacía un psicólogo, pero con el tiempo comprendí que esa conexión tenía un significado profundo.
              </p>
              <p>
                Por eso, más que sentir que elegí esta profesión, muchas veces pienso que <strong>fue ella quien me eligió a mí</strong>. Ser psicóloga no es solo mi trabajo; es una vocación que vivo con el corazón. Disfruto profundamente acompañar a las personas en sus procesos, ofrecerles un espacio seguro donde puedan sentirse escuchadas, comprendidas y libres de expresar aquello que les duele, les preocupa o simplemente no saben cómo afrontar.
              </p>
              <p>
                Creo que cada persona es un mundo único, con historias, experiencias y desafíos propios. Mi propósito es acercarme a ese mundo con respeto, empatía y sensibilidad, para acompañar a quienes confían en mí a descubrir recursos, construir bienestar y encontrar nuevas formas de afrontar aquello que les genera sufrimiento.
              </p>
              <p>
                Amo aprender, estudiar y seguir creciendo como profesional, porque entiendo que cada persona que llega a consulta me enseña algo nuevo. También comprendo que no somos seres aislados; vivimos en contextos que influyen en nuestras emociones, pensamientos y experiencias. Por eso, <strong>mi trabajo busca mirar a la persona de manera integral</strong>, reconociendo tanto sus fortalezas como las situaciones que están fuera de su control.
              </p>
              <p>
                Hoy sigo sintiendo la misma emoción que sentía cuando era niña al escuchar la palabra &ldquo;psicóloga&rdquo;. Y cada día confirmo que acompañar a otros en su camino es una de las experiencias más significativas y valiosas de mi vida.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--ink)' }}>— Daniela</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FORMACIÓN — TIMELINE ====== */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="page">
          <SectionHead
            num="02"
            eyebrow="Formación — Trayectoria"
            title="Lo que estudié y dónde <em style='color:var(--accent);font-style:italic'>sigo aprendiendo</em>."
          />
          <div className="timeline">
            {[
              { y: '2020–2024', w: 'Pregrado en Psicología', e: 'Fundación Universitaria San Martín — Bogotá', d: 'Mención de Honor por estudiante distinguido. Trabajo de grado laureado por excelencia investigativa.' },
              { y: '2025', w: 'Promoción y Prevención en Salud Mental (60h)', e: 'Universidad del Rosario' },
              { y: '2025', w: 'Atención Integral a Víctimas de Violencias Sexuales (40h)', e: 'Universidad del Rosario' },
              { y: '2025', w: 'Primeros Auxilios en Salud Mental – Cuidado Integral (40h)', e: 'Secretaría Distrital de Salud de Bogotá' },
              { y: 'En curso', w: 'Duelo, cambio y adaptación en la primera infancia', e: 'AeioTU Digital' },
              { y: 'En curso', w: 'Incluir desde la primera infancia: Niños y niñas con discapacidad', e: 'AeioTU Digital' },
            ].map((r, i) => (
              <div className="tl-row" key={i}>
                <div className="year">{r.y}</div>
                <div>
                  <div className="what">{r.w}</div>
                  <div className="where">{r.e}</div>
                  {r.d && <div className="where" style={{ marginTop: '.25rem', fontStyle: 'italic', color: 'var(--accent)' }}>{r.d}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ====== CTA cierre ====== */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="page" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <h2 className="h2">¿Te gustaría una primera <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>conversación</em> sin compromiso?</h2>
          <div>
            <p className="lede" style={{ maxWidth: '40ch', marginBottom: '1.5rem' }}>
              La primera sesión es para conocernos, contarme qué te trae y decidir juntas si tiene sentido seguir. No tienes que tenerlo claro antes.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-primary">Agendar por Calendly <span className="arrow">→</span></Link>
              <Link href="/contacto" className="btn btn-ghost">Escribir por WhatsApp</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
