window.PizzaTypes = {
  normal: "normal",
  spicy: "picosa",
  veggie: "vegetariana",
  fungi: "hongos",
  chill: "fresco",
}

window.Pizzas = {
  "s001": {
    name: "Rebanada Samurai",
    description: "Pizza desc here",
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
    name: "Llamame Kale",
    description: "Pizza desc here",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "clumsyStatus"],
  },
  "v002": {
    name: "Archie Artichoke",
    description: "Pizza desc here",
    type: PizzaTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" , "saucyStatus"],
  },
  "f001": {
    name: "Portobello Express",
    description: "Pizza desc here",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage1" , "clumsyStatus"],
  },
  "f002": {
    name: "Dime Shitake",
    description: "Pizza desc here",
    type: PizzaTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage5" , "saucyStatus"],
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
    description: "Guerrero de verdura y carne ",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n002.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "coolStatus", "saucyStatus"],
  },
  "n003": {
    name: "Carnes frias",
    description: "Guerrero carnivoro",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n003.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage3" , "clumsyStatus", "saucyStatus"],
  },
  "n004": {
    name: "Portuguesa",
    description: "Guerrer con... Huevo?",
    type: PizzaTypes.normal,
    src: "/images/characters/pizzas/n004.png",
    icon: "/images/icons/normal.png",
    actions: [ "damage1" , "saucyStatus", "damage5"],
  }
}