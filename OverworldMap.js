class OverworldMap {
  constructor(config) {
    this.overworld = null;
    this.gameObjects = config.gameObjects;
    this.cutsceneSpaces = config.cutsceneSpaces || {};
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.isCutscenePlaying = false;
    this.isPaused = false;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    )
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    )
  }

  isSpaceTaken(currentX, currentY, direction) {
    const {
      x,
      y
    } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.keys(this.gameObjects).forEach(key => {

      let object = this.gameObjects[key];
      object.id = key;

      //TODO: determine if this object should actually mount
      object.mount(this);

    })
  }

  async startCutscene(events) {
    this.isCutscenePlaying = true;

    for (let i = 0; i < events.length; i++) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      })
      const result = await eventHandler.init();
      if (result === "LOST_BATTLE") {
        break;
      }
    }
    this.isCutscenePlaying = false;
  }

  checkForActionCutscene() {
    const hero = this.gameObjects["hero"];
    const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.gameObjects).find(object => {
      return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
    });
    if (!this.isCutscenePlaying && match && match.talking.length) {

      const relevantScenario = match.talking.find(scenario => {
        return (scenario.required || []).every(sf => {
          return playerState.storyFlags[sf]
        })
      })
      relevantScenario && this.startCutscene(relevantScenario.events)
    }
  }

  checkForFootstepCutscene() {
    const hero = this.gameObjects["hero"];
    const match = this.cutsceneSpaces[`${hero.x},${hero.y}`];
    if (!this.isCutscenePlaying && match) {
      this.startCutscene(match[0].events)
    }
  }

  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x, y) {
    delete this.walls[`${x},${y}`]
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const {
      x,
      y
    } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }

}

