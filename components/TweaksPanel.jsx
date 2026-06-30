'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDirection } from './DirectionProvider';

const DIRECTIONS = [
  { id: 'refugio', label: 'Refugio',
    desc: 'Cálido editorial · terracota, papel, lino.',
    swatch: ['#f1ebde', '#c7421d', '#1a1612'] },
  { id: 'pulso', label: 'Pulso',
    desc: 'Editorial pop · fucsia, blanco, verde profundo.',
    swatch: ['#fbfaf6', '#e0306e', '#1f4a36'] },
  { id: 'casa', label: 'Casa',
    desc: 'Nocturno íntimo · ámbar, refugio, luz cálida.',
    swatch: ['#161310', '#f0a04a', '#d6603a'] },
];

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2}
  .twk-fab{position:fixed;right:16px;bottom:16px;z-index:2147483645;width:36px;height:36px;
    border-radius:50%;border:0;background:rgba(41,38,27,.85);color:#fff;
    font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 14px rgba(0,0,0,.25);
    -webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);
    transition:transform .15s ease,box-shadow .15s ease}
  .twk-fab:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,.3)}
`;

// --- DirectionPicker ---
function DirectionPicker({ value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {DIRECTIONS.map(d => (
        <button
          key={d.id}
          onClick={() => onChange(d.id)}
          style={{
            display: 'grid', gridTemplateColumns: '36px 1fr', gap: 8, alignItems: 'center',
            padding: '7px 8px', border: '1px solid ' + (value === d.id ? '#29261b' : 'rgba(0,0,0,.1)'),
            background: value === d.id ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.45)',
            borderRadius: 8, cursor: 'pointer', textAlign: 'left',
            transition: 'all .15s ease',
          }}
        >
          <div style={{ display: 'flex', height: 22, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(0,0,0,.08)' }}>
            {d.swatch.map(c => <div key={c} style={{ flex: 1, background: c }} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <span style={{ fontWeight: 600, fontSize: 11.5, color: '#29261b' }}>{d.label}</span>
            <span style={{ fontSize: 10, color: 'rgba(41,38,27,.55)', lineHeight: 1.3 }}>{d.desc}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

// --- DensityRadio ---
function DensityRadio({ value, onChange }) {
  const options = ['cozy', 'regular', 'airy'];
  const idx = Math.max(0, options.indexOf(value));
  const n = options.length;

  return (
    <div className="twk-row">
      <div className="twk-lbl"><span>Densidad</span></div>
      <div className="twk-seg" role="radiogroup">
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {options.map(o => (
          <button key={o} type="button" role="radio" aria-checked={o === value}
                  onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- PageJumper ---
function PageJumper() {
  const pathname = usePathname();
  const pages = [
    { href: '/', label: 'Inicio' },
    { href: '/estudio', label: 'El estudio' },
    { href: '/acompanamiento', label: 'Acompañamiento' },
    { href: '/diario', label: 'Diario' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
      {pages.map(p => (
        <Link key={p.href} href={p.href} style={{
          padding: '6px 8px', borderRadius: 6, textDecoration: 'none',
          border: '1px solid ' + (pathname === p.href ? '#29261b' : 'rgba(0,0,0,.1)'),
          background: pathname === p.href ? '#29261b' : 'rgba(255,255,255,.55)',
          color: pathname === p.href ? '#fff' : '#29261b',
          fontSize: 10.5, fontWeight: 500, letterSpacing: '.01em', cursor: 'pointer',
          textAlign: 'center',
        }}>{p.label}</Link>
      ))}
    </div>
  );
}

// --- TweaksPanel ---
export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const { direction, setDirection, density, setDensity } = useDirection();

  return (
    <>
      <style>{__TWEAKS_STYLE}</style>

      {!open && (
        <button
          className="twk-fab"
          onClick={() => setOpen(true)}
          aria-label="Abrir panel de ajustes"
          title="Tweaks"
        >
          ⚙
        </button>
      )}

      {open && (
        <div className="twk-panel">
          <div className="twk-hd">
            <b>Tweaks</b>
            <button className="twk-x" aria-label="Cerrar tweaks"
                    onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="twk-body">
            <div className="twk-sect">Dirección visual</div>
            <DirectionPicker value={direction} onChange={setDirection} />

            <div className="twk-sect">Aire entre secciones</div>
            <DensityRadio value={density} onChange={setDensity} />

            <div className="twk-sect">Navegar</div>
            <PageJumper />
          </div>
        </div>
      )}
    </>
  );
}
