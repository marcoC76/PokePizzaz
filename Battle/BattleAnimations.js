window.BattleAnimations = {
  async spin(event, onComplete) {
    const element = event.caster.pizzaElement;
    const animationClassName = event.caster.team === "player" ? "battle-spin-right" : "battle-spin-left";
    element.classList.add(animationClassName);

    //Remove class when animation is fully complete
    element.addEventListener("animationend", () => {
      element.classList.remove(animationClassName);
    }, {
      once: true
    });

    //Continue battle cycle right around when the pizzas collide
    await utils.wait(100);
    onComplete();
  },

  async glob(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("glob-orb");
    div.classList.add(caster.team === "player" ? "battle-glob-right" : "battle-glob-left");

    div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `);


    //Remove class when animation is fully complete
    div.addEventListener("animationend", () => {
      div.remove();
    });

    //Add to scene
    document.querySelector(".Battle").appendChild(div);

    await utils.wait(820);
    onComplete();
  },

  async cut(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("cut-blob");
    div.classList.add(caster.team === "player" ? "battle-cut-right" : "battle-cut-left");

    if (caster.team === "player") {
      div.innerHTML = (`
      <svg id="corteSVG" class=""  viewBox="0 0 600 600"><path d="M412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902C370.979008992513 37.23777880368527 547.9020792643229 198.6014116416166 545.97900390625 286.3636523693591C544.0559285481771 374.1258930971016 359.4405568440755 563.8112231701405 337.2377624511719 563.2867480724842C315.03496805826825 562.762272974828 410.8391621907552 370.9790425111641 412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902 " fill="${event.color}" ></path></svg>
      `);
    }else{
      div.innerHTML = (`
      <svg id="corteSVG" class=" rota-horizontal"  viewBox="0 0 600 600"><path d="M412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902C370.979008992513 37.23777880368527 547.9020792643229 198.6014116416166 545.97900390625 286.3636523693591C544.0559285481771 374.1258930971016 359.4405568440755 563.8112231701405 337.2377624511719 563.2867480724842C315.03496805826825 562.762272974828 410.8391621907552 370.9790425111641 412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902 " fill="${event.color}" ></path></svg>
      `);

    }



    //Remove class when animation is fully complete
    div.addEventListener("animationend", () => {
      div.remove();
    });

    //Add to scene
    document.querySelector(".Battle").appendChild(div);

    await utils.wait(820);
    onComplete();
  }
}