window.OverworldMaps = {
  DemoRoom: {
    id: "DemoRoom",
    lowerSrc: "images/maps/DemoLower.png",
    upperSrc: "images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npcC: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(8),
        src: "images/characters/people/npc1.png",
        behaviorLoop: [{
            type: "stand",
            direction: "left",
            time: 500,
          },
          {
            type: "stand",
            direction: "down",
            time: 500,
          },
          {
            type: "stand",
            direction: "right",
            time: 500,
          },
          {
            type: "stand",
            direction: "up",
            time: 500,
          },
          {
            type: "walk",
            direction: "left",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "walk",
            direction: "right",
          },
          {
            type: "walk",
            direction: "up",
          },
        ],
      }),
      npcB: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(5),
        src: "images/characters/people/erio.png",
        talking: [{
          events: [{
              type: "textMessage",
              text: "Bahaha!",
              faceHero: "npcB"
            },
            {
              type: "addStoryFlag",
              flag: "TALKED_TO_ERIO"
            }
            //{ type: "battle", enemyId: "erio" }
          ]
        }]
        // behaviorLoop: [
        //   { type: "walk",  direction: "left" },
        //   { type: "stand",  direction: "up", time: 800 },
        //   { type: "walk",  direction: "up" },
        //   { type: "walk",  direction: "right" },
        //   { type: "walk",  direction: "down" },
        // ]
      }),
      pizzaStone: new PizzaStone({
        x: utils.withGrid(2),
        y: utils.withGrid(7),
        storyFlag: "USED_PIZZA_STONE",
        pizzas: ["v001", "f001"],
      }),
    },
    walls: {
      [utils.asGridCoord(1, 3)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(3, 3)]: true,
      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(8, 4)]: true,
      [utils.asGridCoord(9, 3)]: true,
      [utils.asGridCoord(10, 3)]: true,
      [utils.asGridCoord(11, 4)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(11, 8)]: true,
      [utils.asGridCoord(11, 9)]: true,
      [utils.asGridCoord(0, 4)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(1, 10)]: true,
      [utils.asGridCoord(2, 10)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(6, 10)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(10, 10)]: true,
      [utils.asGridCoord(11, 10)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
    },
    cutsceneSpaces: {
      [utils.asGridCoord(7, 4)]: [{
        events: [{
            who: "npcB",
            type: "walk",
            direction: "left"
          },
          {
            who: "npcB",
            type: "stand",
            direction: "up",
            time: 500
          },
          {
            type: "textMessage",
            text: "No puedes estar ahi!"
          },
          {
            who: "npcB",
            type: "walk",
            direction: "right"
          },
          {
            who: "hero",
            type: "walk",
            direction: "down"
          },
          {
            who: "hero",
            type: "walk",
            direction: "left"
          },
        ]
      }],
      [utils.asGridCoord(5, 10)]: [{
        events: [{
          type: "changeMap",
          map: "StreetEste",
          x: utils.withGrid(4),
          y: utils.withGrid(7),
          direction: "down"
        }]
      }]
    }
  },
  DemoRoom2: {
    id: "DemoRoom2",
    lowerSrc: "images/maps/DemoLower4.png",
    upperSrc: "images/maps/DemoUpper4.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npcC: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(8),
        src: "images/characters/people/npc1.png",
        behaviorLoop: [{
            type: "stand",
            direction: "left",
            time: 500,
          },
          {
            type: "stand",
            direction: "down",
            time: 500,
          },
          {
            type: "stand",
            direction: "right",
            time: 500,
          },
          {
            type: "stand",
            direction: "up",
            time: 500,
          },
          {
            type: "walk",
            direction: "left",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "walk",
            direction: "right",
          },
          {
            type: "walk",
            direction: "up",
          },
        ],
      }),
      npcB: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(5),
        src: "images/characters/people/erio.png",
        talking: [{
          events: [{
              type: "textMessage",
              text: "Bahaha!",
              faceHero: "npcB"
            },
            {
              type: "addStoryFlag",
              flag: "TALKED_TO_ERIO"
            }
            //{ type: "battle", enemyId: "erio" }
          ]
        }]
        // behaviorLoop: [
        //   { type: "walk",  direction: "left" },
        //   { type: "stand",  direction: "up", time: 800 },
        //   { type: "walk",  direction: "up" },
        //   { type: "walk",  direction: "right" },
        //   { type: "walk",  direction: "down" },
        // ]
      }),
      pizzaStone: new PizzaStone({
        x: utils.withGrid(2),
        y: utils.withGrid(7),
        storyFlag: "USED_PIZZA_STONE",
        pizzas: ["v001", "f001"],
      }),
    },
    walls: {
      [utils.asGridCoord(1, 3)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(3, 3)]: true,
      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(8, 4)]: true,
      [utils.asGridCoord(9, 3)]: true,
      [utils.asGridCoord(10, 3)]: true,
      [utils.asGridCoord(11, 4)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(11, 8)]: true,
      [utils.asGridCoord(11, 9)]: true,
      [utils.asGridCoord(0, 4)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(1, 10)]: true,
      [utils.asGridCoord(2, 10)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(6, 10)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(10, 10)]: true,
      [utils.asGridCoord(11, 10)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
    },
    cutsceneSpaces: {
      [utils.asGridCoord(7, 4)]: [{
        events: [{
            who: "npcB",
            type: "walk",
            direction: "left"
          },
          {
            who: "npcB",
            type: "stand",
            direction: "up",
            time: 500
          },
          {
            type: "textMessage",
            text: "No puedes estar ahi!"
          },
          {
            who: "npcB",
            type: "walk",
            direction: "right"
          },
          {
            who: "hero",
            type: "walk",
            direction: "down"
          },
          {
            who: "hero",
            type: "walk",
            direction: "left"
          },
        ]
      }],
      [utils.asGridCoord(5, 10)]: [{
        events: [{
          type: "changeMap",
          map: "StreetEste",
          x: utils.withGrid(10),
          y: utils.withGrid(6),
          direction: "down"
        }]
      }]
    }
  },
  Kitchen: {
    id: "Kitchen",
    lowerSrc: "images/maps/KitchenLower.png",
    upperSrc: "images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(10),
        y: utils.withGrid(5),
      }),
      kitchenNpcA: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(5),
        direction: "up",
        src: "images/characters/people/npc8.png",
        talking: [{
          events: [{
            type: "textMessage",
            text: "** No quiere hablar contigo **",
          }, ]
        }]
      }),
      kitchenNpcB: new Person({
        x: utils.withGrid(3),
        y: utils.withGrid(6),
        src: "images/characters/people/npc3.png",
        talking: [{
          events: [{
            type: "textMessage",
            text: "La gente toma sus trabajos muy seriamente",
            faceHero: "kitchenNpcB"
          }, ]
        }]
      }),
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5, 10)]: [{
        events: [{
          type: "changeMap",
          map: "DiningRoom",
          x: utils.withGrid(7),
          y: utils.withGrid(3),
          direction: "down"
        }]
      }],
      [utils.asGridCoord(10, 6)]: [{
        disqualify: ["SEEN_INTRO"],
        events: [{
            type: "addStoryFlag",
            flag: "SEEN_INTRO"
          },
          {
            type: "textMessage",
            text: "* Estabas picando algunos ingredientes, en tu primer dia como ayudante de cheff. *"
          },
          {
            type: "walk",
            who: "kitchenNpcA",
            direction: "down"
          },
          {
            type: "stand",
            who: "kitchenNpcA",
            direction: "right",
            time: 200
          },
          {
            type: "stand",
            who: "hero",
            direction: "left",
            time: 200
          },
          {
            type: "textMessage",
            text: "Vaya... este es tu mejor trabajo?"
          },
          {
            type: "textMessage",
            text: "Estos peperonis son inestables. Su forma esta completamente mal!"
          },
          {
            type: "textMessage",
            text: "Y no me hagas hablar de los hongos..."
          },
          {
            type: "textMessage",
            text: "Tu no puedes hacer esto nunca en una pizza!"
          },
          {
            type: "stand",
            who: "kitchenNpcA",
            direction: "right",
            time: 200
          },
          {
            type: "walk",
            who: "kitchenNpcA",
            direction: "up"
          },
          {
            type: "stand",
            who: "kitchenNpcA",
            direction: "up",
            time: 300
          },
          {
            type: "stand",
            who: "hero",
            direction: "down",
            time: 400
          },
          {
            type: "textMessage",
            text: "* La competicion es dura! Deberias invertir algo de tiempo en mejorar tu sleccion de pizzas y tus habilidades. *"
          },
          {
            type: "changeMap",
            map: "Street",
            x: utils.withGrid(5),
            y: utils.withGrid(10),
            direction: "down"
          },
        ]
      }]
    },
    walls: {
      [utils.asGridCoord(2, 4)]: true,
      [utils.asGridCoord(3, 4)]: true,
      [utils.asGridCoord(5, 4)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(7, 4)]: true,
      [utils.asGridCoord(8, 4)]: true,
      [utils.asGridCoord(11, 4)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(12, 5)]: true,
      [utils.asGridCoord(1, 5)]: true,
      [utils.asGridCoord(1, 6)]: true,
      [utils.asGridCoord(1, 7)]: true,
      [utils.asGridCoord(1, 9)]: true,
      [utils.asGridCoord(2, 9)]: true,
      [utils.asGridCoord(6, 7)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(9, 7)]: true,
      [utils.asGridCoord(10, 7)]: true,
      [utils.asGridCoord(9, 9)]: true,
      [utils.asGridCoord(10, 9)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(6, 10)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(11, 10)]: true,
      [utils.asGridCoord(12, 10)]: true,

      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(5, 11)]: true,

      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(9, 4)]: true,
      [utils.asGridCoord(10, 4)]: true,

      [utils.asGridCoord(13, 6)]: true,
      [utils.asGridCoord(13, 7)]: true,
      [utils.asGridCoord(13, 8)]: true,
      [utils.asGridCoord(13, 9)]: true,

    }
  },
  Street: {
    id: "Street",
    lowerSrc: "images/maps/StreetLower.png",
    upperSrc: "images/maps/StreetUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(30),
        y: utils.withGrid(10),
      }),
      streetNpcA: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(11),
        src: "images/characters/people/npc2.png",
        behaviorLoop: [{
            type: "stand",
            direction: "right",
            time: 1400,
          },
          {
            type: "stand",
            direction: "up",
            time: 900,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "Todos los chefs de pizza ambiciosos, buscan llegar a la avenida Anchovy.",
            faceHero: "streetNpcA"
          }, ]
        }]
      }),
      streetNpcB: new Person({
        x: utils.withGrid(31),
        y: utils.withGrid(12),
        src: "images/characters/people/npc7.png",
        behaviorLoop: [{
            type: "stand",
            direction: "up",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "No puedeo decidir entre mis toppins favoritos.",
            faceHero: "streetNpcB"
          }, ]
        }]
      }),
      streetNpcC: new Person({
        x: utils.withGrid(22),
        y: utils.withGrid(10),
        src: "images/characters/people/npc8.png",
        talking: [{
            required: ["streetBattle"],
            events: [{
              type: "textMessage",
              text: "Eres bastante capaz.",
              faceHero: "streetNpcC"
            }, ]
          },
          {
            events: [{
                type: "textMessage",
                text: "¡Deberías haberte quedado en casa!",
                faceHero: "streetNpcC"
              },
              {
                type: "battle",
                enemyId: "streetBattle"
              },
              {
                type: "addStoryFlag",
                flag: "streetBattle"
              },
            ]
          },
        ]
      }),
    },
    walls: function () {
      let walls = {};
      [
        "4,9", "5,8", "6,9", "7,9", "8,9", "9,9", "10,9", "11,9", "12,9", "13,8", "14,8", "15,7",
        "16,7", "17,7", "18,7", "19,7", "20,7", "21,7", "22,7", "23,7", "24,7", "24,6", "24,5", "26,5", "26,6", "26,7", "27,7", "28,8", "28,9", "29,8", "30,9", "31,9", "32,9", "33,9",
        "16,9", "17,9", "25,9", "26,9", "16,10", "17,10", "25,10", "26,10", "16,11", "17,11", "25,11", "26,11",
        "18,11", "19,11",
        "4,14", "5,14", "6,14", "7,14", "8,14", "9,14", "10,14", "11,14", "12,14", "13,14", "14,14", "15,14", "16,14", "17,14", "18,14", "19,14", "20,14", "21,14", "22,14", "23,14",
        "24,14", "25,14", "26,14", "27,14", "28,14", "29,14", "30,14", "31,14", "32,14", "33,14",
        "3,10", "3,11", "3,12", "3,13", "34,10", "34,11", "34,12", "34,13",
        "29,8", "25,4",
      ].forEach(coord => {
        let [x, y] = coord.split(",");
        walls[utils.asGridCoord(x, y)] = true;
      })
      return walls;
    }(),
    cutsceneSpaces: {
      [utils.asGridCoord(5, 9)]: [{
        events: [{
          type: "changeMap",
          map: "DiningRoom",
          x: utils.withGrid(6),
          y: utils.withGrid(12),
          direction: "up"
        }]
      }],
      [utils.asGridCoord(29, 9)]: [{
        events: [{
          type: "changeMap",
          map: "Shop",
          x: utils.withGrid(5),
          y: utils.withGrid(12),
          direction: "up"
        }]
      }],
      [utils.asGridCoord(25, 5)]: [{
        events: [{
          type: "changeMap",
          map: "StreetNorth",
          x: utils.withGrid(7),
          y: utils.withGrid(16),
          direction: "up"
        }]
      }]
    }
  },
  Shop: {
    id: "Shop",
    lowerSrc: "images/maps/PizzaShopLower.png",
    upperSrc: "images/maps/PizzaShopUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(7),
      }),
      shopNpcA: new Person({
        x: utils.withGrid(6),
        y: utils.withGrid(5),
        src: "images/characters/people/erio.png",
        talking: [{
          events: [{
            type: "textMessage",
            text: "Todas las rivalidades de los chefs han sido buenas para los negocios.",
            faceHero: "shopNpcA"
          }, ]
        }]
      }),
      shopNpcB: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(9),
        src: "images/characters/people/npc2.png",
        behaviorLoop: [{
          type: "stand",
          direction: "left",
          time: 400,
        }, ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¿Qué cáscara me hará un mejor chef?",
            faceHero: "shopNpcB"
          }, ]
        }]
      }),
      pizzaStone: new PizzaStone({
        x: utils.withGrid(1),
        y: utils.withGrid(4),
        storyFlag: "STONE_SHOP",
        pizzas: ["v002", "f002"],
      }),
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5, 12)]: [{
        events: [{
          type: "changeMap",
          map: "Street",
          x: utils.withGrid(29),
          y: utils.withGrid(9),
          direction: "down"
        }]
      }],
    },
    walls: {
      [utils.asGridCoord(2, 4)]: true,
      [utils.asGridCoord(2, 5)]: true,
      [utils.asGridCoord(2, 6)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(4, 6)]: true,
      [utils.asGridCoord(5, 6)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(9, 6)]: true,
      [utils.asGridCoord(9, 5)]: true,
      [utils.asGridCoord(9, 4)]: true,
      [utils.asGridCoord(3, 8)]: true,
      [utils.asGridCoord(3, 9)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(4, 8)]: true,
      [utils.asGridCoord(4, 9)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(7, 8)]: true,
      [utils.asGridCoord(7, 9)]: true,
      [utils.asGridCoord(8, 8)]: true,
      [utils.asGridCoord(8, 9)]: true,
      [utils.asGridCoord(1, 12)]: true,
      [utils.asGridCoord(2, 12)]: true,
      [utils.asGridCoord(3, 12)]: true,
      [utils.asGridCoord(4, 12)]: true,
      [utils.asGridCoord(6, 12)]: true,
      [utils.asGridCoord(7, 12)]: true,
      [utils.asGridCoord(8, 12)]: true,
      [utils.asGridCoord(9, 12)]: true,
      [utils.asGridCoord(10, 12)]: true,
      [utils.asGridCoord(0, 4)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(0, 10)]: true,
      [utils.asGridCoord(0, 11)]: true,
      [utils.asGridCoord(11, 4)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(11, 8)]: true,
      [utils.asGridCoord(11, 9)]: true,
      [utils.asGridCoord(11, 10)]: true,
      [utils.asGridCoord(11, 11)]: true,

      [utils.asGridCoord(1, 3)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(3, 3)]: true,
      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(6, 3)]: true,
      [utils.asGridCoord(7, 3)]: true,
      [utils.asGridCoord(8, 3)]: true,
      [utils.asGridCoord(9, 3)]: true,
      [utils.asGridCoord(10, 3)]: true,

      [utils.asGridCoord(5, 13)]: true,
    }
  },
  GreenKitchen: {
    id: "GreenKitchen",
    lowerSrc: "images/maps/GreenKitchenLower.png",
    upperSrc: "images/maps/GreenKitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(8),
      }),
      greenKitchenNpcA: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
        src: "images/characters/people/npc2.png",
        behaviorLoop: [{
            type: "stand",
            direction: "up",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "El chef Rootie utiliza el mejor condimento.",
            faceHero: "greenKitchenNpcA"
          }, ]
        }]
      }),
      greenKitchenNpcB: new Person({
        x: utils.withGrid(1),
        y: utils.withGrid(8),
        src: "images/characters/people/npc3.png",
        behaviorLoop: [{
            type: "stand",
            direction: "up",
            time: 900,
          },
          {
            type: "walk",
            direction: "down"
          },
          {
            type: "walk",
            direction: "down"
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
          {
            type: "walk",
            direction: "up"
          },
          {
            type: "walk",
            direction: "up"
          },
          {
            type: "stand",
            direction: "up",
            time: 600,
          },
          {
            type: "stand",
            direction: "right",
            time: 900,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "Finalmente... una pizzería que me atrapa!",
            faceHero: "greenKitchenNpcB"
          }, ]
        }]
      }),
      greenKitchenNpcC: new Person({
        x: utils.withGrid(3),
        y: utils.withGrid(5),
        src: "images/characters/people/secondBoss.png",
        talking: [{
            required: ["chefRootie"],
            events: [{
              type: "textMessage",
              faceHero: ["greenKitchenNpcC"],
              text: "Mis verduras necesitan más crecimiento."
            }]
          },
          {
            events: [{
                type: "textMessage",
                text: "¡Las verduras son el combustible para el corazón y el alma!",
                faceHero: "greenKitchenNpcC"
              },
              {
                type: "battle",
                enemyId: "chefRootie",
                arena: "green-kitchen"
              },
              {
                type: "addStoryFlag",
                flag: "chefRootie"
              },
            ]
          }
        ]
      }),
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5, 12)]: [{
        events: [{
          type: "changeMap",
          map: "StreetNorth",
          x: utils.withGrid(7),
          y: utils.withGrid(5),
          direction: "down"
        }]
      }],
    },
    walls: {
      [utils.asGridCoord(1, 4)]: true,
      [utils.asGridCoord(3, 4)]: true,
      [utils.asGridCoord(4, 4)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(7, 4)]: true,
      [utils.asGridCoord(8, 5)]: true,
      [utils.asGridCoord(9, 4)]: true,
      [utils.asGridCoord(1, 6)]: true,
      [utils.asGridCoord(2, 6)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(4, 6)]: true,
      [utils.asGridCoord(5, 6)]: true,
      [utils.asGridCoord(6, 6)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(4, 7)]: true,
      [utils.asGridCoord(6, 7)]: true,
      [utils.asGridCoord(2, 9)]: true,
      [utils.asGridCoord(3, 9)]: true,
      [utils.asGridCoord(4, 9)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(1, 12)]: true,
      [utils.asGridCoord(2, 12)]: true,
      [utils.asGridCoord(3, 12)]: true,
      [utils.asGridCoord(4, 12)]: true,
      [utils.asGridCoord(6, 12)]: true,
      [utils.asGridCoord(7, 12)]: true,
      [utils.asGridCoord(8, 12)]: true,
      [utils.asGridCoord(9, 12)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(0, 10)]: true,
      [utils.asGridCoord(0, 11)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(10, 6)]: true,
      [utils.asGridCoord(10, 7)]: true,
      [utils.asGridCoord(10, 8)]: true,
      [utils.asGridCoord(10, 9)]: true,
      [utils.asGridCoord(10, 10)]: true,
      [utils.asGridCoord(10, 11)]: true,
      [utils.asGridCoord(5, 13)]: true,
    }
  },
  StreetNorth: {
    id: "StreetNorth",
    lowerSrc: "images/maps/StreetNorthLower.png",
    upperSrc: "images/maps/StreetNorthUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(8),
      }),
      streetNorthNpcA: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(6),
        src: "images/characters/people/npc1.png",
        behaviorLoop: [{
            type: "walk",
            direction: "left",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "walk",
            direction: "right",
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
          {
            type: "walk",
            direction: "up",
          },
          {
            type: "stand",
            direction: "up",
            time: 400,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡Este lugar es famoso por las pizzas vegetarianas!",
            faceHero: "streetNorthNpcA"
          }, ]
        }]
      }),
      streetNorthNpcD: new Person({
        x: utils.withGrid(6),
        y: utils.withGrid(9),
        src: "images/characters/people/erio.png",
        behaviorLoop: [{
            type: "walk",
            direction: "up",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡Saca el bajon!",
            faceHero: "streetNorthNpcD"
          }, ]
        }]
      }),
      streetNorthNpcB: new Person({
        x: utils.withGrid(4),
        y: utils.withGrid(12),
        src: "images/characters/people/npc3.png",
        behaviorLoop: [{
            type: "stand",
            direction: "up",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "Me encanta el olor fresco del ajo en el aire.",
            faceHero: "streetNorthNpcB"
          }, ]
        }]
      }),
      streetNorthNpcC: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(9),
        src: "images/characters/people/npc8.png",
        talking: [{
            required: ["streetNorthBattle"],
            events: [{
              type: "textMessage",
              text: "¿Podrías ser el Legendario?",
              faceHero: "streetNorthNpcC"
            }, ]
          },
          {
            events: [{
                type: "textMessage",
                text: "¡Este es mi territorio!",
                faceHero: "streetNorthNpcC"
              },
              {
                type: "battle",
                enemyId: "streetNorthBattle"
              },
              {
                type: "addStoryFlag",
                flag: "streetNorthBattle"
              },
            ]
          },
        ]
      }),
      pizzaStone: new PizzaStone({
        x: utils.withGrid(2),
        y: utils.withGrid(9),
        storyFlag: "STONE_STREET_NORTH",
        pizzas: ["v001", "f001"],
      }),

    },
    walls: {
      [utils.asGridCoord(2, 7)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(4, 5)]: true,
      [utils.asGridCoord(5, 5)]: true,
      [utils.asGridCoord(6, 5)]: true,
      [utils.asGridCoord(8, 5)]: true,
      [utils.asGridCoord(9, 5)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(12, 6)]: true,
      [utils.asGridCoord(13, 6)]: true,
      [utils.asGridCoord(7, 8)]: true,
      [utils.asGridCoord(8, 8)]: true,
      [utils.asGridCoord(7, 9)]: true,
      [utils.asGridCoord(8, 9)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(10, 10)]: true,
      [utils.asGridCoord(2, 15)]: true,
      [utils.asGridCoord(3, 15)]: true,
      [utils.asGridCoord(4, 15)]: true,
      [utils.asGridCoord(5, 15)]: true,
      [utils.asGridCoord(6, 15)]: true,
      [utils.asGridCoord(6, 16)]: true,
      [utils.asGridCoord(8, 16)]: true,
      [utils.asGridCoord(8, 15)]: true,
      [utils.asGridCoord(9, 15)]: true,
      [utils.asGridCoord(10, 15)]: true,
      [utils.asGridCoord(11, 15)]: true,
      [utils.asGridCoord(12, 15)]: true,
      [utils.asGridCoord(13, 15)]: true,

      [utils.asGridCoord(1, 8)]: true,
      [utils.asGridCoord(1, 9)]: true,
      [utils.asGridCoord(1, 10)]: true,
      [utils.asGridCoord(1, 11)]: true,
      [utils.asGridCoord(1, 12)]: true,
      [utils.asGridCoord(1, 13)]: true,
      [utils.asGridCoord(1, 14)]: true,

      //[utils.asGridCoord(14, 7)]: true,
      [utils.asGridCoord(14, 8)]: true,
      [utils.asGridCoord(15, 8)]: true,
      [utils.asGridCoord(14, 9)]: true,
      [utils.asGridCoord(14, 10)]: true,
      [utils.asGridCoord(14, 11)]: true,
      [utils.asGridCoord(14, 12)]: true,
      [utils.asGridCoord(14, 13)]: true,
      [utils.asGridCoord(14, 14)]: true,

      [utils.asGridCoord(7, 17)]: true,
      [utils.asGridCoord(7, 4)]: true,
    },
    cutsceneSpaces: {
      [utils.asGridCoord(7, 5)]: [{
        events: [{
          type: "changeMap",
          map: "GreenKitchen",
          x: utils.withGrid(5),
          y: utils.withGrid(12),
          direction: "up"
        }]
      }],
      [utils.asGridCoord(15, 7)]: [{
        events: [{
          type: "changeMap",
          map: "StreetEste",
          x: utils.withGrid(0),
          y: utils.withGrid(8),
          direction: "right"
        }]
      }],
      [utils.asGridCoord(7, 16)]: [{
        events: [{
          type: "changeMap",
          map: "Street",
          x: utils.withGrid(25),
          y: utils.withGrid(5),
          direction: "down"
        }]
      }],
    }
  },
  StreetEste: {
    id: "StreetEste",
    lowerSrc: "images/maps/StreetEsteLower.png",
    upperSrc: "images/maps/StreetEsteUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(3),
        y: utils.withGrid(8),
      }),
      streetEsteNpcA: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(12),
        src: "images/characters/people/npc15.png",
        behaviorLoop: [{
            type: "walk",
            direction: "left",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "walk",
            direction: "right",
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
          {
            type: "walk",
            direction: "up",
          },
          {
            type: "stand",
            direction: "up",
            time: 400,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡Aqui aun no hay nada!",
            faceHero: "streetEsteNpcA"
          }, ]
        }]
      }),
      streetEsteNpcD: new Person({
        x: utils.withGrid(6),
        y: utils.withGrid(9),
        src: "images/characters/people/hero2.png",
        behaviorLoop: [{
            type: "walk",
            direction: "up",
          },
          {
            type: "walk",
            direction: "down",
          },
          {
            type: "stand",
            direction: "down",
            time: 400,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡No han terminado este nivel!",
            faceHero: "streetEsteNpcD"
          }, ]
        }]
      }),
      streetEsteNpcC: new Person({
        x: utils.withGrid(10),
        y: utils.withGrid(10),
        src: "images/characters/people/npc8.png",
        talking: [{
            required: ["streetEsteBattle"],
            events: [{
              type: "textMessage",
              text: "¿Podrias ser menos brusco?",
              faceHero: "streetEsteNpcC"
            }, ]
          },
          {
            events: [{
                type: "textMessage",
                text: "¡Fuera de mi zona!",
                faceHero: "streetEsteNpcC"
              },
              {
                type: "battle",
                enemyId: "streetEsteBattle"
              },
              {
                type: "addStoryFlag",
                flag: "streetEsteBattle"
              },
            ]
          },
        ]
      }),
      pizzaStone: new PizzaStone({
        x: utils.withGrid(2),
        y: utils.withGrid(9),
        storyFlag: "STONE_STREET_ESTE",
        pizzas: ["n001", "s001"],
      }),

    },
    walls: {
      [utils.asGridCoord(2, 7)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(3, 6)]: true,
      [utils.asGridCoord(4, 5)]: true,
      [utils.asGridCoord(5, 5)]: true,
      [utils.asGridCoord(6, 5)]: true,
      [utils.asGridCoord(8, 5)]: true,
      [utils.asGridCoord(9, 5)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(12, 6)]: true,
      [utils.asGridCoord(13, 6)]: true,


      [utils.asGridCoord(5, 7)]: true,
      [utils.asGridCoord(5, 10)]: true,
      [utils.asGridCoord(5, 11)]: true,
      [utils.asGridCoord(6, 11)]: true,
      [utils.asGridCoord(5, 12)]: true,
      [utils.asGridCoord(6, 12)]: true,
      [utils.asGridCoord(9, 6)]: true,
      [utils.asGridCoord(6, 10)]: true,

      [utils.asGridCoord(6, 7)]: true,
      [utils.asGridCoord(7, 7)]: true,

      [utils.asGridCoord(2, 15)]: true,
      [utils.asGridCoord(3, 15)]: true,
      [utils.asGridCoord(4, 15)]: true,
      [utils.asGridCoord(5, 15)]: true,
      [utils.asGridCoord(6, 15)]: true,
      [utils.asGridCoord(6, 16)]: true,
      [utils.asGridCoord(8, 16)]: true,
      [utils.asGridCoord(7, 15)]: true,
      [utils.asGridCoord(8, 15)]: true,
      [utils.asGridCoord(9, 15)]: true,
      [utils.asGridCoord(10, 15)]: true,
      [utils.asGridCoord(11, 15)]: true,
      [utils.asGridCoord(12, 15)]: true,
      [utils.asGridCoord(13, 15)]: true,

      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(1, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(1, 9)]: true,
      [utils.asGridCoord(1, 10)]: true,
      [utils.asGridCoord(1, 11)]: true,
      [utils.asGridCoord(1, 12)]: true,
      [utils.asGridCoord(1, 13)]: true,
      [utils.asGridCoord(1, 14)]: true,
      [utils.asGridCoord(7, 12)]: true,
      [utils.asGridCoord(8, 12)]: true,

      [utils.asGridCoord(14, 7)]: true,
      [utils.asGridCoord(14, 8)]: true,
      [utils.asGridCoord(15, 8)]: true,
      [utils.asGridCoord(14, 9)]: true,
      [utils.asGridCoord(14, 10)]: true,
      [utils.asGridCoord(14, 11)]: true,
      [utils.asGridCoord(14, 12)]: true,
      [utils.asGridCoord(14, 13)]: true,
      [utils.asGridCoord(14, 14)]: true,

      [utils.asGridCoord(7, 17)]: true,
      [utils.asGridCoord(7, 4)]: true,
    },
    cutsceneSpaces: {
      [utils.asGridCoord(0, 8)]: [{
        events: [{
          type: "changeMap",
          map: "StreetNorth",
          x: utils.withGrid(15),
          y: utils.withGrid(7),
          direction: "left"
        }]
      }],
      [utils.asGridCoord(4, 7)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom",
          x: utils.withGrid(5),
          y: utils.withGrid(10),
          direction: "up"
        }]
      }],
      [utils.asGridCoord(10, 6)]: [{
        events: [{
          type: "changeMap",
          map: "DemoRoom2",
          x: utils.withGrid(5),
          y: utils.withGrid(10),
          direction: "up"
        }]
      }],
    }
  },
  DiningRoom: {
    id: "DiningRoom",
    lowerSrc: "images/maps/DiningRoomLower.png",
    upperSrc: "images/maps/DiningRoomUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(8),
      }),
      diningRoomNpcA: new Person({
        x: utils.withGrid(12),
        y: utils.withGrid(8),
        src: "images/characters/people/npc8.png",
        talking: [{
            required: ["diningRoomBattle"],
            events: [{
              type: "textMessage",
              text: "Tal vez no estoy listo para este lugar.",
              faceHero: "diningRoomNpcA"
            }, ]
          },
          {
            events: [{
                type: "textMessage",
                text: "¡¿Crees que tienes lo que se necesita para cocinar aquí?!",
                faceHero: "diningRoomNpcA"
              },
              {
                type: "battle",
                enemyId: "diningRoomBattle",
                arena: "dining-room"
              },
              {
                type: "addStoryFlag",
                flag: "diningRoomBattle"
              },
            ]
          },
        ]
      }),
      diningRoomNpcB: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(5),
        src: "images/characters/people/npc4.png",
        talking: [{
          events: [{
            type: "textMessage",
            text: "La gente viene de todas partes a cenar aquí.",
            faceHero: "diningRoomNpcB"
          }, ]
        }, ]
      }),
      diningRoomNpcC: new Person({
        x: utils.withGrid(2),
        y: utils.withGrid(8),
        src: "images/characters/people/npc7.png",
        behaviorLoop: [{
            type: "stand",
            direction: "right",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 700,
          },
          {
            type: "stand",
            direction: "right",
            time: 800,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡Tuve tanta suerte de anotar una reserva!",
            faceHero: "diningRoomNpcC"
          }, ]
        }, ]
      }),
      diningRoomNpcD: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(9),
        src: "images/characters/people/npc1.png",
        behaviorLoop: [{
            type: "stand",
            direction: "right",
            time: 1200,
          },
          {
            type: "stand",
            direction: "down",
            time: 900,
          },
          {
            type: "stand",
            direction: "left",
            time: 800,
          },
          {
            type: "stand",
            direction: "down",
            time: 700,
          },
          {
            type: "stand",
            direction: "right",
            time: 400,
          },
          {
            type: "stand",
            direction: "up",
            time: 800,
          },
        ],
        talking: [{
          events: [{
            type: "textMessage",
            text: "¡He estado soñando con esta pizza durante semanas!",
            faceHero: "diningRoomNpcD"
          }, ]
        }, ]
      }),
    },
    cutsceneSpaces: {
      [utils.asGridCoord(7, 3)]: [{
        events: [{
          type: "changeMap",
          map: "Kitchen",
          x: utils.withGrid(5),
          y: utils.withGrid(10),
          direction: "up"
        }]
      }],
      [utils.asGridCoord(6, 12)]: [{
        events: [{
          type: "changeMap",
          map: "Street",
          x: utils.withGrid(5),
          y: utils.withGrid(9),
          direction: "down"
        }]
      }],
    },
    walls: {
      [utils.asGridCoord(7, 2)]: true,
      [utils.asGridCoord(6, 13)]: true,
      [utils.asGridCoord(1, 5)]: true,
      [utils.asGridCoord(2, 5)]: true,
      [utils.asGridCoord(3, 5)]: true,
      [utils.asGridCoord(4, 5)]: true,
      [utils.asGridCoord(4, 4)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(6, 5)]: true,
      [utils.asGridCoord(8, 3)]: true,
      [utils.asGridCoord(9, 4)]: true,
      [utils.asGridCoord(10, 5)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(12, 5)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(12, 7)]: true,
      [utils.asGridCoord(2, 7)]: true,
      [utils.asGridCoord(3, 7)]: true,
      [utils.asGridCoord(4, 7)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
      [utils.asGridCoord(9, 7)]: true,
      [utils.asGridCoord(2, 10)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(1, 12)]: true,
      [utils.asGridCoord(2, 12)]: true,
      [utils.asGridCoord(3, 12)]: true,
      [utils.asGridCoord(4, 12)]: true,
      [utils.asGridCoord(5, 12)]: true,
      [utils.asGridCoord(7, 12)]: true,
      [utils.asGridCoord(8, 12)]: true,
      [utils.asGridCoord(9, 12)]: true,
      [utils.asGridCoord(10, 12)]: true,
      [utils.asGridCoord(11, 12)]: true,
      [utils.asGridCoord(12, 12)]: true,
      [utils.asGridCoord(0, 4)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(0, 10)]: true,
      [utils.asGridCoord(0, 11)]: true,
      [utils.asGridCoord(13, 4)]: true,
      [utils.asGridCoord(13, 5)]: true,
      [utils.asGridCoord(13, 6)]: true,
      [utils.asGridCoord(13, 8)]: true,
      [utils.asGridCoord(13, 9)]: true,
      [utils.asGridCoord(13, 10)]: true,
      [utils.asGridCoord(13, 11)]: true,
    }
  },
}