window.Actions = {
  damage1: {
    name: "Whomp!",
    description: "Golpe de masa",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 10}
    ]
  },
  damage2: {
    name: "Queso derretido",
    description: "Ataca con queso caliente",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 7}
    ]
  },
  damage3: {
    name: "Corte chueco",
    description: "Utiliza el cortador de pizza para cortar mal a su oponente",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 15}
    ]
  },
  damage4: {
    name: "Salsa Abanera",
    description: "Lanza salsa extra picosa a su oponente",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation",  animation: "glob", color: "#b11506"},
      { type: "stateChange", damage: 12}
    ]
  },
  damage5: {
    name: "Corte",
    description: "Lanza salsa extra picosa a su oponente",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation",  animation: "cut", color: "#828282"},
      { type: "stateChange", damage: 5}
    ]
  },
  saucyStatus: {
    name: "Tomate apachurrado",
    description: "El poder de la salsa",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
    ]
  },
  clumsyStatus: {
    name: "Aceite de oliva",
    description: "El poder de la aceituna",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} esta girando al rededor!"},
    ]
  },
  coolStatus: {
    name: "Rebanda fria",
    description: "Mantiene al oponente en el refri por 3 turnos",
    success: [
      { type: "textMessage", text: "{CASTER} usa {ACTION}!"},
      { type: "animation", animation: "glob", color: "#59a1c0" },
      { type: "stateChange", status: { type: "cool", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} se esta endureciendo por el frio!"},
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Lampara de calor",
    description: "Se siente caliente y fresco",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} usa un {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Se siente fresco!", },
    ]
  },
  item_recoverHp: {
    name: "Parmesano",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{CASTER} espolvorea algo de {ACTION}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{CASTER} recupera HP!", },
    ]
  },
}