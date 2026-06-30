import { groq } from 'next-sanity';

// Traer todos los posts ordenados por fecha de publicación
export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    "category": category->title,
    mainImage,
    featured
  }
`;

// Traer los últimos 3 posts para el home
export const getRecentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    "category": category->title,
    mainImage
  }
`;

// Traer un post individual por su slug
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    "category": category->title,
    mainImage,
    body,
    featured
  }
`;
