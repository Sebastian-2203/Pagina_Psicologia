import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6aa0s4lb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// ====== CATEGORÍAS ======
const categories = [
  { _type: 'category', title: 'Ansiedad', description: 'Artículos sobre ansiedad, estrés y regulación emocional.' },
  { _type: 'category', title: 'Crianza', description: 'Herramientas para madres, padres y cuidadores.' },
  { _type: 'category', title: 'Vínculos', description: 'Sobre relaciones, apego y patrones relacionales.' },
  { _type: 'category', title: 'Adolescencia', description: 'Para adolescentes y quienes los acompañan.' },
  { _type: 'category', title: 'Bienestar', description: 'Autocuidado, autoconocimiento y salud mental.' },
];

// ====== ARTÍCULOS ======
const posts = [
  {
    title: 'No es estrés: es tu cuerpo pidiéndote pausa',
    slug: 'no-es-estres-es-tu-cuerpo-pidiendote-pausa',
    excerpt: 'Llamar "estrés" a lo que sientes es minimizarlo. Tu sistema nervioso lleva tiempo intentando hablarte. Aquí, cómo empezar a escucharlo.',
    readTime: '6 min',
    publishedAt: '2026-05-25T10:00:00Z',
    categoryTitle: 'Ansiedad',
    featured: true,
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hay una diferencia enorme entre estar estresada y vivir en un estado permanente de alerta. La primera es una respuesta natural del cuerpo ante una demanda puntual. La segunda es tu sistema nervioso diciéndote, con todos los recursos que tiene, que algo necesita cambiar.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Tu cuerpo habla antes que tú' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Antes de que puedas nombrar lo que sientes, tu cuerpo ya lo está expresando. El nudo en la garganta que aparece sin aviso. El insomnio que no responde a melatonina. La mandíbula apretada al despertar. Las manos frías en pleno calor. Eso no es "estrés". Eso es tu sistema nervioso autónomo activando su modo de supervivencia.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'En consulta, muchas personas llegan diciendo "es que soy muy estresada" como quien dice "es que soy alta" — como si fuera un rasgo fijo, inmodificable. Pero la ansiedad crónica no es un rasgo de personalidad. Es una señal.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'La ventana de tolerancia' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Existe un concepto en neuropsicología llamado "ventana de tolerancia". Es la zona en la que puedes funcionar con relativa calma: pensar con claridad, responder en vez de reaccionar, estar presente. Cuando vives fuera de esa ventana — por arriba (hiperactivación: ansiedad, irritabilidad, taquicardia) o por abajo (hipoactivación: desconexión, fatiga, apatía) — tu cuerpo no está fallando. Está protegiéndote de algo que percibe como amenaza.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'El trabajo terapéutico no es eliminar la ansiedad. Es ampliar esa ventana. Es aprender a reconocer cuándo saliste de ella y tener herramientas reales — no tips de Instagram — para volver.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Tres preguntas para empezar a escucharte' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'No necesitas un diagnóstico para empezar a prestar atención. Puedes empezar con estas tres preguntas:' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: '1. ¿Cuándo fue la última vez que descansé sin culpa?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: '2. ¿Estoy respondiendo desde la calma o reaccionando desde el miedo?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: '3. ¿Mi cuerpo se siente seguro en este momento?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Si alguna de estas preguntas te generó un nudo, eso también es información. No la ignores.' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'No necesitas tocar fondo para pedir ayuda. A veces, lo más valiente es detenerse antes de caer.' }] },
    ],
  },
  {
    title: 'Lo que tu hija no te dice cuando se queda callada',
    slug: 'lo-que-tu-hija-no-te-dice-cuando-se-queda-callada',
    excerpt: 'El silencio rara vez es ausencia de palabras. A veces es la única forma que encontró de protegerse mientras descubre cómo nombrarlo.',
    readTime: '8 min',
    publishedAt: '2026-05-18T10:00:00Z',
    categoryTitle: 'Crianza',
    featured: false,
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cuando una niña se queda callada, la reacción más frecuente de los adultos es preguntar "¿qué te pasa?". Y cuando la respuesta es "nada", solemos creerle — o peor, insistir hasta que se cierre más. Pero ese silencio no es vacío. Está lleno de cosas que aún no tienen nombre.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'El silencio como refugio' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Las infancias no siempre tienen las palabras para nombrar lo que sienten. No porque no sientan — sienten todo, y con una intensidad que los adultos a veces olvidamos — sino porque el lenguaje emocional se construye con el tiempo, y necesita un espejo seguro para desarrollarse.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Ese espejo eres tú. Y no tiene que ser perfecto. Solo tiene que estar disponible.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Qué hacer (y qué no) cuando llega el silencio' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'No fuerces la conversación.' }, { _type: 'span', text: ' Puedes abrir la puerta sin empujarla. Un "estoy aquí cuando quieras hablar" pesa más que veinte preguntas seguidas.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Ofrece presencia, no soluciones.' }, { _type: 'span', text: ' A veces lo que tu hija necesita no es que le resuelvas algo, sino que te sientes a su lado sin necesidad de llenar el silencio.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Valida lo que sientes tú también.' }, { _type: 'span', text: ' Decir "a mí también me pasan cosas que no sé cómo contar" le enseña que las emociones difíciles son humanas, no defectos.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Cuándo buscar acompañamiento' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Si el silencio se acompaña de cambios en el sueño, la alimentación, el juego o las relaciones con pares, puede ser momento de buscar acompañamiento profesional. No porque algo esté "mal", sino porque a veces las niñas necesitan un espacio neutro — fuera de casa, fuera de la escuela — donde puedan ensayar sus emociones sin miedo a decepcionar a nadie.' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'El mejor regalo que le puedes dar a tu hija no es tener todas las respuestas. Es que sepa que contigo puede tener todas las preguntas.' }] },
    ],
  },
  {
    title: 'Por qué siempre eliges a quien no te elige',
    slug: 'por-que-siempre-eliges-a-quien-no-te-elige',
    excerpt: 'No es coincidencia ni mala suerte. Es un mapa relacional aprendido — y se puede redibujar, aunque cueste un tiempo.',
    readTime: '7 min',
    publishedAt: '2026-05-10T10:00:00Z',
    categoryTitle: 'Vínculos',
    featured: false,
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hay personas que llegan a consulta con una frase que se repite como un eco: "Siempre me pasa lo mismo". Y cuando empezamos a mirar con cuidado, descubrimos que no es que la vida les ponga personas difíciles en el camino. Es que hay algo en su brújula interna que las lleva hacia lo conocido — aunque lo conocido duela.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'El mapa que heredaste' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Nuestros primeros vínculos nos enseñan qué esperar del amor. Si creciste en un hogar donde el cariño venía con condiciones, donde había que ganarse la atención o donde el afecto era impredecible, tu sistema nervioso aprendió que "amor" se siente así: incierto, intermitente, difícil de alcanzar.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Y cuando de adulta conoces a alguien que te ofrece estabilidad, algo dentro de ti dice: "esto no se siente como amor". Porque tu cuerpo confunde la calma con el aburrimiento y la ansiedad con la pasión.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Reconocer el patrón no es suficiente' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Muchas personas ya saben que repiten patrones. Lo han leído en libros, lo han hablado con amigas, lo han visto en reels de psicología. Pero saberlo no alcanza. El patrón no vive en tu cabeza — vive en tu cuerpo, en tu sistema de apego, en las decisiones automáticas que tomas antes de que la razón intervenga.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Redibujar el mapa relacional requiere un espacio seguro donde puedas observar sin juicio cómo eliges, por qué te quedas y qué necesitas realmente — no lo que aprendiste a conformarte.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Un primer paso' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'La próxima vez que sientas esa atracción magnética hacia alguien que no te da lo que necesitas, en lugar de actuar, detente un segundo y pregúntate:' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['em'], text: '¿Esto me atrae porque me hace bien, o porque me resulta familiar?' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Esa distinción, por pequeña que parezca, es el inicio de todo.' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'Mereces un amor que no te cueste la paz. Y si aún no sabes cómo se siente eso, podemos aprenderlo juntas.' }] },
    ],
  },
  {
    title: 'Cuando tu adolescente dice "estoy bien" y obviamente no lo está',
    slug: 'cuando-tu-adolescente-dice-estoy-bien',
    excerpt: 'Lo que sí funciona, lo que no, y por qué a veces preguntar más es alejarlo más.',
    readTime: '7 min',
    publishedAt: '2026-05-03T10:00:00Z',
    categoryTitle: 'Adolescencia',
    featured: false,
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '"Estoy bien" es la frase más repetida — y menos sincera — de la adolescencia. No porque los adolescentes sean mentirosos, sino porque la pregunta "¿cómo estás?" muchas veces no se siente segura. Detrás de ese "bien" puede haber agotamiento, miedo, confusión, rabia o una mezcla de todo que ni ellos mismos entienden.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Por qué se cierran' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'La adolescencia es una etapa donde el cerebro está literalmente remodelándose. La corteza prefrontal — encargada de la regulación emocional, la toma de decisiones y la empatía — no termina de madurar hasta los 25 años aproximadamente. Mientras tanto, el sistema límbico (las emociones) está a todo volumen.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Esto significa que tu hijo o hija adolescente siente todo con una intensidad enorme, pero no siempre tiene las herramientas para procesarlo ni las palabras para nombrarlo. Y si cada vez que intenta hablar recibe un consejo no solicitado, un "eso no es para tanto" o un interrogatorio, aprende que es más fácil callarse.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Lo que no funciona' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Interrogar.' }, { _type: 'span', text: ' "¿Qué pasó? ¿Fue en el colegio? ¿Fue alguien? ¿Por qué no me cuentas?" Cada pregunta se siente como una invasión, no como interés.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Minimizar.' }, { _type: 'span', text: ' "Eso no es nada, espera a que tengas problemas de verdad." Invalida lo que están sintiendo y les enseña que sus emociones no importan.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Comparar.' }, { _type: 'span', text: ' "Cuando yo tenía tu edad..." Cierra la conversación antes de que empiece.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Lo que sí funciona' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Estar disponible sin presionar.' }, { _type: 'span', text: ' Los adolescentes hablan cuando se sienten seguros, no cuando los obligas. Y muchas veces eligen momentos inesperados: en el carro, antes de dormir, mientras cocinan juntos.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Validar antes de resolver.' }, { _type: 'span', text: ' "Suena difícil lo que estás viviendo" pesa más que cualquier consejo.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', marks: ['strong'], text: 'Respetar su proceso.' }, { _type: 'span', text: ' No todo tiene que resolverse hoy. A veces solo necesitan saber que no están solos.' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'Acompañar a un adolescente no es controlar lo que siente. Es construir un puente lo suficientemente seguro para que, cuando esté listo, pueda cruzarlo hacia ti.' }] },
    ],
  },
  {
    title: 'Cinco señales de que necesitas parar (y no un café más)',
    slug: 'cinco-senales-de-que-necesitas-parar',
    excerpt: 'Tu cuerpo tiene formas muy claras de decirte que ya fue suficiente. Aquí te enseño a leerlas antes de que sea tu cuerpo quien te obligue.',
    readTime: '5 min',
    publishedAt: '2026-04-26T10:00:00Z',
    categoryTitle: 'Bienestar',
    featured: false,
    body: [
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Vivimos en una cultura que glorifica el agotamiento. "Estoy muy ocupada" se dice con orgullo. "No he parado en todo el día" se usa como medalla. Pero tu cuerpo no entiende de productividad ni de hustle culture. Tu cuerpo entiende de límites — y cuando los ignoras, empieza a hablar más fuerte.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Te irritas con todo (y con todos)' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cuando la irritabilidad se vuelve tu estado base, no es un problema de carácter. Es una señal de que tu sistema nervioso está sobrecargado. Estás respondiendo desde la zona de hiperactivación: cualquier estímulo se percibe como amenaza porque tu capacidad de regulación ya está al límite.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. Duermes pero no descansas' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Te acuestas agotada, te despiertas agotada. Puedes dormir ocho horas y sentir que no fueron suficientes. Esto pasa cuando tu cuerpo no logra entrar en las fases profundas de sueño porque sigue en modo alerta. No es un problema de colchón — es un problema de activación.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '3. Tu cuerpo empezó a doler sin razón aparente' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Dolor de cabeza crónico. Tensión en cuello y hombros. Problemas digestivos que van y vienen. El estrés crónico se somatiza — se convierte en síntomas físicos reales. No estás inventando nada. Tu cuerpo está llevando la cuenta de todo lo que tu mente decide ignorar.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '4. Perdiste el interés en cosas que antes disfrutabas' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Ya no te dan ganas de llamar a esa amiga. El hobby que tenías lleva meses guardado. El fin de semana solo quieres que pase. Esto se llama anhedonia — la dificultad para experimentar placer — y es una de las señales más claras de que necesitas detenerte y pedir ayuda.' }] },
      { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '5. Te desconectas de ti misma' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Haces las cosas en automático. Comes sin hambre, hablas sin ganas, sonríes por compromiso. Sientes que estás viviendo la vida de otra persona. Esa desconexión no es pereza ni "falta de actitud". Es disociación leve — tu mente protegiendo lo que ya no puede sostener.' }] },
      { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Si te identificaste con dos o más de estas señales, tu cuerpo ya te está hablando. La pregunta no es si puedes seguir aguantando. La pregunta es: ¿hasta cuándo?' }] },
      { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'Parar no es rendirse. Es la decisión más lúcida que puedes tomar cuando todo lo demás se siente borroso.' }] },
    ],
  },
];

