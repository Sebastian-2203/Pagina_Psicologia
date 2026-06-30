import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { getPostBySlugQuery } from '@/sanity/queries';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

export const revalidate = 60;

// Generar las etiquetas de Redes Sociales (SEO) automáticamente para cada artículo
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.fetch(getPostBySlugQuery, { slug });

  if (!post) return {};

  const ogImage = post.mainImage ? urlForImage(post.mainImage).width(1200).height(630).url() : '/placeholder.jpg';

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://danielaortega.com/diario/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Configuración visual para el texto de Sanity
const components = {
  types: {
    image: ({ value }) => (
      <figure style={{ margin: '3rem 0' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlForImage(value).url()}
          alt={value.alt || 'Imagen del artículo'}
          style={{ width: '100%', borderRadius: '12px', height: 'auto', maxHeight: '70vh', objectFit: 'cover' }}
        />
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>{children}</h3>,
    normal: ({ children }) => <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--ink)' }}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', marginLeft: 0, fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--ink)', margin: '2rem 0' }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
          {children}
        </a>
      );
    },
  },
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await client.fetch(getPostBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    return `${day} de ${month}, ${year}`;
  };

  return (
    <div className="page-transition" style={{ backgroundColor: 'var(--paper)', minHeight: '100vh', paddingBottom: '5rem' }}>
      <article className="page" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '8rem' }}>
        
        <Link href="/diario" style={{ textDecoration: 'none', color: 'var(--ink-mute)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.9rem' }}>
          <span>←</span> Volver al Diario
        </Link>

        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
            {post.category && (
              <span className="mono" style={{ fontSize: '.8rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', backgroundColor: 'rgba(212,175,55,0.1)', padding: '0.4rem 1rem', borderRadius: '4px' }}>
                {post.category}
              </span>
            )}
            <span className="mono" style={{ fontSize: '.8rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
              {post.readTime || '5 min'} de lectura
            </span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--ink)' }}>
            {post.title}
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--ink-mute)', maxWidth: '600px', margin: '0 auto' }}>
            {formatDate(post.publishedAt)}
          </p>
        </header>

        {post.mainImage && (
          <figure style={{ marginBottom: '4rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={urlForImage(post.mainImage).url()} 
              alt={post.title}
              style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'cover', borderRadius: '16px' }}
            />
          </figure>
        )}

        <div style={{ fontSize: '1.125rem', padding: '0 1rem' }} className="portable-text-container">
          <PortableText value={post.body} components={components} />
        </div>
      </article>
      
      {/* Newsletter pequeño al final del artículo */}
      <section style={{ maxWidth: '800px', margin: '6rem auto 0', padding: '3rem 2rem', backgroundColor: 'var(--paper-dark)', borderRadius: '16px' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--ink)' }}>¿Te llegó esta carta y te resonó?</h3>
        <p style={{ marginBottom: '2rem', color: 'var(--ink-mute)' }}>Suscríbete para recibir mis reflexiones mensuales en tu correo.</p>
        <form style={{ display: 'flex', gap: '1rem' }}>
          <input type="email" placeholder="Tu mejor correo..." required style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white' }} />
          <button type="submit" className="btn btn-accent" style={{ padding: '0 2rem' }}>Suscribirme</button>
        </form>
      </section>
    </div>
  );
}
