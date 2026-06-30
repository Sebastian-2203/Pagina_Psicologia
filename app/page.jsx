import { client } from '@/sanity/lib/client';
import { getRecentPostsQuery } from '@/sanity/queries';
import HomeClient from './HomeClient';

export const revalidate = 60;

export default async function HomePage() {
  // Traer los 3 artículos más recientes desde Sanity
  const recentPosts = await client.fetch(getRecentPostsQuery);

  return <HomeClient recentPosts={recentPosts} />;
}
