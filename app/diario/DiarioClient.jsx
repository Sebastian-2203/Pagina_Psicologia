'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Photo, Eyebrow, FadeIn } from '@/components/shared';
import { urlForImage } from '@/sanity/lib/image';

export default function DiarioClient({ posts }) {
  const [cat, setCat] = useState('Todo');
  
  // Extraer las categorías únicas disponibles en los posts actuales, y añadir 'Todo' al inicio
  const availableCats = ['Todo', ...new Set(posts.map(p => p.category).filter(Boolean))];

  // Filtrar los posts según la categoría seleccionada
  const filtered = posts.filter(e => cat === 'Todo' || e.category === cat);
  
  // Encontrar el post destacado, o el primero si no hay destacados
  const feat = filtered.find(e => e.featured) || filtered[0];
  
  // El resto de los posts
  const rest = filtered.filter(e => e !== feat);

  // Función para formatear fechas de Sanity a algo más amigable (ej: "15 · MAR · 2026")
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${day} · ${month} · ${year}`;
  };

  return (
    <div className="page-transition" data-screen-label="Diario — Blog">
      <section className="dia-hero">
        <div className="page">
          <Eyebrow line>Diario — Cartas abiertas · Lectura sin prisa</Eyebrow>
          <div className="dia-hero-grid">
            <h1>
              Sobre cómo <em>estamos</em>, no sobre cómo deberíamos estar.
            </h1>
            <p className="lede">
              Cartas mensuales que escribo a quienes alguna vez sintieron que su mundo emocional era demasiado grande para nombrarlo. Sin tecnicismos. Sin promesas.
            </p>
          </div>

          <div className="dia-filters" role="tablist">
            {availableCats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cat === c ? 'active' : ''}
              >{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURE ====== */}
      {feat && (
        <section style={{ padding: 0 }}>
          <div className="page">
            <Link href={`/diario/${feat.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="dia-feature">
                {feat.mainImage ? (
                  <Photo src={urlForImage(feat.mainImage).url()} kind="Imagen principal del artículo" />
                ) : (
                  <Photo note="Sin imagen" kind="Sin imagen" />
                )}
                <div>
                  <div className="meta-row">
                    <span className="mono" style={{ fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{feat.category || 'General'}</span>
                    <span className="mono" style={{ fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{formatDate(feat.publishedAt)} · {feat.readTime || '5 min'}</span>
                  </div>
                  <h2>{feat.title}</h2>
                  <p>{feat.excerpt}</p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <button className="btn btn-primary">Leer carta completa <span className="arrow">→</span></button>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* ====== LIST ====== */}
      <section style={{ paddingTop: 0 }}>
        <div className="page">
          <div className="dia-list">
            {rest.map((e, i) => (
              <FadeIn key={i} yOffset={20} delay={i * 0.05}>
                <Link href={`/diario/${e.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <article className="entry" style={{ height: '100%' }}>
                    {e.mainImage ? (
                      <Photo src={urlForImage(e.mainImage).url()} kind={e.category || 'General'} tight />
                    ) : (
                      <div style={{ aspectRatio: '4/3', backgroundColor: 'var(--ink-mute)', opacity: 0.1, borderRadius: '8px' }}></div>
                    )}
                    <div className="entry-meta">
                      <span className="mono-small" style={{ color: 'var(--accent)' }}>{e.category || 'General'}</span>
                      <span className="mono-small" style={{ color: 'var(--ink-mute)' }}>{formatDate(e.publishedAt)}</span>
                      <span className="mono-small" style={{ color: 'var(--ink-mute)' }}>{e.readTime || '5 min'}</span>
                    </div>
                    <h3 className="entry-title">{e.title}</h3>
                    <p className="entry-excerpt">{e.excerpt}</p>
                    <span className="entry-readmore">Leer carta <span>→</span></span>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--ink-mute)' }}>
              Aún no hay artículos publicados. ¡Entra al Studio y crea el primero!
            </div>
          )}
        </div>
      </section>

      {/* ====== NEWSLETTER ====== */}
      <section className="newsletter" style={{ padding: 'clamp(3rem, 5vw, 5rem) 0' }}>
        <div className="page">
          <div className="newsletter-grid">
            <div>
              <h3>¿Te llegó esta carta y te resonó? <em>Suscríbete</em> para recibir la próxima.</h3>
              <p>Una al mes. Sin spam. Sin tracking agresivo. Solo escritura honesta cada primer domingo.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Gracias por suscribirte ✦'); }}>
              <input type="email" placeholder="tu correo, sin spam, lo prometo" required />
              <button className="btn btn-accent" type="submit">Suscribirme</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
