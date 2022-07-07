window.PizzaTypes = {
  normal: "queso",
  spicy: "chile",
  veggie: "vegetal",
  fungi: "hongos",
  chill: "congelada",
  meat: "carne",
  acua: "mariscos",
}
/* Van 19 pizzas */
window.Pizzas = {
  "s001": {
    name: "Rebanada Samurai",
    description: "Cortada a la perfección",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s001.png",
    icon: "/images/icons/spicy.png",
    actions: [ "saucyStatus", "clumsyStatus", "damage1" ],
  },
  "s002": {
    name: "Brigada tocino",
    description: "Un guerrero salado que no teme a nada",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s002.png",
    icon: "/images/icons/spicy.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "v001": {
    name: "Col rizada",
    description: "Gira cuando se seinte fresco",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "clumsyStatus", "saucyStatus"],
  },
  "v002": {
    name: "Verde Alcachofa",
    description: "Su color no es lo unico que tiene",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "saucyStatus", "damage2"],
  },
  "f001": {
    name: "Portobello Express",
    description: "Rapido y letal",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage1" , "clumsyStatus", "damage2" ],
  },
  "f002": {
    name: "Dime Shitake",
    description: "Con buena racion de hongos",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage4" , "clumsyStatus", "damage6"],
  },
  "n001": {
    name: "Triple queso",
    description: "Guerrero con el triple de queso normal",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "saucyStatus"],
  },
  "n002": {
    name: "Extravaganza",
    description: "Verdura y carne, es lo mejor ",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n002.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "saucyStatus"],
  },
  "n003": {
    name: "Carnes frias",
    description: "Un guerrero carnivoro, cuidado con las mordidas",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n003.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage3" , "clumsyStatus", "saucyStatus"],
  },
  "n004": {
    name: "Portuguesa",
    description: "Es raro, lo que tiene ahi es... Huevo?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "a001": {
    name: "Marina Camaron",
    description: "Si se duerme, lo vuelven pizza",
    type: PizzaTypes.acua,
    src: "/images/characters/pizzas/a001.png",
    icon: "/images/icons/mariscos.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "n005": {
    name: "Bianca Blanca",
    description: "Pasa del tomate, pura crema y pesto",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n005.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "m001": {
    name: "Clasica Peperoni",
    description: "Lanza rebanadas de peperoni, como si fuera tan barato...",
    type: PizzaTypes.meat,
    src: "/images/characters/pizzas/m001.png",
    icon: "/images/icons/meat.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "s002": {
    name: "Albondigas picantes",
    description: "Carne como pelotas y ademas pican!",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s004.png",
    icon: "/images/icons/meat.png",
    actions: [ "damage1" , "coolStatus", "damage6"],
  },
  "n006": {
    name: "Margarita Clasica",
    description: "Gran cantidad de masa, pero con la la orilla crugiente",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n006.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "n007": {
    name: "Hawaiana Clasica",
    description: "La mayor aberracion o la mejor idea??",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n007.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "n008": {
    name: "Pastel de tomate",
    description: "Solo es pan, tomate y ajonjoli...",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n008.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "n009": {
    name: "Ricota espinaca",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n009.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "s005": {
    name: "Mexicana",
    description: "Esto pica y trae frijoles ",
    type: PizzaTypes.spicy,
    src: "/images/characters/pizzas/s005.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "damage6"],
  },
  "v004": {
    name: "Espinaca Popeye",
    description: "Puro y sano poder de la espinaca",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v004.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  "v005": {
    name: "Col picante",
    description: "?",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v005.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "coolStatus", "damage5"],
  },
  /* "": {
    name: "Napoleta",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
  
  "": {
    name: "Peperoni Perfecta",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Caprese",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Chicago style",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Caprichosa",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },

  "": {
    name: "Primavera",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },

  "": {
    name: "Fruta del mar",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Romana",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Cuatro estaciones",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Griega",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Prociutto",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Carbonara",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Dedos de ajo",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
  "": {
    name: "Pesto Genovesa",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Ortolana",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Cubana",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
  
  "": {
    name: "Vienesa",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Patatas",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Sardina",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Buffalo Chiken",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Chile relleno",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Chilaquiles",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Mc & Chesse",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Tropical",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Ranchera",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Gitana",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Apolo",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Amore mio",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Amore blu",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Mediterranea",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
  "": {
    name: "Suculenta",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Deluxe",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Pizza colada",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Locochona",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Aloha",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Garden",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Cesar",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
 
  "": {
    name: "Jardin",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Todos los hongos",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  
  "": {
    name: "Solo queso",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Robin HOT",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Boloñesa",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  "": {
    name: "Pastor",
    description: "?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n001.png",
    icon: "/images/icons/normal.png",
    actions: [ "" , "", ""],
  },
  */ 
}