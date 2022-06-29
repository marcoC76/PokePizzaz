class SubmissionMenu { 
  constructor({ caster, enemy, onComplete, items, replacements }) {
    this.caster = caster;
    this.enemy = enemy;
    this.replacements = replacements;
    this.onComplete = onComplete;

    let quantityMap = {};
    items.forEach(item => {
      if (item.team === caster.team) {
        let existing = quantityMap[item.actionId];
        if (existing) {
          existing.quantity += 1;
        } else {
          quantityMap[item.actionId] = {
            actionId: item.actionId,
            quantity: 1,
            instanceId: item.instanceId,
          }
       }
      }
    })
    this.items = Object.values(quantityMap);
  }

  getPages() {

    const backOption = {
      label: "Atras",
      description: "Regresar al menu anterior",
      handler: () => {
        this.keyboardMenu.setOptions(this.getPages().root)
      }
    };

    return {
      root: [
        {
          label: "Atacar",
          description: "Escoge un ataque",
          handler: () => {
            //Do something when chosen...
            this.keyboardMenu.setOptions( this.getPages().attacks )
          }
        },
        {
          label: "Objetos",
          description: "Escoge un objeto",
          handler: () => {
            //Go to items page...
            this.keyboardMenu.setOptions( this.getPages().items )
          }
        },
        {
          label: "Cambiar",
          description: "Cambia por otra pizza",
          handler: () => { 
            //See pizza options
            this.keyboardMenu.setOptions( this.getPages().replacements )
          }
        },
      ],
      attacks: [
        ...this.caster.actions.map(key => {
          const action = Actions[key];
          return {
            label: action.name,
            description: action.description,
            handler: () => {
              this.menuSubmit(action)
            }
          }
        }),
        backOption
      ],
      items: [
        ...this.items.map(item => {
          const action = Actions[item.actionId];
          return {
            label: action.name,
            description: action.description,
            right: () => {
              return "x"+item.quantity;
            },
            handler: () => {
              this.menuSubmit(action, item.instanceId)
            }
          }
        }),
        backOption
      ],
      replacements: [
        ...this.replacements.map(replacement => {
          return {
            label: replacement.name,
            description: replacement.description,
            handler: () => {
              //Swap me in, coach!
              this.menuSubmitReplacement(replacement)
            }
          }
        }),
        backOption
      ]
    }
  }

  menuSubmitReplacement(replacement) {
    this.keyboardMenu?.end();
    this.onComplete({
      replacement
    })
  }

  menuSubmit(action, instanceId=null) {

    this.keyboardMenu?.end();

    this.onComplete({
      action,
      target: action.targetType === "friendly" ? this.caster : this.enemy,
      instanceId
    })
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  decide() {
    
    /* desordenamos el arreglo cada vez que se decide */
    let actionsRndm = this.caster.actions.sort(function() { 
      return Math.random() - 0.5 
    });
    
    /* tomamos aleatoreamente una acction entre 0 y 1  */
    var slcAction = Math.random();
    if (slcAction < 0.5){

      slcAction = 0
    }else{
      slcAction= 1

    }
 /*  thids sort(function() { return Math.random() - 0.5 });*/
    this.menuSubmit(Actions[ actionsRndm[slcAction]]);
  }

  showMenu(container) {
    this.keyboardMenu = new KeyboardMenu();
    this.keyboardMenu.init(container);
    this.keyboardMenu.setOptions( this.getPages().root )
  }

  init(container) {

    if (this.caster.isPlayerControlled) {
      //Show some UI
      this.showMenu(container)
    } else {
      this.decide()
    }
  }
}