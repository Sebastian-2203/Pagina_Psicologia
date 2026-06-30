import { getCliClient } from 'sanity/cli';
import { createReadStream } from 'fs';

const client = getCliClient();

const posts = [
  { id: 'post-no-es-estres', path: '/Users/sebastian/.gemini/antigravity/brain/d56f242f-e983-4bd9-9cd6-fd30df9a05b1/ansiedad_estres_1780117934840.png' },
  { id: 'post-hija-callada', path: '/Users/sebastian/.gemini/antigravity/brain/d56f242f-e983-4bd9-9cd6-fd30df9a05b1/crianza_silencio_1780117955219.png' },
  { id: 'post-quien-no-elige', path: '/Users/sebastian/.gemini/antigravity/brain/d56f242f-e983-4bd9-9cd6-fd30df9a05b1/vinculos_sillas_1780117969754.png' },
  { id: 'post-adolescente-bien', path: '/Users/sebastian/.gemini/antigravity/brain/d56f242f-e983-4bd9-9cd6-fd30df9a05b1/adolescencia_cuarto_1780117984956.png' },
  { id: 'post-cinco-senales', path: '/Users/sebastian/.gemini/antigravity/brain/d56f242f-e983-4bd9-9cd6-fd30df9a05b1/bienestar_descanso_1780117997808.png' }
];

async function run() {
  for (const post of posts) {
    console.log(`Subiendo imagen para ${post.id}...`);
    try {
      const asset = await client.assets.upload('image', createReadStream(post.path), {
        filename: post.path.split('/').pop()
      });
      
      console.log(`Actualizando documento ${post.id}...`);
      await client.patch(post.id).set({
        mainImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        }
      }).commit();
      
      console.log(`✅ ${post.id} actualizado.`);
    } catch (e) {
      console.error(`❌ Error en ${post.id}:`, e.message);
    }
  }
}

run().catch(console.error);
