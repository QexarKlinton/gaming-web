const games = [

  // SHOOTER

  {
    id: 1,
    title: "Valorant",
    genre: "Shooter",
    price: "Gratis",
    rating: "9.4",
    trailer: "https://youtu.be/e_E9W2vsRbQ?si=BNjgx_BEtefjzPKr",
    buyLink: "https://playvalorant.com/es-mx/download/",
    image:
      "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6",
    description:
      "Shooter táctico competitivo donde la precisión, estrategia y habilidades únicas definen cada enfrentamiento."
  },

  {
    id: 2,
    title: "Call of Duty: Black Ops 6",
    genre: "Shooter",
    price: "$1,399",
    rating: "9.0",
    trailer: "https://youtu.be/on1E0EHLyik?si=vS1fCZ9YokEqfKOR",
    buyLink: "https://store.steampowered.com/app/2933620/Call_of_Duty_Black_Ops_6/",
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/bo6/Store_BO6PDP_Hero.webp",
    description:
      "La nueva entrega de Call of Duty ofrece combate intenso, campañas explosivas y multijugador competitivo de nueva generación."
  },

  {
    id: 3,
    title: "Counter-Strike 2",
    genre: "Shooter",
    price: "Gratis",
    rating: "9.3",
    trailer: "https://youtu.be/c80dVYcL69E",
    buyLink: "https://store.steampowered.com/app/730/CounterStrike_2/",
    image:
      "https://gaming-cdn.com/images/products/13664/orig/counter-strike-2-pc-juego-steam-cover.jpg?v=1695885435",
    description:
      "El shooter competitivo más icónico regresa renovado con gráficos mejorados y jugabilidad táctica precisa."
  },

  {
    id: 4,
    title: "DOOM Eternal",
    genre: "Shooter",
    price: "$799",
    rating: "9.5",
    trailer: "https://youtu.be/FkklG9MA0vM",
    buyLink: "https://store.steampowered.com/app/782330/DOOM_Eternal/",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/ERNPc4gFqeRDG1tYQIfOKQtM.png",
    description:
      "Combate frenético, demonios infernales y acción brutal en uno de los shooters más intensos jamás creados."
  },

  {
    id: 5,
    title: "Apex Legends",
    genre: "Shooter",
    price: "Gratis",
    rating: "8.9",
    trailer: "https://youtu.be/oQtHENM_GZU",
    buyLink: "https://store.steampowered.com/app/1172470/Apex_Legends/",
    image:
      "https://tierragamer.com/wp-content/uploads/2025/08/apex-legends-temporada-enfrentamiento-ya-disponible.webp",
    description:
      "Battle Royale futurista basado en escuadrones y habilidades únicas para dominar el campo de batalla."
  },

  // TERROR

  {
    id: 6,
    title: "The Evil Within",
    genre: "Terror",
    price: "$680",
    rating: "8.9",
    trailer: "https://youtu.be/Cz-tjH2Vnh8?si=ioi9C7osxiW98HNs",
    buyLink: "https://store.steampowered.com/app/268050/The_Evil_Within/",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/oW8ShmeCKapjXbHxjHUlmqB1.png",
    description:
      "Una experiencia de horror psicológico intensa y perturbadora llena de criaturas grotescas y supervivencia extrema."
  },

  {
    id: 7,
    title: "Resident Evil Requiem",
    genre: "Terror",
    price: "$999",
    rating: "9.7",
    trailer: "https://youtu.be/8N3c044yy-M?si=ZpU8pegxfRywQ57X",
    buyLink: "https://store.steampowered.com/app/3764200/Resident_Evil_Requiem/",
    image:
      "https://cdn1.epicgames.com/spt-assets/b2e589fac93746fc8d20b4177f5b3a60/resident-evil-requiem-g8jiq.jpg",
    description:
      "La legendaria aventura de terror regresa completamente renovada con gráficos modernos y supervivencia intensa."
  },

  {
    id: 8,
    title: "Silent Hill 2 Remake",
    genre: "Terror",
    price: "$1,299",
    rating: "9.1",
    trailer: "https://youtu.be/CMvrMTmuJuA",
    buyLink: "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/capsule_616x353.jpg?t=1744248682",
    description:
      "Un viaje psicológico oscuro y perturbador dentro de uno de los clásicos más importantes del horror."
  },

  {
    id: 9,
    title: "Dead Space Remake",
    genre: "Terror",
    price: "$1,399",
    rating: "9.2",
    trailer: "https://youtu.be/cTDJNZ9cK1w",
    buyLink: "https://store.steampowered.com/app/1693980/Dead_Space/",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202209/1918/QAHjTNfduZwTKpiliOcL3WWU.jpg",
    description:
      "Terror espacial extremo donde cada pasillo de la nave Ishimura esconde horrores mortales."
  },

  {
    id: 10,
    title: "Outlast",
    genre: "Terror",
    price: "$179",
    rating: "8.8",
    trailer: "https://youtu.be/uKA-IA4locM",
    buyLink: "https://store.steampowered.com/app/238320/Outlast/",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/238320/capsule_616x353.jpg?t=1666817106",
    description:
      "Sobrevive a un aterrador hospital psiquiátrico armado únicamente con tu cámara y valentía."
  },

  // RPG

  {
    id: 11,
    title: "Pokemon Viento",
    genre: "RPG",
    price: "$1,600",
    rating: "9.6",
    trailer: "https://youtu.be/6eqhO98ysIo?si=zWsikuuzeozhrfK0",
    buyLink: "https://www.nintendo.com/es-es/Juegos/Juegos-de-Nintendo-Switch-2/Pokemon-Viento-3039085.html?srsltid=AfmBOoriyyz8WVjTMUDn-g5IAtI8SkHPqPNuPYjsDg6gg_js-vocFNsK",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch2/70010000122035/e679d42f13726602ce630b4c005db60690742fa99c9bf9d46dc1ed3cd9c631f1",
    description:
      "Embárcate en una nueva aventura Pokémon explorando regiones misteriosas, combates épicos y criaturas legendarias."
  },

  {
    id: 12,
    title: "Elden Ring",
    genre: "RPG",
    price: "$979",
    rating: "9.9",
    trailer: "https://youtu.be/E3Huy2cdih0",
    buyLink: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/eldenringtarnishededition/2x1_NSwitch2_EldenRing.jpg",
    description:
      "Explora un gigantesco mundo de fantasía oscura lleno de desafíos brutales y secretos legendarios."
  },

  {
    id: 13,
    title: "The Witcher 3",
    genre: "RPG",
    price: "$499",
    rating: "9.8",
    trailer: "https://youtu.be/c0i88t0Kacs?si=9QZgs1Q7mtIK2t2f",
    buyLink: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    image:
      "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2",
    description:
      "Conviértete en Geralt de Rivia y enfréntate a monstruos, guerras y decisiones que cambiarán el destino del mundo."
  },

  {
    id: 14,
    title: "Final Fantasy XVI",
    genre: "RPG",
    price: "$900",
    rating: "9.1",
    trailer: "https://youtu.be/gV5rIW1Qums",
    buyLink: "https://store.steampowered.com/app/2515020/FINAL_FANTASY_XVI/",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515020/capsule_616x353.jpg?t=1773294537",
    description:
      "Una épica aventura llena de magia, guerras y criaturas colosales dentro del universo Final Fantasy."
  },

  {
    id: 15,
    title: "Persona 3 Reload",
    genre: "RPG",
    price: "$889",
    rating: "9.4",
    trailer: "https://youtu.be/DG_gy1Tecco?si=H4-v7vIsfGooo4nf",
    buyLink: "https://store.steampowered.com/app/2161700/Persona_3_Reload/",
    image:
      "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/persona3reload/16x9_Persona3Reload_image1600w.jpg",
    description:
      "Combina vida estudiantil, misterio sobrenatural y combates estratégicos en esta renovada experiencia RPG."
  },

  // SCI-FI

  {
    id: 16,
    title: "Pragmata",
    genre: "Sci-Fi",
    price: "$869",
    rating: "9.1",
    trailer: "https://youtu.be/w3L_tJpPQvQ?si=dkhhLdAGBBb6NIL5",
    buyLink: "https://store.steampowered.com/app/3357650/PRAGMATA/?l=spanish",
    image:
      "https://nintenduo.com/wp-content/uploads/2026/03/Pragmata-en-Nintenduo-nth-hero-webp.webp",
    description:
      "Una aventura futurista de ciencia ficción ambientada en un mundo distópico lleno de misterio, tecnología y exploración."
  },

  {
    id: 17,
    title: "Cyberpunk 2077",
    genre: "Sci-Fi",
    price: "$999",
    rating: "9.3",
    trailer: "https://youtu.be/8X2kIfS6fb8",
    buyLink: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    image:
      "https://common.cdn.cdpr.app/news/d11de9dc1540d9dd1f51cb39c2799514_q90_592x334.png",
    description:
      "Explora Night City, una metrópolis futurista dominada por tecnología, corporaciones y crimen."
  },

  {
    id: 18,
    title: "Starfield",
    genre: "Sci-Fi",
    price: "$999",
    rating: "8.7",
    trailer: "https://youtu.be/kfYEiTdsyas",
    buyLink: "https://store.steampowered.com/app/1716740/Starfield/",
    image:
      "https://img.asmedia.epimg.net/resizer/v2/NGL7OYMYMBEHJFDA7DXZGD7VNI.jpg?auth=869c4cd9ceec8ca01a47733d2ba22be54b32f23e6988b82100660a5e788b702e&width=1472&height=828&smart=true",
    description:
      "Viaja por el espacio, descubre planetas desconocidos y vive una aventura galáctica gigantesca."
  },

  {
    id: 19,
    title: "Helldivers 2",
    genre: "Sci-Fi",
    price: "$699",
    rating: "9.0",
    trailer: "https://youtu.be/UC5EpJR0GBQ?si=Zbm9pNLU4x6D5xuk",
    buyLink: "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202602/0318/a4e9cb0645c9e878772ca8312bd2736784a0420f3b84678a.jpg",
    description:
      "Shooter cooperativo caótico donde la estrategia y el trabajo en equipo son esenciales para sobrevivir."
  },

  {
    id: 20,
    title: "Mass Effect Legendary Edition",
    genre: "Sci-Fi",
    price: "$899",
    rating: "9.5",
    trailer: "https://youtu.be/n8i53TtQ6IQ",
    buyLink: "https://store.steampowered.com/app/1328670/Mass_Effect_Legendary_Edition/",
    image:
      "https://cdn1.epicgames.com/offer/2a535f0e7c754dbe9157bf96adc62d56/EGS_MassEffectLegendaryEdition_BioWare_S1_2560x1440-3cd5c1d9f1eb8a308736051a1fafc432",
    description:
      "La trilogía legendaria de Mass Effect remasterizada con una narrativa épica y decisiones que cambian la galaxia."
  }

]

export default games