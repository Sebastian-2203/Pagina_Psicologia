import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page">
        <div className="footer-grid">
          <div>
            <div className="footer-mark">
              Un lugar para <span className="accent">respirar</span>, sentir y volver a casa.
            </div>
            <p style={{ marginTop: '1.5rem', color: 'var(--ink-mute)', fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>
              Bogotá · Online &nbsp;·&nbsp; Atendiendo desde 2025
            </p>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/estudio">El estudio</Link></li>
              <li><Link href="/acompanamiento">Acompañamiento</Link></li>
              <li><Link href="/diario">Diario</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4>Acompañamiento</h4>
            <ul>
              <li><Link href="/acompanamiento">Niñez</Link></li>
              <li><Link href="/acompanamiento">Adolescencia</Link></li>
              <li><Link href="/acompanamiento">Adultez</Link></li>
              <li><Link href="/acompanamiento">Familias</Link></li>
              <li><Link href="/acompanamiento">Crisis emocional</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>WhatsApp · +57 302 461 4385</li>
              <li>Instagram · @psicologadanielaortega</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} · Daniela Ortega Higuita ·</span>
          <span>Confidencialidad ética.</span>
        </div>
      </div>
    </footer>
  );
}
