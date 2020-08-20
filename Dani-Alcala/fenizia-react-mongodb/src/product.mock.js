const productList = [
  {
    id: 1,
    product: {
      type: "book",
      title: "Postales del Este",
      author: "Reyes Monforte",
      price: 19.85,
      rating: 9,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51HzFPWh3dL._SX320_BO1,204,203,200_.jpg",
      description:
        "Una emocionante historia basada en hechos reales sobre la memoria, el amor y la esperanza en medio del horror de Auschwitz.",
      novedades: true,
      superventas: false,
      genre: "historia",
    },
  },
  {
    id: 2,
    product: {
      type: "book",
      title: "The Crazy Haacks 8",
      author: "The Crazy Haacks",
      price: 17,
      rating: 8.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51Z8ckAJGEL._SX327_BO1,204,203,200_.jpg",
      description:
        "¿Que pasaría si THE CRAZY HAACKS dejásemos de ser... CRAZY? ¡SERÍA EL FIN DE LA LOCURA Y LA DIVERSIÓN! Una poción está poniendo en peligro nuestra identidad y deberemos viajar a la INDIA para lograr el antídoto de LA PÓCIMA ETERNA.",
      novedades: true,
      superventas: false,
      genre: "infantil",
    },
  },
  {
    id: 3,
    product: {
      type: "book",
      title: "El infinito en un junco",
      author: "Irene Vallejo",
      price: 23.7,
      rating: 7.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51qZJqyLTFL._SX335_BO1,204,203,200_.jpg",
      description:
        "Este es un libro sobre la historia de los libros. Un recorrido por la vida de ese fascinante artefacto que inventamos para que las palabras pudieran viajar en el espacio y en el tiempo.",
      novedades: true,
      superventas: false,
      genre: "historia",
    },
  },
  {
    id: 4,
    product: {
      type: "book",
      title: "El mensaje de Pandora",
      author: "Javier Serra",
      price: 15.1,
      rating: 5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41JxWWsF9+L._SY344_BO1,204,203,200_.jpg",
      description:
        "El día que Arys cumplió dieciocho años recibió esta extraña carta. Le llegó desde Atenas envuelta en papel de estraza con el apremio de que debía leerla de inmediato.",
      novedades: true,
      superventas: true,
      genre: "thriller",
    },
  },
  {
    id: 5,
    product: {
      type: "book",
      title: "El mentiroso",
      author: "Mikel Santiago",
      price: 18.85,
      rating: 7.8,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41mLkvZRYuL._SX327_BO1,204,203,200_.jpg",
      description:
        "Hay novelas imposibles de abandonar una vez leídas las primeras páginas. Historias que reinventan el suspense y hacen dudar al lector cada vez que termina un capítulo.",
      novedades: true,
      superventas: false,
      genre: "thriller",
    },
  },
  {
    id: 6,
    product: {
      type: "book",
      title: "Loba negra",
      author: "Juan Gómez-Jurado",
      price: 14.85,
      rating: 7.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41N6Q2E9i-L._SX325_BO1,204,203,200_.jpg",
      description:
        "Antonia Scott no tiene miedo a nada. Solo a sí misma. Pero hay alguien más peligroso que ella. Alguien que podría vencerla.",
      novedades: true,
      superventas: false,
      genre: "thriller",
    },
  },
  {
    id: 7,
    product: {
      type: "book",
      title: "Sidi",
      author: "Arturo Pérez-Reverte",
      price: 11.25,
      rating: 6.3,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41JwCRRKjfL._SX309_BO1,204,203,200_.jpg",
      description:
        "No tenía patria ni rey, sólo un puñado de hombres fieles. No tenían hambre de gloria, sólo hambre. Así nace un mito. Así se cuenta una leyenda.",
      novedades: true,
      superventas: true,
      genre: "thriller",
    },
  },
  {
    id: 8,
    product: {
      type: "book",
      title: "Mil besos prohibidos",
      author: "Sonsoles Onega",
      price: 20.95,
      rating: 8.4,
      cover: "https://images-na.ssl-images-amazon.com/images/I/411xo-tcEaL._SX324_BO1,204,203,200_.jpg",
      description:
        "A veces las casualidades se hacen cómplices de los deseos. Costanza y Mauro llevaban media vida esperándose hasta que un encuentro imprevisto en la Gran Vía de Madrid volvió a unir sus destinos.",
      novedades: false,
      superventas: false,
      genre: "romantico",
    },
  },
  {
    id: 9,
    product: {
      type: "book",
      title: "La Biblia de MasterChef",
      author: "Varios",
      price: 24.95,
      rating: 8,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41JQLZcyTrL._SX378_BO1,204,203,200_.jpg",
      description:
        "La guía más completa de cocina, con todas las técnicas, trucos, utensilios y las recetas más emblemáticas del famoso programa de TVE MasterChef.",
      novedades: true,
      superventas: true,
      genre: "cocina",
    },
  },
  {
    id: 10,
    product: {
      type: "book",
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      price: 11.95,
      rating: 9.8,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41h0-zrL-bL._SX350_BO1,204,203,200_.jpg",
      description:
        "Un aviador se encuentra perdido en el desierto del Sahara, después de haber tenido una avería en su avión. Entonces aparece un pequeño príncipe... El principito vive en un pequeño planeta, el asteroide B 612, en el que hay tres volcanes.",
      novedades: false,
      superventas: true,
      genre: "infantil",
    },
  },
  {
    id: 11,
    product: {
      type: "book",
      title: "El hombre en busca de sentido",
      author: "Viktor Frankl",
      price: 12.5,
      rating: 8.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51FK1XAlsYL._SX324_BO1,204,203,200_.jpg",
      description:
        "El hombre en busca de sentido es un libro escrito por el psiquiatra austriaco Viktor Emil Frankl, publicado en Alemania en 1946. En inglés se editó con los títulos From Death-Camp to Existentialism en 1959 y Man´s Search for Meaning en 1962. ",
      novedades: false,
      superventas: true,
      genre: "ensayo",
    },
  },
  {
    id: 12,
    product: {
      type: "book",
      title: "Yo, Júlia",
      author: "Santiago Posteguillo",
      price: 14.95,
      rating: 6.3,
      cover: "https://images-na.ssl-images-amazon.com/images/I/4191OJsSR1L._SX327_BO1,204,203,200_.jpg",
      description:
        "192d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más grande: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado.",
      novedades: false,
      superventas: false,
      genre: "historia",
    },
  },
  {
    id: 13,
    product: {
      type: "book",
      title: "1984",
      author: "George Orwell",
      price: 9.95,
      rating: 9.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51pAui14H6L._SX326_BO1,204,203,200_.jpg",
      description:
        "'No creo que la sociedad que he descrito en 1984 necesariamente llegue a ser una realidad, pero sí creo que puede llegar a existir algo parecido', escribía Orwell despues de publicar su novela. Corría el año 1948, y la realidad se ha encargado de convertir esa pieza -entonces de ciencia ficción- en un manifiesto de la realidad.",
      novedades: false,
      superventas: true,
      genre: "thriller",
    },
  },
  {
    id: 14,
    product: {
      type: "book",
      title: "Harry Potter y el prisionero de Azkaban",
      author: "J.K. Rowling",
      price: 17.95,
      rating: 7.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41RHagRVAlL._SX312_BO1,204,203,200_.jpg",
      description:
        "Harry Potter y el prisionero deAzkaban es la tercera novela de la ya clásica serie fantástica de la autora británica J.K. Rowling. «Bienvenido al autobús noctámbulo, transporte de emergencia para el brujo abandonado a su suerte. Levante la varita, suba a bordo y lo llevaremos a donde quiera.»",
      novedades: false,
      superventas: true,
      genre: "infantil",
    },
  },
  {
    id: 15,
    product: {
      type: "book",
      title: "Open: Memorias",
      author: "Andre Agassi",
      price: 14.95,
      rating: 7.5,
      cover: "https://imagessl1.casadellibro.com/a/l/t1/61/9788416634361.jpg",
      description:
        "Siendo un bebé, le pusieron una raqueta de juguete en la mano. Desde entonces, Agassi no ha hecho otra cosa que golpear pelotas de tenis. Su padre, obsesionado en convertirlo en un astro del deporte, construyó una máquina (el dragón) que disparaba 2.500 pelotas al día contra el pequeño Andre.",
      novedades: false,
      superventas: false,
      genre: "ensayo",
    },
  },
  {
    id: 16,
    product: {
      type: "book",
      title: "Juega y diviértete con los SuperZings",
      author: "Varios",
      price: 22.95,
      rating: 6.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/61PKH82TUpL._SX374_BO1,204,203,200_.jpg",
      description:
        "Juega y diviértete con los superzings. Incluye 2 One Pack Serie 5 + 1 Máscara SZ (4 modelos distintos) + 1 Set de lápices de colores (3 lápices).",
      novedades: true,
      superventas: false,
      genre: "infantil",
    },
  },
  {
    id: 17,
    product: {
      type: "book",
      title: "Momo",
      author: "Michael Ende",
      price: 12.95,
      rating: 8.5,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51x5N8J2ekL._SX323_BO1,204,203,200_.jpg",
      description:
        "Momo es una niña con un don muy especial: sólo con escuchar consigue que los que están tristes se sientan mejor, los que están enfadados solucionen sus problemas o que a los que están aburridos se les ocurran cosas divertidas. De repente, la llegada de los hombres grises va a cambiar su vida.",
      novedades: false,
      superventas: true,
      genre: "infantil",
    },
  },
  {
    id: 18,
    product: {
      type: "book",
      title: "Abuela, te quiero hasta la luna y volver",
      author: "Mariana Pérez-Duarte",
      price: 14.45,
      rating: 7.5,
      cover: "https://imagessl3.casadellibro.com/a/l/t5/83/9788417424183.jpg",
      description:
        "¡Quien tiene una abuela, tiene un tesoro! Un maravilloso libro que os hará disfrutar y vivir momentos inolvidables, y en el que podréis guardar recuerdos para siempre.",
      novedades: false,
      superventas: false,
      genre: "infantil",
    },
  },
  {
    id: 19,
    product: {
      type: "book",
      title: "Resuelve el misterio. El secreto de la mansión",
      author: "Lauren Magaziner",
      price: 17.45,
      rating: 7.2,
      cover: "https://imagessl7.casadellibro.com/a/l/t1/37/9788427214637.jpg",
      description:
        "Alguien quiere hacerse con el tesoro escondido de una excentica millonaria. Pero la busqueda del culpable se ve complicada por todo tipo de acertijos, enigmas, oscuros secretos y un monton de decisiones imposibles. Por si fuese poco, Carlos es el encargado de investigar lo ocurrido y no ha resuelto un misterio en su vida, asi que va a necesitar tu ayuda para resolver su primer caso.",
      novedades: false,
      superventas: false,
      genre: "infantil",
    },
  },
  {
    id: 20,
    product: {
      type: "book",
      title: "MikelTube y la brújula del destino",
      author: "MikelTube",
      price: 19.5,
      rating: 7,
      cover: "https://images-na.ssl-images-amazon.com/images/I/61SVsKyIukL._SX370_BO1,204,203,200_.jpg",
      description:
        "Es el ultimo dia de cole antes de las vacaciones de verano. Mikel y Leo cuentan las horas para que acaben las clases, ¡pero lo que no saben es que estan a punto de enfrentarse a una de las mayores aventuras de su vida! Junto con su familia, su gatito Bills y el profesor NoVe emprenderan un viaje interdimensional para enfrentarse a la malvada bruja Gunilda, ¡la Tenebrosa Emperatriz de Marte! ",
      novedades: true,
      superventas: false,
      genre: "infantil",
    },
  },
];

export default productList;
