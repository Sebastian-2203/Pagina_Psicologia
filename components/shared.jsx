import { motion } from 'framer-motion';

// ----- Shared atoms -----

export function Photo({ src, note, kind = "fotografía editorial", ratio, tight = false, style }) {
  return (
    <div className={"photo" + (tight ? " tight" : "")} style={{ aspectRatio: ratio, ...style }}>
      {src ? (
        <img src={src} alt={kind} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '2px' }} />
      ) : (
        <div className="photo-frame">
          <div className="photo-meta">
            <span>{kind}</span>
            <span>placeholder · 4:5</span>
          </div>
          <div className="photo-note">{note}</div>
          <div className="photo-meta">
            <span>D.O.H</span>
            <span>—</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Eyebrow({ children, accent = false, line = false }) {
  return (
    <div className="hero-eyebrow">
      {line && <span className="line"></span>}
      <span className={"eyebrow" + (accent ? " eyebrow-accent" : "")}>{children}</span>
    </div>
  );
}

export function SectionHead({ num, eyebrow, title, lede, anchor }) {
  return (
    <header className="section-head" id={anchor}>
      <div>
        <div className="eyebrow"><span className="num">{num}</span> &nbsp;/&nbsp; {eyebrow}</div>
      </div>
      <div>
        <h2 className="h2" dangerouslySetInnerHTML={{ __html: title }} />
        {lede && <p className="lede" style={{ marginTop: '1rem' }}>{lede}</p>}
      </div>
    </header>
  );
}

export function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((it, i) => (
          <span key={i}>
            {it} <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ====== FADE IN (ANIMACIÓN SOBRIA) ======
export function FadeIn({ children, delay = 0, duration = 0.8, yOffset = 20, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Toast({ children }) {
  return <div className="toast">{children}</div>;
}
