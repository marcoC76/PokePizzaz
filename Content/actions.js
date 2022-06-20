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