async function seed() {
  console.log('🌱 Creando categorías...');
  const catRefs = {};
  
  for (const cat of categories) {
    const existing = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: cat.title });
    if (existing) {
      catRefs[cat.title] = existing._id;
      console.log(`   ✓ Categoría "${cat.title}" ya existe (${existing._id})`);
    } else {
      const created = await client.create(cat);
      catRefs[cat.title] = created._id;
      console.log(`   + Categoría "${cat.title}" creada (${created._id})`);
    }
  }

  console.log('\n📝 Creando artículos...');
  for (const post of posts) {
    const existing = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug: post.slug });
    if (existing) {
      console.log(`   ⏭ "${post.title}" ya existe, omitiendo.`);
      continue;
    }

    const doc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      readTime: post.readTime,
      publishedAt: post.publishedAt,
      featured: post.featured,
      body: post.body.map(block => ({
        ...block,
        _key: Math.random().toString(36).slice(2, 10),
        children: block.children?.map(child => ({
          ...child,
          _key: Math.random().toString(36).slice(2, 10),
        })),
        markDefs: [],
      })),
    };

    if (post.categoryTitle && catRefs[post.categoryTitle]) {
      doc.category = { _type: 'reference', _ref: catRefs[post.categoryTitle] };
    }

    const created = await client.create(doc);
    console.log(`   + "${post.title}" creado (${created._id})`);
  }

  console.log('\n✅ ¡Listo! Todos los artículos de prueba han sido creados.');
}

seed().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
