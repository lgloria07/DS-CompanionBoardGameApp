export const personajes = [
  {
    id: 1,
    category: "slayer",
    nombre: "Gyomei Himejima (Tanque)",
    imagen: require("../assets/characters/gyomei.jpg"),
    vidaMax: 50,
    pasiva: "Si es tanque, bloquea todo. Recibe 5 menos de daño",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Hidra de serpentina", descripcion: "Inflige 8 de daño" },
      { dado: 5, nombre: "Segunda postura: Reflejo ígneo", descripcion: "Reflejas daño 2 rondas" },
      { dado: 8, nombre: "Tercera postura: Rotura celestial", descripcion: "Quita 15 y enemigo -4 en siguiente tirada" },
      { dado: 10, nombre: "Cuarta postura: Riolita-Conquista Rápida", descripcion: "Te curas 20" },
      { dado: 12, nombre: "Quinta postura: Rueda de piedra firme", descripcion: "Te curas 20 y haces daño igual a tu vida" }
    ]
  },
  {
    id: 2,
    category: "slayer",
    nombre: "Sanemi Shinazugawa (Ataque)",
    imagen: require("../assets/characters/sanemi.jpg"),
    vidaMax: 35,
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
    nombre: "Obanai Iguro (Mago)",
    imagen: require("../assets/characters/iguro.jpg"),
    vidaMax: 30,
    pasiva: "Si falla un ataque, inflige 3 de daño)",
    habilidades: [
      { dado: 2, nombre: "Primera postura: Corte de serpiente retorcida", descripcion: "Inflige 4 de daño y tienes +1 en tu siguiente tirada " },
      { dado: 5, nombre: "Segunda postura: Espiral de serpiente inmovilizadora", descripcion: "Inflige 10 de daño y tu siguiente ataque tiene +5" },
      { dado: 8, nombre: "Tercera postura: Colmillo venenoso de serpiente pequeña", descripcion: "Pasiva: Cada vez que el enemigo ataque pierde 3 de vida (acumulable). Se cura 8 de vida" },
      { dado: 10, nombre: "Cuarta postura: Cabezas de serpientes gemelas", descripcion: "Pasiva: Usar a Iguru no gasta action points (1 vez por ronda)" },
      { dado: 12, nombre: "Quinta postura: Serpiente deslizante", descripcion: "Infliges 40 de daño al enemigo y 2 de daño a aliados en combate" }
    ]
  },
  {
    id: 4,
    category: "demon",
    nombre: "Muzan Kibutsuji",
    imagen: require("../assets/characters/muzan.jpg"),
    vidaMax: 100,
    pasiva: "Inflige daño igual a la tirada en los dados",
    habilidades: [
      { dado: 2, nombre: "Fuerza demoniaca", descripcion: "Inflige 10 de daño" },
      { dado: 5, nombre: "Danza del desmembramiento", descripcion: "Inflige 15 de daño a todos los enemigos" },
      { dado: 8, nombre: "Sangre del rey Carmesí", descripcion: "Se cura 30 de vida" },
      { dado: 10, nombre: "Tormenta de carne ", descripcion: "Inflige 10 de daño y desbloquea a un demonio " },
      { dado: 12, nombre: "Sangre oscura, raíces espinozas", descripcion: "Mata al tanque e inflinge 15 de daño a todos los enemigos en combate" }
    ]
  },
  {
    id: 5,
    category: "demon",
    nombre: "Kokushibo",
    imagen: require("../assets/characters/kokoshibo.jpg"),
    vidaMax: 50,
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
    imagen: require("../assets/characters/doma.jpeg"),
    vidaMax: 40,
    pasiva: "En combate los enemigos no pueden usar sus primeros dos poderes",
    habilidades: [
      { dado: 2, nombre: "Lluvia filosa", descripcion: "Inflige 4 da daño a todos los enemigos en combate" },
      { dado: 5, nombre: "Aire cortante", descripcion: "Inflige 15 de daño y tiene +1 en su siguiente tirada" },
      { dado: 8, nombre: "Muro de hielo", descripcion: "Infliges 10 de daño y empuja al tanque enemigo por una ronda" },
      { dado: 10, nombre: "Sepultura de cristal", descripcion: "Pasiva: Utilizar un cazador en combate contra Doma, gasta 2 action points" },
      { dado: 12, nombre: "Tormenta del loto azul", descripcion: "Inflige 15 de daño y congela a un enemigo (tiene -2 en los dados mientras esté en combate contra Doma)" }
    ]
  },
  {
    id: 7,
    category: "demon",
    nombre: "Akaza",
    imagen: require("../assets/characters/akaza.jpg"),
    vidaMax: 50,
    pasiva: "Si pelea contra un cazador, hace el doble de daño",
    habilidades: [
      { dado: 2, nombre: "Corte sagrado demoniaco", descripcion: "Inflige 7 de daño y tiene +1 en su siguiente ataque" },
      { dado: 5, nombre: "Estilo vacío", descripcion: "Inflige 12 de daño divido y su siguiente ataque inflige +2" },
      { dado: 8, nombre: "Aguja de brújula", descripcion: "Inflige 15 de daño al enemigo más debil (menor vida) y su siguiente ataque inflige +3" },
      { dado: 10, nombre: "Estilo de caos", descripcion: "Inflige 20 de daño al tanque y lo arroja al lado opuesto del mapa, su siguiente ataque inflige +4" },
      { dado: 12, nombre: "Destrucción total", descripcion: "Inflige 25 de daño y revive con 10 de vida. Su siguiente ataque hace +5" }
    ]
  },
  {
    id: 8,
    category: "demon",
    nombre: "Gyokko",
    imagen: require("../assets/characters/gyokko.jpg"),
    vidaMax: 35,
    pasiva: "Puede moverse entre casillas de demonio desocupadas",
    habilidades: [
      { dado: 2, nombre: "Escamas mortales", descripcion: "Inflige 5 de daño y se cura 2" },
      { dado: 5, nombre: "10,000 peces de arcilla deslizantes", descripcion: "Inflige 10 de año (+5 por enemigo en combate)" },
      { dado: 8, nombre: "Peces asesinos: Centenar de Agujas", descripcion: "Pasiva: Envenena a los enemigos en el escenario (los enemigos en combate se dividen 8 de daño cada ronda)" },
      { dado: 10, nombre: "Forma final perfeccionada", descripcion: "Pasiva: Recibe 3 menos de daño, e inflige 2 más de daño" },
      { dado: 12, nombre: "Jarrón de agua infernal", descripcion: "Encierra en un jarrón a un enemigo en combate (le inflige -3 de vida por ronda y no puede actuar hasta que Gyokko muera)"}
    ]
  },
  {
    id: 9,
    category: "demon",
    nombre: "Gyutaro",
    imagen: require("../assets/characters/gyutaro.jpg"),
    vidaMax: 35,
    pasiva: "Invoca a Daki en una casilla desocupada (si no hay, elimina un demonio). Solo puede morir hasta que Daki muera",
    habilidades: [
      { dado: 2, nombre: "Pacto de hermanos I", descripcion: "Cambia de lugar con su hermana" },
      { dado: 5, nombre: "Rocío de guadaña", descripcion: "Inflige 5 de daño y envena por 4 de daño al enemigo (no se acumula)" },
      { dado: 8, nombre: "Arcos de maldad desenfrenados", descripcion: "Inflige 12 de daño al enemigo y obligalo a intentar usar un poder la proxima ronda" },
      { dado: 10, nombre: "Espiral de guadaña salpicante", descripcion: "Inflige 20 de daño y tienes +2 en tu siguiente tirada" },
      { dado: 12, nombre: "Pacto de hermanos II", descripcion: "Revive a tu hermana con toda la vida"}
    ]
  },
  {
    id: 10,
    category: "demon",
    nombre: "Daki",
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
    id: 11,
    category: "demon",
    nombre: "Hangentu",
    imagen: require("../assets/characters/hangentu.webp"),
    vidaMax: 1,
    pasiva: "Al recibir daño, crea un nuevo demonio en otra casilla, no puede morir hasta que sus demonios hayan sido derrotados",
    habilidades: [
      { dado: 2, nombre: "Felicidad", vida: 8, descripcion: "Inflige 3 de daño" },
      { dado: 4, nombre: "Tristeza",vida: 8, descripcion: "Cura 6 a otro demonio de Hantengu" },
      { dado: 6, nombre: "Ira", vida: 8,descripcion: "Inflige 4 a todos los cazadores que estén luchando contra Hantengu" },
      { dado: 8, nombre: "Placer", vida: 8,descripcion: "Pasiva: Puede estar sin cazadores. Inflige 3 de daño y arroja al enemigo al lado opuesto del mapa "},
      { dado: 10, nombre: "Odio", vida: 8,descripcion: "Activa los poderes de todos los otros demonios "}
    ]
  },
];
