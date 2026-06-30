import { client } from '@/sanity/lib/client';
import { getAllPostsQuery } from '@/sanity/queries';
import DiarioClient from './DiarioClient';

// Opción de revalidación para asegurar que los datos estén frescos en producción (revalida cada 60 segundos)
export const revalidate = 60;

export default async function DiarioPage() {
  // Traer los datos directamente de Sanity
  const posts = await client.fetch(getAllPostsQuery);

  return <DiarioClient posts={posts} />;
}
