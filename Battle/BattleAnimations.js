window.BattleAnimations = {
  async spin(event, onComplete) {
    const element = event.caster.pizzaElement;
    const animationClassName = event.caster.team === "player" ? "battle-spin-right" : "battle-spin-left";
    element.classList.add(animationClassName);

    //Remove class when animation is fully complete
    element.addEventListener("animationend", () => {
      element.classList.remove(animationClassName);
    }, { once:true });

    //Continue battle cycle right around when the pizzas collide
    await utils.wait(100);
    onComplete();
  },

  async glob(event, onComplete) {
    const {caster} = event;
    let div = document.createElement("div");
    div.classList.add("glob-orb");
    div.classList.add(caster.team === "player" ? "battle-glob-right" : "battle-glob-left");

    div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `);
    /*div.innerHTML = (`
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M231.293701171875,544.4055786132812C202.27272288004556,505.5943908691406,216.25873819986978,112.23776245117188,248.07691955566406,72.37762451171875C279.8951009114583,32.517486572265625,424.99999237060547,226.57342529296875,422.2027893066406,305.2447509765625C419.4055862426758,383.91607666015625,260.3146794637044,583.2167663574219,231.293701171875,544.4055786132812C202.27272288004556,505.5943908691406,216.25873819986978,112.23776245117188,248.07691955566406,72.37762451171875" fill="${event.color}" ></path></svg>
    `);*/

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
    const {caster} = event;
    let div = document.createElement("div");
    div.classList.add("cut-blob");
    div.classList.add(caster.team === "player" ? "battle-cut-right" : "battle-cut-left");

    div.innerHTML = (`
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 600 600"><path d="M412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902C370.979008992513 37.23777880368527 547.9020792643229 198.6014116416166 545.97900390625 286.3636523693591C544.0559285481771 374.1258930971016 359.4405568440755 563.8112231701405 337.2377624511719 563.2867480724842C315.03496805826825 562.762272974828 410.8391621907552 370.9790425111641 412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902 " fill="${event.color}" transform="matrix(1.05,0,0,1.05,-21.997394561767578,-14.999996185302734)"></path><path d="M131.21810736327382 192.43699409099636C133.14118272134675 104.67475336325387 45.02929002115144 -54.590979084052464 67.23208441405507 -54.066503986396214C89.4348788069587 -53.542028888739964 266.35794907876857 107.82160394919137 264.4348737206957 195.58384467693386C262.5117983626228 283.3460854046764 77.8964266585212 473.0314154777152 55.693632265617566 472.50694038005895C33.49083787271394 471.9824652824027 129.29503200520088 280.1992348187389 131.21810736327382 192.43699409099636C133.14118272134675 104.67475336325387 45.02929002115144 -54.590979084052464 67.23208441405507 -54.066503986396214 " fill-opacity="1" fill="${event.color}" opacity="1" stroke-opacity="1" stroke-width="0" stroke="hsl(340, 45%, 30%)" transform="matrix(0.8552315625,0,0,0.8552315625,97.3081696559668,109.00529807241921)"></path></svg>
    `);
  
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