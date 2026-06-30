'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Photo, Eyebrow, SectionHead, Ticker, FadeIn } from '@/components/shared';

import { urlForImage } from '@/sanity/lib/image';

export default function HomeClient({ recentPosts = [] }) {
  const [openChapter, setOpenChapter] = useState(null);
  const [nlLoading, setNlLoading] = useState(false);
  const [nlSuccess, setNlSuccess] = useState(false);

  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (nlLoading) return;
    setNlLoading(true);

    const formData = new FormData(e.target);
    try {
      const { subscribeToNewsletter } = await import('@/app/actions/newsletter');
      const result = await subscribeToNewsletter(formData);
      if (result.success) {
        setNlSuccess(true);
        e.target.reset();
        setTimeout(() => setNlSuccess(false), 5000);
      } else {
        alert(result.error || 'Error al suscribirse.');
      }
    } catch (err) {
      alert('Error de conexión.');
    }
    setNlLoading(false);
  };

  const chapters = [
    {
      n: '01',
      title: 'Niñas y niños',
      sub: '3 — 11 años',
      body: 'Acompaño a infancias que están aprendiendo a habitar emociones grandes en cuerpos pequeños. Trabajo desde el juego, la psicoeducación y el vínculo, en un espacio donde sus padres también encuentran herramientas.',
      bullets: ['Regulación emocional temprana', 'Ansiedad y miedos', 'Cambios familiares', 'Acompañamiento a padres'],
    },
    {
      n: '02',
      title: 'Adolescentes',
      sub: '12 — 18 años',
      body: 'Un espacio sin guion adulto, sin moralejas, sin sermones. Aquí lo que sientes es información valiosa, no un problema a corregir. Privacidad real con tu familia.',
      bullets: ['Crisis de identidad', 'Ansiedad y ánimo bajo', 'Vínculos y redes sociales', 'Ideación suicida — atención inmediata'],
    },
    {
      n: '03',
      title: 'Adultas y adultos',
      sub: '18+ años',
      body: 'Para quienes llevan tiempo cargando, posponiendo o normalizando lo que ya pesa demasiado. Trabajamos lo cognitivo, lo somático y lo relacional con honestidad y método.',
      bullets: ['Ansiedad y estrés', 'Duelo, ruptura, transición', 'Patrones que se repiten', 'Bienestar y autoconocimiento'],
    },
  ];

  return (
    <div className="page-transition" data-screen-label="Home — Inicio">
      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="page">
          <Eyebrow line={true}>D · O · H — Acompañamiento psicológico</Eyebrow>

          <FadeIn className="hero-grid">
            <div>
              <h1>
                Aquí no tienes <br /> que estar <em>bien</em><br /> para empezar.
              </h1>
              <p className="hero-sub">
                Acompañamiento psicológico para niñas, niños, adolescentes y adultos.
                Un espacio donde lo que sientes <em style={{ fontStyle: 'italic' }}>no se mide, no se corrige y no se apura</em> — solo se entiende.
              </p>
              <div className="hero-cta">
                <Link href="/contacto" className="btn btn-primary">
                  Reservar primera sesión <span className="arrow">→</span>
                </Link>
                <Link href="/contacto" className="btn btn-ghost">
                  Escribir por WhatsApp
                </Link>
              </div>

              <div className="hero-quote">
                <p style={{ margin: 0 }}>
                  &ldquo;Lo primero que necesitas no es una solución. Es saber que hay alguien dispuesta a escucharte sin apuro.&rdquo;
                </p>
              </div>
            </div>

            <Photo
              src="/home-hero-v2.png"
              note="Composición serena y abstracta. Luz cálida proyectando la sombra suave de una hoja de monstera sobre papel texturizado beige."
              kind="Calma y enfoque"
            />
          </FadeIn>


        </div>
      </section>

      <Ticker items={[
        'Empatía como método', 'Escucha sin guion', 'Espacios emocionalmente seguros',
        'Confidencialidad ética', 'Terapia cognitivo-conductual', 'Tercera generación',
        'Mindfulness aplicado', 'Sin promesas mágicas',
      ]} />

      {/* ====== MANIFESTO ====== */}
      <section className="manifesto">
        <div className="page">
          <FadeIn className="manifesto-grid" yOffset={30}>
            <div>
              <Eyebrow>Manifiesto — 001</Eyebrow>
            </div>
            <div className="body">
              <p>
                La terapia no es un sitio donde te <em>arreglan</em>.
              </p>
              <p>
                Es una conversación honesta, sostenida en el tiempo, con alguien entrenada para no asustarse de lo que tú llevas dentro.
              </p>
              <p>
                Mi trabajo no es darte respuestas rápidas: es estar contigo mientras encuentras las tuyas — con método, con ciencia y, sobre todo, sin juicio.
              </p>

              <div className="signature">
                <span>— Firma</span>
                <span className="name">Daniela Ortega Higuita</span>
                <span>Psicóloga</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== A QUIÉN ACOMPAÑO ====== */}
      <section>
        <div className="page">
          <SectionHead
            num="02"
            eyebrow="A quién acompaño"
            title="Cada edad tiene su forma de <em style='color:var(--accent);font-style:italic'>pedir ayuda</em>. Aprendí a escucharlas todas."
            lede="Trabajo con cuatro grupos. No porque los problemas se parezcan, sino porque la forma de acompañar sí cambia — y eso importa."
          />

          <div className="chapters">
            {chapters.map((c, i) => (
              <div
                key={c.n}
                className="chapter"
                onClick={() => setOpenChapter(openChapter === i ? null : i)}
              >
                <div className="num">{c.n}</div>
                <div>
                  <div className="chapter-title">
                    {c.title}
                    <small>{c.sub}</small>
                  </div>
                </div>
                <div className="chapter-body">
                  <p style={{ margin: '0 0 .8rem' }}>{c.body}</p>
                  <ul>
                    {c.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/acompanamiento" className="btn btn-ghost">
              Ver detalle de cada acompañamiento <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CÓMO TRABAJO ====== */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="page">
          <SectionHead
            num="03"
            eyebrow="Cómo trabajo"
            title="Mi forma de acompañar. Un mismo principio: <em style='color:var(--accent);font-style:italic'>contigo, no sobre ti</em>."
          />
          <FadeIn className="steps" yOffset={40} delay={0.1}>
            <div className="step">
              <div className="step-num">01 — Vínculo</div>
              <h3>Primero la seguridad, después el trabajo.</h3>
              <p>Sin un vínculo terapéutico real, ninguna técnica funciona. Las primeras sesiones son para entender tu historia y construir un lugar emocionalmente seguro donde puedas decir lo que aún no te has dicho.</p>
            </div>
            <div className="step">
              <div className="step-num">02 — Método</div>
              <h3>Cognitivo-conductual, integrativo y de tercera generación.</h3>
              <p>Uso herramientas con evidencia científica: TCC, ACT, mindfulness, regulación emocional y psicoeducación. Ninguna se aplica como receta — se adaptan a quién eres y a lo que estás atravesando.</p>
            </div>
            <div className="step">
              <div className="step-num">03 — Salida</div>
              <h3>El objetivo es que no me necesites.</h3>
              <p>Trabajamos para que aprendas a regularte, a entenderte y a sostenerte por fuera del consultorio. La terapia tiene un comienzo, un medio y un final. Ese final también lo cuidamos.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ====== SPLIT — sobre Daniela teaser ====== */}
      <section style={{ padding: 0 }}>
        <FadeIn className="split" yOffset={20}>
            <Photo
              src="/home-about-v2.png"
              note="Composición editorial serena en un espacio terapéutico. Un sillón de lino cómodo iluminado por la luz dorada del atardecer. Al lado, una pequeña mesa de madera con un cuaderno cerrado y una taza de cerámica."
              kind="El espacio"
            />
          <div className="split-text">
            <Eyebrow accent>Sobre Daniela</Eyebrow>
            <h2 className="h2">No me hice psicóloga para arreglar a nadie. Me hice psicóloga para acompañar.</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.1rem', lineHeight: 1.55, maxWidth: '46ch' }}>
              Elegí esta profesión porque creo en el poder de ser escuchado de verdad.
              Mi espacio terapéutico no es un lugar para que rindas cuentas — es un lugar para que vuelvas a habitarte.
            </p>
            <div>
              <Link href="/estudio" className="btn btn-primary">
                Conocer a Daniela <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ====== DIARIO TEASER ====== */}
      <section>
        <div className="page">
          <SectionHead
            num="04"
            eyebrow="Diario"
            title="Cartas abiertas sobre <em style='color:var(--accent);font-style:italic'>cómo estamos</em>, no sobre cómo deberíamos estar."
            lede="Escribo en un tono cercano sobre ansiedad, vínculos, crianza y los días en que pesa más."
          />
          <div className="diario-grid">
            {recentPosts.map((e, i) => (
              <Link key={i} href={`/diario/${e.slug}`} className="entry" style={{ textDecoration: 'none', color: 'inherit' }}>
                {e.mainImage ? (
                  <Photo src={urlForImage(e.mainImage).url()} kind="Imagen del artículo" tight />
                ) : (
                  <div style={{ aspectRatio: '4/3', backgroundColor: 'var(--ink-mute)', opacity: 0.1, borderRadius: '8px' }}></div>
                )}
                <div className="entry-meta">
                  <span className="mono-small" style={{ color: 'var(--ink-mute)' }}>{e.category || 'General'} · {e.readTime || '5 min'}</span>
                </div>
                <h3 className="entry-title">{e.title}</h3>
                <p className="entry-excerpt">{e.excerpt}</p>
                <span className="entry-readmore">Leer carta <span>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="newsletter" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0' }}>
        <div className="page">
          <div className="newsletter-grid">
            <div>
              <h3>Una vez al mes, una carta sobre lo que <em>realmente</em> nos pasa por dentro.</h3>
              <p>Sin newsletter de &quot;consejos&quot;. Sin guruismo. Solo escritura honesta sobre lo que vemos en consulta — con el consentimiento de quienes la inspiran.</p>
            </div>
            <form className="newsletter-form" onSubmit={submitNewsletter}>
              <input type="email" name="email" placeholder="tu correo, sin spam, lo prometo" required />
              <button className="btn btn-accent" type="submit" disabled={nlLoading}>
                {nlLoading ? 'Suscribiendo...' : 'Suscribirme'}
              </button>
            </form>
            {nlSuccess && <div style={{ marginTop: '1rem', color: 'var(--accent)', fontSize: '.9rem' }}>✦ ¡Gracias por suscribirte!</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
