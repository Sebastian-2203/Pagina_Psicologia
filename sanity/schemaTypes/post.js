export const postType = {
  name: 'post',
  title: 'Artículo del Diario',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Resumen (Excerpt)',
      type: 'text',
      description: 'Un par de líneas que aparecerán en la lista principal del Diario.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Tiempo de lectura',
      type: 'string',
      description: 'Ejemplo: "5 min"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Contenido del artículo',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'featured',
      title: 'Artículo Destacado',
      type: 'boolean',
      description: 'Activa esto para que aparezca grande arriba del todo.',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
