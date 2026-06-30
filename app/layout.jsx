import { Instrument_Serif, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { DirectionProvider } from '@/components/DirectionProvider';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Daniela Ortega',
    default: 'Daniela Ortega Higuita — Psicóloga',
  },
  description: 'Acompañamiento psicológico para niñas, niños, adolescentes, adultos y familias. Un lugar donde no tienes que estar bien para empezar.',
  openGraph: {
    title: 'Daniela Ortega Higuita — Psicóloga',
    description: 'Acompañamiento psicológico sin juicios ni recetas mágicas.',
    url: 'https://danielaortega.com',
    siteName: 'Daniela Ortega Psicología',
    images: [
      {
        url: '/placeholder.jpg', // Cambiaremos esto cuando subas una foto tuya a public/
        width: 1200,
        height: 630,
        alt: 'Daniela Ortega',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      data-direction="refugio"
      data-density="regular"
      className={`${instrumentSerif.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <DirectionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </DirectionProvider>
      </body>
    </html>
  );
}
