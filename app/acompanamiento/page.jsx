'use client';

import Link from 'next/link';
import { Photo, Eyebrow, SectionHead } from '@/components/shared';

const SERVICIOS = [
  {
    num: '01',
    slug: 'ninez',
    title: 'Niñas y niños',
    titleEm: 'niños',
    sub: '3 — 11 años',
    body: 'Acompaño infancias que están aprendiendo a habitar emociones grandes con un vocabulario que apenas alcanza. Trabajo desde el juego simbólico, la psicoeducación y el cuento — porque para un niño, jugar es el lenguaje serio. Las familias son parte del proceso: padres y cuidadores reciben pautas concretas y un espacio propio.',
    src: '/acompanamiento-ninos.png',
    photo: 'Manos pequeñas modelando plastilina sobre papel craft. Top-down, luz natural, colores cálidos.',
    tags: ['Juego terapéutico', 'Regulación temprana', 'Cuento como vehículo', 'Familia involucrada'],
    cuando: ['Ansiedad escolar o separación', 'Berrinches frecuentes / desregulación', 'Cambios familiares (mudanza, separación, duelo)', 'Conductas que preocupan a los padres'],
    como: ['Sesiones de 45 minutos', 'Encuentros mensuales con cuidadores', 'Informes claros sin tecnicismos', 'Coordinación con colegio si es necesario'],
  },
  {
    num: '02',
    slug: 'adolescencia',
    title: 'Adolescentes',
    titleEm: 'Adolescentes',
    sub: '12 — 18 años',
    body: 'Aquí no hay guion adulto, ni moralejas, ni "a tu edad yo…". Lo que cuentas no se reporta a tus padres a menos que tu vida esté en riesgo — y eso te lo explico el primer día con palabras claras. Trabajo con ansiedad, ánimo bajo, identidad, vínculos, redes sociales y crisis. Lo importante: que tengas un lugar tuyo.',
    src: '/acompanamiento-adolescentes.png',
    photo: 'Adolescente sentado de espaldas en escalera urbana mirando hacia la luz del atardecer. Tono cinematográfico, anonimato preservado.',
    tags: ['Confidencialidad real', 'Sin moralejas', 'Crisis e ideación suicida', 'Identidad y vínculos'],
    cuando: ['Ansiedad y ataques de pánico', 'Tristeza persistente / desánimo', 'Conflicto familiar agudo', 'Pensamientos de no querer estar / ideación suicida'],
    como: ['Sesiones de 50 minutos', 'Acuerdo de confidencialidad explícito', 'Protocolo de crisis claro y entrenado', 'Coordinación con familia cuando es seguro hacerlo'],
  },
  {
    num: '03',
    slug: 'adultez',
    title: 'Adultas y adultos',
    titleEm: 'adultos',
    sub: '18+ años',
    body: 'Para quienes ya llevan rato cargando, posponiendo o intentando convencerse de que esto es lo normal. Trabajamos lo cognitivo (qué piensas), lo somático (cómo lo sientes en el cuerpo) y lo relacional (cómo se reparte en tus vínculos). Sin dramatizar, sin minimizar — con método y honestidad.',
    src: '/acompanamiento-adultos.png',
    photo: 'Detalle cinematográfico de manos sobre mesa de madera, tomando té. Suéter de lana. Atardecer entrando por ventana lateral.',
    tags: ['TCC', 'ACT', 'Mindfulness', 'Enfoque integrativo'],
    cuando: ['Ansiedad, estrés y agotamiento', 'Duelo, ruptura, transición vital', 'Patrones relacionales que se repiten', 'Crisis existenciales / sentido'],
    como: ['Sesiones de 50 minutos', 'Procesos de mediana duración (12 — 24 sesiones)', 'Tareas opcionales entre sesiones, no obligatorias', 'Cierre planificado — no un día cualquiera'],
  },
];

export default function AcompanamientoPage() {
  return (
    <div className="page-transition" data-screen-label="Acompañamiento — Servicios">
      <section className="hero serv-hero">
        <div className="page">
          <Eyebrow line>Acompañamiento — Catálogo emocional</Eyebrow>
          <div className="hero-grid">
            <div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, letterSpacing: '-.025em', lineHeight: '.96', fontSize: 'var(--t-h1)', margin: '0 0 1.5rem' }}>
                Tres formas <br />
                de <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>estar contigo</em>.
              </h1>
              <p className="lede" style={{ maxWidth: '44ch' }}>
                No tengo un único método ni un único precio. Tengo tres formas de acompañar — cada una pensada para una etapa distinta. Mira cuál se parece más a la tuya.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'flex-start' }}>
              {SERVICIOS.map(s => (
                <a key={s.slug} href={'#' + s.slug}
                   onClick={(e) => {
                     e.preventDefault();
                     const el = document.getElementById(s.slug);
                     if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                   }}
                   className="entry-readmore"
                   style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', width: '100%', padding: '.85rem 0', borderBottom: '1px solid var(--rule)', color: 'var(--ink)' }}>
                  <span style={{ display: 'flex', gap: '1rem' }}>
                    <span className="mono-small" style={{ color: 'var(--accent)' }}>{s.num}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', letterSpacing: '0' }}>{s.title}</span>
                  </span>
                  <span style={{ color: 'var(--ink-mute)' }}>↓</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS DETALLE ====== */}
      <section className="serv-list" style={{ paddingTop: 0 }}>
        <div className="page">
          {SERVICIOS.map((s) => (
            <article key={s.slug} id={s.slug} className="serv-block">
              <div className="serv-side">
                <Photo src={s.src} note={s.photo} kind={'Acompañamiento · ' + s.title} />
                <div style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--ink-mute)', textTransform: 'uppercase', marginTop: '.5rem' }}>
                  {s.sub}
                </div>
              </div>
              <div>
                <div className="serv-num">{s.num} / 03 — Acompañamiento</div>
                <h2>{s.title.replace(s.titleEm, '')}<em>{s.titleEm}</em></h2>
                <p className="serv-body">{s.body}</p>
                <div className="serv-tags">
                  {s.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="serv-detail">
                  <div>
                    <h4>Cuándo tiene sentido</h4>
                    <ul>
                      {s.cuando.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Cómo trabajamos</h4>
                    <ul>
                      {s.como.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-primary">
                    Reservar — {s.title} <span className="arrow">→</span>
                  </Link>
                  <Link href="/contacto" className="btn btn-ghost">
                    Tengo una duda antes
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


    </div>
  );
}
