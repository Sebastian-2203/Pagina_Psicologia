export const metadata = {
  title: 'Panel de Administración | Sanity',
  description: 'Gestor de contenidos del Diario',
}

export default function StudioLayout({ children }) {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', width: '100vw' }}>
      {children}
    </div>
  )
}
