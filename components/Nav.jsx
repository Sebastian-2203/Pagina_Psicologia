'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/estudio', label: 'El estudio' },
    { href: '/acompanamiento', label: 'Acompañamiento' },
    { href: '/diario', label: 'Diario' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Inicio">
          <span className="dot"></span>
          <span>Daniela <em style={{ fontStyle: 'italic' }}>Ortega</em></span>
          <small>PSICÓLOGA · COL</small>
        </Link>

        <div className="nav-links" role="menubar">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? 'active' : ''}
            >{l.label}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
          <Link href="/contacto" className="nav-cta">
            <span className="pulse"></span>
            <span>Reservar <span className="long">sesión</span></span>
          </Link>
          <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
            <i></i><i></i><i></i>
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
