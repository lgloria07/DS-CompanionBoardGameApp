export const personajes = [
  {
    id: 1,
    category: "slayer",
    type: "Tank",
    nombre: "Gyomei Himejima",
    imagen: require("../assets/characters/gyomei.jpg"),
    vidaMax: 55,
    pasiva: "Si es tanque, bloquea todo. Recibe 5 menos de daño",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Hidra de serpentina", descripcion: "Inflige 8 de daño" },
      { dado: 5, nombre: "Segunda postura: Reflejo ígneo", descripcion: "Reflejas el siguiente ataque enemigo (ambos reciben el daño), te curas 5" },
      { dado: 8, nombre: "Tercera postura: Rotura celestial", descripcion: "Inflige 15 de daño y el enemigo tiene -4 en su siguiente tirada" },
      { dado: 10, nombre: "Cuarta postura: Riolita-Conquista Rápida", descripcion: "Te curas 20" },
      { dado: 12, nombre: "Quinta postura: Rueda de piedra firme", descripcion: "Te curas 25 de vida e infliges daño igual a tu vida" }
    ],
    efectoEspecial: {
      nombre: "Reflejo",
      tipo: "boolean"
    }
  },
  {
    id: 2,
    category: "slayer",
    nombre: "Sanemi Shinazugawa",
    type: "Slayer",
    imagen: require("../assets/characters/sanemi.jpg"),
    vidaMax: 40,
    pasiva: "Tienes 10 más de daño (-2 por aliado en combate)",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Primer corte vendaval", descripcion: "Inflige 10 de daño a un enemigo" },
      { dado: 5, nombre: "Segunda postura: Torbellino de polvo", descripcion: "Inflige (dados + 8) de daño" },
      { dado: 8, nombre: "Tercera postura: Tormenta de polvo ascendente", descripcion: "Inflige 8 de daño a un enemigo y a otro de tu elección" },
      { dado: 10, nombre: "Cuarta postura: Garras de viento purificador", descripcion: "Pasiva: Sanemi obtiene 8 más de daño" },
      { dado: 12, nombre: "Quinta postura: Tifón peligroso", descripcion: "Infliges 40 de daño al enemigo y 2 de daño a aliados en combate" }
    ]
  },
  {
    id: 3,
    category: "slayer",
    nombre: "Obanai Iguro",
    type: "Mage",
    imagen: require("../assets/characters/iguro.jpg"),
    vidaMax: 35,
    pasiva: "Si el enemigo tira un 2 en el dado, Iguro esquiva el ataque e inflige 3 de daño",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Corte de serpiente retorcida", descripcion: "Inflige 4 de daño y tienes +1 en tu siguiente tirada " },
      { dado: 5, nombre: "Segunda postura: Espiral de serpiente inmovilizadora", descripcion: "Inflige 10 de daño y tu siguiente ataque tiene +5" },
      { dado: 8, nombre: "Tercera postura: Colmillo venenoso de serpiente pequeña", descripcion: "Pasiva: Envenena al enemigo por 4 de daño. Se cura 8 de vida" },
      { dado: 10, nombre: "Cuarta postura: Cabezas de serpientes gemelas", descripcion: "Pasiva: Usar a Iguru no gasta action points (1 vez por ronda. (Permanente)"},
      { dado: 12, nombre: "Quinta postura: Serpiente deslizante", descripcion: "Elimina la pasiva del enemigo y su primer poder (Permanente)" }
    ],
  },
  {
    id: 4,
    category: "demon",
    nombre: "Muzan Kibutsuji",
    type: "Boss",
    imagen: require("../assets/characters/muzan.jpg"),
    vidaMax: 100,
    pasiva: "Inflige daño igual a la tirada en los dados. El resto de demonios tiene +1 en sus dados",
    habilidades: [
      { dado: 2, nombre: "Fuerza demoniaca", descripcion: "Inflige 10 de daño" },
      { dado: 5, nombre: "Danza del desmembramiento", descripcion: "Inflige 13 de daño a todos los enemigos" },
      { dado: 8, nombre: "Sangre del rey Carmesí", descripcion: "Se cura 30 de vida" },
      { dado: 10, nombre: "Tormenta de carne ", descripcion: "Inflige 10 de daño y desbloquea a un demonio (max. 2 veces)" },
      { dado: 12, nombre: "Sangre oscura, raíces espinozas", descripcion: "Mata al tanque e inflinge 15 de daño a todos los enemigos en combate" }
    ],
    efectoEspecial: {
      nombre: "Desbloqueo de demonios",
      tipo: "numero"
    }
  },
  {
    id: 5,
    category: "demon",
    nombre: "Kokushibo",
    type: "Upper",
    imagen: require("../assets/characters/kokoshibo.jpg"),
    vidaMax: 55,
    pasiva: "Primero tiras y luego eliges que usar",
    habilidades: [
      { dado: 2, nombre: "Corte de las mil lunas", descripcion: "Inflige 8 de daño" },
      { dado: 5, nombre: "Resplandor de la luna sangrienta", descripcion: "Infliges 10 de daño y te curas 8" },
      { dado: 8, nombre: "Estocada bajo la luna", descripcion: "Inflige 25 de daño dividido" },
      { dado: 10, nombre: "Ataque de sangre", descripcion: "Inflige (dados*3) de daño" },
      { dado: 12, nombre: "Danza de los seis crecientes", descripcion: "Copias el poder especial de alguno de los enemigos en combate" }
    ]
  },
  {
    id: 6,
    category: "demon",
    nombre: "Doma",
    type: "Upper",
    imagen: require("../assets/characters/doma.jpeg"),
    vidaMax: 45,
    pasiva: "En combate los enemigos no pueden usar sus primeros dos poderes",
    habilidades: [
      { dado: 2, nombre: "Lluvia filosa", descripcion: "Inflige 4 de daño a todos los enemigos en combate" },
      { dado: 5, nombre: "Aire cortante", descripcion: "Inflige 15 de daño y tiene +1 en su siguiente tirada" },
      { dado: 8, nombre: "Muro de hielo", descripcion: "Infliges 10 de daño y empuja al tanque enemigo por dos rondas" },
      { dado: 10, nombre: "Sepultura de cristal", descripcion: "Pasiva: Utilizar un cazador en combate contra Doma, gasta 2 action points" },
      { dado: 12, nombre: "Tormenta del loto azul", descripcion: "Pasiva: Los enemigos en combate tienen -1 en sus dados, inflige 5 de daño a todos" }
    ],
    efectoEspecial: {
      nombre: "Rondas de empuje",
      tipo: "numero"
    }
  },
  {
    id: 7,
    category: "demon",
    nombre: "Akaza",
    type: "Upper",
    imagen: require("../assets/characters/akaza.jpg"),
    vidaMax: 55,
    pasiva: "Si pelea contra un solo enemigo, hace el doble de daño",
    habilidades: [
      { dado: 2, nombre: "Corte sagrado demoniaco", descripcion: "Inflige 7 de daño y tiene +1 en su siguiente ataque" },
      { dado: 5, nombre: "Estilo vacío", descripcion: "Inflige 12 de daño divido y su siguiente ataque tiene +2" },
      { dado: 8, nombre: "Aguja de brújula", descripcion: "Inflige 15 de daño al enemigo más debil (menor vida) y su siguiente ataque tiene +3" },
      { dado: 10, nombre: "Estilo de caos", descripcion: "Inflige 20 de daño al tanque y lo arroja al lado opuesto del mapa, su siguiente ataque tiene +4" },
      { dado: 12, nombre: "Destrucción total", descripcion: "Inflige 25 de daño y revive con 10 de vida. Su siguiente ataque tiene +5" }
    ],
    efectoEspecial: {
      nombre: "Revivir",
      tipo: "boolean"
    }
  },
  {
    id: 8,
    category: "demon",
    tipo: "invocador",
    nombre: "Hantengu",
    type: "Upper",
    imagen: require("../assets/characters/hangentu.webp"),
    vidaMax: 1,
    vidaActual: 1,

    pasiva:
      "Al recibir daño, crea un nuevo demonio en otra casilla. No puede morir hasta que todos su demonios hayan sido derrotados, inflige 1 de daño cada ronda",

    demonios: [
      {
        id: 111,
        nombre: "Felicidad",
        imagen: require("../assets/characters/felicidad.jpg"),
        vidaMax: 8,
        vidaActual: 8,
        habilidad: "Inflige 3 de daño",
      },
      {
        id: 112,
        nombre: "Tristeza",
        imagen: require("../assets/characters/tristeza.jpg"),
        vidaMax: 12,
        vidaActual: 12,
        habilidad: "Cura 6 a otro demonio de Hantengu",
      },
      {
        id: 113,
        nombre: "Ira",
        imagen: require("../assets/characters/ira.jpg"),
        vidaMax: 15,
        vidaActual: 15,
        habilidad:"Inflige 3 a todos los cazadores que estén luchando contra Hantengu",
      },
      {
        id: 114,
        nombre: "Placer",
        imagen: require("../assets/characters/placer.jpg"),
        vidaMax: 18,
        vidaActual: 18,
        habilidad:"Pasiva: Puede estar sin cazadores. Activa: Inflige 3 de daño y arroja al enemigo al lado opuesto del mapa",
      },
      {
        id: 115,
        nombre: "Odio",
        imagen: require("../assets/characters/odio.jpg"),
        vidaMax: 20,
        vidaActual: 20,
        habilidad:"Activa los poderes de todos los otros demonios de Hantengu",
      },
    ],
  },
  {
    id: 9,
    category: "demon",
    nombre: "Gyokko",
    type: "Upper",
    imagen: require("../assets/characters/gyokko.jpg"),
    vidaMax: 40,
    pasiva: "Puede moverse entre casillas de demonio desocupadas",
    habilidades: [
      { dado: 2, nombre: "Escamas mortales", descripcion: "Inflige 5 de daño y se cura 2" },
      { dado: 5, nombre: "10,000 peces de arcilla deslizantes", descripcion: "Inflige 10 de año (+4 por enemigo en combate)" },
      { dado: 8, nombre: "Peces asesinos: Centenar de Agujas", descripcion: "Pasiva: Envenena a los enemigos en el escenario (los enemigos en combate se dividen 8 de daño cada ronda)" },
      { dado: 10, nombre: "Forma final perfeccionada", descripcion: "Pasiva: Recibe 3 menos de daño, e inflige 2 más de daño (incluyendo veneno)" },
      { dado: 12, nombre: "Jarrón de agua infernal", descripcion: "Encierra en un jarrón a un enemigo en combate (le inflige -3 de vida por ronda y no puede actuar hasta que Gyokko muera)"}
    ]
  },
  {
    id: 10,
    category: "demon",
    nombre: "Gyutaro",
    type: "Upper",
    imagen: require("../assets/characters/gyutaro.jpg"),
    vidaMax: 40,
    pasiva: "Invoca a Daki en una casilla desocupada (si no hay, elimina un demonio). Solo puede morir hasta que Daki muera",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos I", descripcion: "Cambia de lugar con su hermana" },
      { dado: 5, nombre: "Rocío de guadaña", descripcion: "Inflige 5 de daño y envena por 4 de daño al enemigo (no se acumula)" },
      { dado: 8, nombre: "Arcos de maldad desenfrenados", descripcion: "Inflige 12 de daño al enemigo y obligalo a intentar usar un poder la proxima ronda" },
      { dado: 10, nombre: "Espiral de guadaña salpicante", descripcion: "Inflige 18 de daño y tienes +2 en tu siguiente tirada" },
      { dado: 12, nombre: "Pacto de hermanos II", descripcion: "Revive a tu hermana con toda la vida"}
    ]
  },
  {
    id: 11,
    category: "demon",
    nombre: "Nakime",
    type: "Upper",
    imagen: require("../assets/characters/nakime.jpg"),
    vidaMax: 32,
    pasiva: "Cada ronda puede mover a un enemigo que no esté en combate a cualquier casilla del mapa (no de combate).",
    habilidades: [
      { dado: 2, nombre: "Resonancia del Biwa Cortante", descripcion: "Inflige 2 de daño, su proxima tirada tiene +1 en el dado (se acumula)" },
      { dado: 5, nombre: "Reconfiguración del Castillo Infinito", descripcion: "Cambia a todos los tanques que estén en combate de lugar" },
      { dado: 8, nombre: "Traslado del Trono Demoníaco", descripcion: "Cambia a muzan de lugar (aunque haya demonios sin activar)" },
      { dado: 10, nombre: "Vibración de las Ocho Cámaras", descripcion: "Inflige 3 de daño a TODOS los enemigos en el juego"},
      { dado: 12, nombre: "Concierto de Manipulación Espacial", descripcion: "Convierte a un enemigo en combate en Murata"}
    ]
  },
  {
    id: 12,
    category: "demon",
    nombre: "Kaigaku",
    type: "Upper",
    imagen: require("../assets/characters/kaigaku.jpg"),
    vidaMax: 28,
    pasiva: "Cuando un cazador llega a su casilla, automaticamente le va al jugador cazador (el resto de action points se pierden)",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Descarga Fragmentada", descripcion: "Inflige 4 de daño dividido"},
      { dado: 5, nombre: "Segunda postura: Castigo Eléctrico", descripcion: "Inflige 3 de daño a todos los enemigos en combate" },
      { dado: 8, nombre: "Tercera postura: Supresión del trueno", descripcion: "Inflige 5 de daño y todos los jugadores cazadores pierden 1 action point la proxima ronda" },
      { dado: 10, nombre: "Cuarta postura: Corte Corrupto", descripcion: "Inflige 10 de daño al tanque y a un enemigo en combate"},
      { dado: 12, nombre: "Quinta postura: Dominio del rayo", descripcion: "Inflige 10 de daño a TODOS los enemigos en el juego"}
    ]
  },
  {
    id: 13,
    category: "demon",
    nombre: "Enmu",
    type: "Lower",
    imagen: require("../assets/characters/enmu.jpg"),
    vidaMax: 30,
    pasiva: "Cada ronda le hace 2 de daño a un enemigo que no esté en combate, y se cura 1 por cada enemigo dormido",
    habilidades: [
      { dado: 2, nombre: "Susurro del Sueño Turbio", descripcion: "Los cazadores en este combate tienen -1 en sus dados la siguiente ronda" },
      { dado: 5, nombre: "Pesadilla de Ensueño", descripcion: "Inflige 4 de daño, 8 a enemigos dormidos" },
      { dado: 8, nombre: "Arte Demoníaco: Inducción al Sueño Profundo", descripcion: "Duerme a cualquier un enemigo en combate (solo puede despertar cuando es golpeado)" },
      { dado: 10, nombre: "Sueño del Tren Infinito", descripcion: "Duerme a todos los enemigos que no estén en combate (los cazadores deben gastar un action point para despertarlos), esto continua aunque Enmu muera"},
      { dado: 12, nombre: "Pesadilla Colectiva", descripcion: "Inflige 10 de daño a todos los enemigos dormidos"}
    ]
  },
  {
    id: 14,
    category: "demon",
    nombre: "Daki",
    type: "Upper",
    imagen: require("../assets/characters/daki.jpg"),
    vidaMax: 25,
    pasiva: "Invoca a Gyutaro en una casilla desocupada (si no hay, elimina un demonio).",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Cura 4 a Gyutaro" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige 6 de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Inflige 7 de daño a su enemigo y al de Gyutaro" },
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Inflige 8 de daño a todos los enemigos"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Gyutaro tiene +5 de daño"}
    ]
  },
  {
    id: 15,
    category: "demon",
    nombre: "Rui",
    type: "Lower",
    imagen: require("../assets/characters/rui.jpg"),
    vidaMax: 30,
    pasiva: "Tiene 5 telarañas por cada otra araña en combate. Por cada telaraña los enemigos reciben 1 de daño cuando lo atacan",
    habilidades: [
      { dado: 2, nombre: "Falsa Familia", descripcion: "Inflige 5 de daño" },
      { dado: 5, nombre: "Tejido Vinculante", descripcion: "Inflige 4 de daño, se cura 2 y coloca una telaraña" },
      { dado: 8, nombre: "Red de Dominio", descripcion: "Coloca 3 telarañas" },
      { dado: 10, nombre: "Tejido Vinculante II", descripcion: "Inflige 6 de daño, se cura 6 y pone 2 telarañas"},
      { dado: 12, nombre: "Telaraña de Sangre", descripcion: "Inflige 2 de daño por telaraña a todos los enemigos en combate contra arañas (una vez que tengas 10 telarañas, esta habilidad cuesta 2 menos)"}
    ],
    efectoEspecial: {
      nombre: "Telarañas",
      tipo: "numero"
    }
  },
  {
    id: 16,
    category: "demon",
    nombre: "Susamaru",
    type: "Demon",
    imagen: require("../assets/characters/susamaru.webp"),
    vidaMax: 26,
    pasiva: "Si saca exactamente el numero de dados que necesita para activar su habilidad, la repite 1 vez",
    habilidades: [
      { dado: 2, nombre: "Lanzamiento Tempestuoso", descripcion: "Inflige 3 de daño" },
      { dado: 5, nombre: "Victoria Repetida", descripcion: "Pasiva: Si mata a un enemigo, repite la habilidad que lo mato" },
      { dado: 8, nombre: "Rebote Despiadado", descripcion: "Lanza una pelota que rebota en los enemigos (primero el tanque): 4,3,2,1" },
      { dado: 10, nombre: "Temari Demoniaco", descripcion: "Inflige (3 dados - 1) de daño"},
      { dado: 12, nombre: "Impacto brutal", descripcion: "Inflige 10 de daño"}
    ]
  },
  {
    id: 17,
    category: "demon",
    nombre: "Yahaba",
    type: "Demon",
    imagen: require("../assets/characters/yahaba.webp"),
    vidaMax: 26,
    pasiva: "El 3 tambien vale 6 para el",
    habilidades: [
      { dado: 2, nombre: "Vector Gemelo", descripcion: "Inflige 2 de daño a el tanque y otro enemigo" },
      { dado: 5, nombre: "Impulso Direccional", descripcion: "Inflige 7 de daño" },
      { dado: 8, nombre: "Eje maldito", descripcion: "Pasiva: Si saca más de 10 en los dados, inflige 7 de daño" },
      { dado: 10, nombre: "Trayectorias Forzadas", descripcion: "Todos los enemigos en combate tiran un dado y reciben eso de daño"},
      { dado: 12, nombre: "Distorsión del Destino", descripcion: "Pasiva: Los cazadores vuelven a tirar el dado una vez si les sale 4, 5 o 6"}
    ]
  },
  {
    id: 18,
    category: "demon",
    nombre: "Spider Demon Father",
    type: "Demon",
    imagen: require("../assets/characters/spiderdemonfather.webp"),
    vidaMax: 35,
    pasiva: "Obtiene +7 de resistencia a ataques por cada otra araña en combate",
    habilidades: [
      { dado: 2, nombre: "Golpe de patriarca", descripcion: "Inflige 3 de daño" },
      { dado: 5, nombre: "Regeneración de seda", descripcion: "Se cura 7 de vida" },
      { dado: 8, nombre: "Veneno de coraza viviente", descripcion: "El proximo enemigo en golpearlo se envenena por 2 de vida" },
      { dado: 10, nombre: "Castigo del nido", descripcion: "Inflige 10 de daño en todas los combates de araña"},
      { dado: 12, nombre: "Prisión de telaraña", descripcion: "Atrapa como tanque al enemigo que quieras (no puede moverse hasta morir) e infligele 12 de daño"}
    ]
  },
  {
    id: 19,
    category: "demon",
    nombre: "Spider Demon Mother",
    type: "Demon",
    imagen: require("../assets/characters/spiderdemonmother.jpg"),
    vidaMax: 25,
    pasiva: "Tiene +2 en sus dados por cada otra araña.",
    habilidades: [
      { dado: 2, nombre: "Tejido de Refuerzo Arácnido", descripcion: "Tiene +1 en su proxima tirada (se acumula)",},
      { dado: 5, nombre: "Picadura Tejedora", descripcion: "Inflige 5 de daño" },
      { dado: 8, nombre: "Banquete de Seda", descripcion: "Inflige 8 de daño y se cura 4" },
      { dado: 10, nombre: "Mandato de la Colmena Arácnida", descripcion: "Todas las arañas infligen 2 de daño a todos los enemigos en combate y obtienen +1 en su proxima tirada"},
      { dado: 12, nombre: "Nido", descripcion: "Todos los enemigos en combate se atacan entre si con su primera habilidad de daño (hacia la derecha)"}
    ]
  },
  {
    id: 20,
    category: "demon",
    nombre: "Kyogai",
    type: "Demon",
    imagen: require("../assets/characters/kyogai.webp"),
    vidaMax: 27,
    pasiva: "Cada ronda se cura 2 o inflige 2",
    habilidades: [
      { dado: 2, nombre: "Redoble de Garra Resonante", descripcion: "Inflige (1 dado) de daño" },
      { dado: 5, nombre: "Golpe del Tambor Voraz", descripcion: "Inflige 5 de daño al personaje con mayor vida que no sea el tanque" },
      { dado: 8, nombre: "Ritmo Restaurador", descripcion: "Curate (dados) de vida" },
      { dado: 10, nombre: "Compás de Desplazamiento", descripcion: "Inflige 2 de daño a cualquier enemigo en combate y mandalo a otro combate"},
      { dado: 12, nombre: "Sinfonía de la Mansión del Tambor", descripcion: "Cambia de combate a todos los enemigos en combate e infligeles 1 de daño (si fallas esta habilidad, cuesta 1 menos hacerla)"}
    ]
  },
  {
    id: 21,
    category: "demon",
    nombre: "Swamp Demon",
    type: "Demon",
    imagen: require("../assets/characters/swampdemon.webp"),
    vidaMax: 22,
    pasiva: "Tiene que haber al menos 2 cazadores para que pueda morir",
    habilidades: [
      { dado: 2, nombre: "Zarpazo", descripcion: "Inflige 2 de daño" },
      { dado: 5, nombre: "Fango", descripcion: "Inflige 4 de daño" },
      { dado: 8, nombre: "Pantano", descripcion: "Inflige 12 de daño" },
      { dado: 10, nombre: "Maldición de las Profundidades", descripcion: "Pasiva: Aumenta en 1 el numero de cazadores que debe haber para morir (se puede acumular)"},
      { dado: 12, nombre: "Lodazal Hambriento", descripcion: "Recupera 15 de vida e inflige 3 de daño a todos los enemigos en combate"}
    ],
    efectoEspecial: {
      nombre: "Num. de cazadores",
      tipo: "numero"
    }
  },
  {
    id: 22,
    category: "demon",
    nombre: "Hand Demon",
    type: "Demon",
    imagen: require("../assets/characters/handdemon.jpg"),
    vidaMax: 22,
    pasiva: "Inflige 2 más de daño a enemigos que no sean pilares",
    habilidades: [
      { dado: 2, nombre: "Agarre", descripcion: "Inflige 3 de daño" },
      { dado: 5, nombre: "Devorar", descripcion: "Inflige (dado) de daño" },
      { dado: 8, nombre: "Manos malditas", descripcion: "Pasiva: Si el enemigo saca menos de 6 en el dado, inflige 3 de daño" },
      { dado: 10, nombre: "Absorción", descripcion: "Cúrate 4 de vida e inflige (dados) de daño"},
      { dado: 12, nombre: "Golpe largo", descripcion: "Inflige 12 de daño a cualquier enemigo en combate"}
    ]
  },
  {
    id: 23,
    category: "demon",
    nombre: "Normal Demon",
    type: "Demon",
    imagen: require("../assets/characters/commondemon.webp"),
    vidaMax: 15,
    pasiva: "Obtiene +10 de daño si muzan está en combate",
    habilidades: [
      { dado: 2, nombre: "Golpe", descripcion: "Inflige 2 de daño" },
      { dado: 5, nombre: "Golpe II", descripcion: "Inflige 4 de daño" },
      { dado: 8, nombre: "Golpe III", descripcion: "Inflige 6 de daño" },
      { dado: 10, nombre: "Golpe IV", descripcion: "Inflige 8 de daño"},
      { dado: 12, nombre: "Golpe V", descripcion: "Inflige 12 de daño"}
    ]
  },
  {
    id: 24,
    category: "slayer",
    nombre: "Muichiro Tokito",
    type: "Mage",
    imagen: require("../assets/characters/muichiro.webp"),
    vidaMax: 30,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego (incluyendo esta y las de los enemigos)",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Niebla Rasante", descripcion: "Pasiva: Si tokito falla su habilidad, no gasta action point usarlo (Permanente)" },
      { dado: 5, nombre: "Segunda postura: Bruma Envolvente ", descripcion: "Inflige (dados + pasivas totales en combate) de daño"},
      { dado: 8, nombre: "Tercera postura: Velo protector", descripcion: "Pasiva: Los cazadores en este combate obtienen +1 en sus dados y daño"},
      { dado: 10, nombre: "Cuarta postura: Neblina Dispersa", descripcion: "Pasiva: Los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "¿Es una nube?", descripcion: "Pasiva: Destruye dados enemigos cuando valen 5 e inflígeles 5 de daño"}
    ],
    efectoEspecial: {
      nombre: "Pasivas totales",
      tipo: "numero"
    }
  },
  {
    id: 25,
    category: "slayer",
    nombre: "Mitsuri Kanroki",
    type: "Tank",
    imagen: require("../assets/characters/mitsuri.webp"),
    vidaMax: 50,
    pasiva: "Obtiene +1 por aliado en combate (sin contarse a ella)",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Latido compasivo", descripcion: "Se cura 5 de vida" },
      { dado: 5, nombre: "Segunda postura: Corazon inquebrantable", descripcion: "Pasiva: No puede recibir mas de 15 de daño por golpe (Permanente)"},
      { dado: 8, nombre: "Tercera postura: Azote de pasión", descripcion: "Infliges 14 de daño"},
      { dado: 10, nombre: "Cuarta postura: Lazos compartidos", descripcion: "Te curas o infliges 7 de daño por cada aliado en combate (sin contarte a ti)"},
      { dado: 12, nombre: "Quinta postura: Sincronía de Amor", descripcion: "Todos los cazadores en combate utilizan su tercer poder"}
    ],
  },
  {
    id: 26,
    category: "slayer",
    nombre: "Shinobu Kocho",
    type: "Support",
    imagen: require("../assets/characters/shinobu.webp"),
    vidaMax: 25,
    pasiva: "Obtiene +2 de movimiento y envenena con 1 de daño al enemigo cuando llega a un combate",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Aumenta 1 el daño del veneno" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige 4 de daño y se cura 5 de vida" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Quita todos los efectos negativos y cura 5 de vida al equipo"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Cura al equipo el daño de envenenamiento cada ronda"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Inflige 12 de daño y el enemigo no se puede curar (Permanente)"}
    ]
  },
  {
    id: 27,
    category: "slayer",
    nombre: "Giyu Tomioka",
    type: "Slayer",
    imagen: require("../assets/characters/giyu.webp"),
    vidaMax: 30,
    pasiva: "Tiene +10 de daño contra lunas",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 6 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Destruye su pasiva e inflige 25 de daño (solo se puede usar una vez)" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Inflige 7 de daño, vuelve a tirar los dados y si es >8, repite"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Inflige 10 de daño y pone un escudo al tanque de 5 de vida"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Inflige 4 de daño por cada personaje muerto"}
    ]
  },
  {
    id: 28,
    category: "slayer",
    nombre: "Tengen Uzui",
    type: "Tank",
    imagen: require("../assets/characters/tengen.webp"),
    vidaMax: 40,
    pasiva: "Tiene +1 de movimiento e inflige 5 de daño al llegar a una casilla",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 5 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Pasiva: Si un cazador fuera a morir en el juego, sacalo de combate, cambia de lugar con el y recibe el daño (Permanente)" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Contraca con 5 de daño al ser atacado (Permanente)"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Se cura 15 y gana un escudo de 5 de vida"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Se cura 10 y recibes 4 action points"}
    ]
  },
  {
    id: 29,
    category: "slayer",
    nombre: "Kyojuro Rengoku",
    type: "Slayer",
    imagen: require("../assets/characters/rengoku.webp"),
    vidaMax: 30,
    pasiva: "Cuando tenga 8 o menos de vida, inflige el doble de daño. La primera vez que fuera a morir, resiste el daño con 1 de vida",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 5 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Tu siguiente ataque hace (dados+5) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Inflige 5 de daño y te quema cada ronda el daño-1 (4,3,2,1)"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Inflige 14 de daño y quema un dado enemigo la siguiente ronda"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Inflige 15 de daño y la siguiente ronda tiras 3 dados"}
    ]
  },
  {
    id: 30,
    category: "slayer",
    nombre: "Tanjiro Kamado",
    type: "Slayer",
    imagen: require("../assets/characters/tanjiro.webp"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 31,
    category: "slayer",
    nombre: "Inosuke Hashibira",
    type: "Slayer",
    imagen: require("../assets/characters/inosuke.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 32,
    category: "slayer",
    nombre: "Nezuko Kamado",
    type: "Tank",
    imagen: require("../assets/characters/nezuko.webp"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 33,
    category: "slayer",
    nombre: "Zenitsu Agatsuma",
    type: "Mage",
    imagen: require("../assets/characters/zenitsu.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 34,
    category: "slayer",
    nombre: "Kanao Tsuyuri",
    type: "Support",
    imagen: require("../assets/characters/kanao.webp"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 35,
    category: "slayer",
    nombre: "Genya Shigazunawa",
    type: "Slayer",
    imagen: require("../assets/characters/genya.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 36,
    category: "slayer",
    nombre: "Yushiro y Tamayo",
    type: "Support",
    imagen: require("../assets/characters/yushirotamayo.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 37,
    category: "slayer",
    nombre: "Sabito",
    type: "Slayer",
    imagen: require("../assets/characters/sabito.webp"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 38,
    category: "slayer",
    nombre: "Hinatsuru, Makio y Suma",
    type: "Support",
    imagen: require("../assets/characters/esposas.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 39,
    category: "slayer",
    nombre: "Hotaru Haganezuka",
    type: "Tank",
    imagen: require("../assets/characters/haganezuka.webp"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
  {
    id: 40,
    category: "slayer",
    nombre: "Murata",
    type: "Slayer",
    imagen: require("../assets/characters/murata.jpg"),
    vidaMax: 25,
    pasiva: "Cada ronda se cura la cantidad de pasivas que haya en juego",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos III", descripcion: "Inflige 4 de daño" },
      { dado: 5, nombre: "Obi de carne", descripcion: "Inflige (dados + cantidad de pasivas en juego) de daño" },
      { dado: 8, nombre: "Pacto de hermanos IV", descripcion: "Pasiva: Todos los cazadores en combate obtienen +1 en sus dados"},
      { dado: 10, nombre: "Corte de 8 listones de Obi", descripcion: "Pasiva: Todos los cazadores en combate vuelven a tirar si les sale 1 en el dado"},
      { dado: 12, nombre: "Pacto de hermanos V", descripcion: "Pasiva: Bloquea el valor 5 en el dado a los enemigos"}
    ]
  },
];
