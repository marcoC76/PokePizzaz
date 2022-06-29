window.Actions = {
  damage1: {
    name: "Golpe de masa!",
    description: "Golpea con masa cruda",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "spin"
      },
      {
        type: "stateChange",
        damage: 10
      }
    ]
  },
  damage2: {
    name: "Queso caliente",
    description: "Ataca con queso caliente",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "spin"
      },
      {
        type: "stateChange",
        damage: 7
      }
    ]
  },
  damage3: {
    name: "Corte doble",
    description: "Corta al oponenete en cuatro",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "cut",
        color: "#828282"
      },
      {
        type: "stateChange",
        damage: 10,
        status: {
          type: "cortado2",
          expiresIn: 3
        }
      },
      {
        type: "textMessage",
        text: "{TARGET} ha sido cortado en cuatro porciones!"
      },
    ]
  },
  damage4: {
    name: "Salsa Abanera",
    description: "Lanza salsa extra picosa a su oponente",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "glob",
        color: "#b11506"
      },
      {
        type: "stateChange",
        damage: 12
      }
    ]
  },
  damage5: {
    name: "Corte",
    description: "Corta al oponenete en dos",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "cut",
        color: "#828282"
      },
      {
        type: "stateChange",
        damage: 5,
        status: {
          type: "cortado",
          expiresIn: 2
        }
      },
      {
        type: "textMessage",
        text: "{TARGET} ha sido cortado a la mitad!"
      },
    ]
  },
  saucyStatus: {
    name: "Tomate machacado",
    description: "Se baña en tomates machacados",
    targetType: "friendly",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "globSelf",
        color: "#ff6347"
      },
      {
        type: "stateChange",
        status: {
          type: "saucy",
          expiresIn: 3
        }
      }
    ]
  },
  clumsyStatus: {
    name: "Aceite de oliva",
    description: "El poder de la aceituna",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "glob",
        color: "#dafd2a"
      },
      {
        type: "stateChange",
        status: {
          type: "clumsy",
          expiresIn: 3
        }
      },
      {
        type: "textMessage",
        text: "{TARGET} esta girando al rededor!"
      },
    ]
  },
  coolStatus: {
    name: "Rebanda fria",
    description: "Mantiene al oponente en el refri por 3 turnos",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa {ACTION}!"
      },
      {
        type: "animation",
        animation: "globCool",
        color: "#59a1c0"
      },
      {
        type: "stateChange",
        status: {
          type: "cool",
          expiresIn: 3
        }
      },
      {
        type: "textMessage",
        text: "{TARGET} se esta endureciendo por el frio!"
      },
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Lampara de calor",
    description: "Se siente caliente y fresco",
    targetType: "friendly",
    success: [{
        type: "textMessage",
        text: "{CASTER} usa un {ACTION}!"
      },
      {
        type: "stateChange",
        status: null
      },
      {
        type: "textMessage",
        text: "Se siente fresco!",
      },
    ]
  },
  item_recoverHp: {
    name: "Parmesano",
    targetType: "friendly",
    success: [{
        type: "textMessage",
        text: "{CASTER} espolvorea algo de {ACTION}!",
      },
      {
        type: "stateChange",
        recover: 10,
      },
      {
        type: "textMessage",
        text: "{CASTER} recupera HP!",
      },
    ]
  },
}