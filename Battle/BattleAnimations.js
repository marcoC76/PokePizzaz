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

  async globGotaAceite(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("globGotaAceite-orb");
    div.classList.add(caster.team === "player" ? "battle-globGotaAceite-right" : "battle-globGotaAceite-left");

    div.innerHTML = (`
    <svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
    <g id="color">
      <path fill="${event.color}" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
      <path fill="${event.colorShadow}" d="M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265,0,0,22-18.1265,0-64.0018"/>
    </g>
    <g id="line">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
    </g>
  </svg>
    `);
    /* div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `); */


    //Remove class when animation is fully complete
    div.addEventListener("animationend", () => {
      div.remove();
    });

    //Add to scene
    document.querySelector(".Battle").appendChild(div);

    await utils.wait(820);
    onComplete();
  },
  async globGotaTabasco(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("globGotaTabasco-orb");
    div.classList.add(caster.team === "player" ? "battle-globGotaTabasco-right" : "battle-globGotaTabasco-left");

    div.innerHTML = (`
    <svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
    <g id="color">
      <path fill="${event.color}" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
      <path fill="${event.colorShadow}" d="M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265,0,0,22-18.1265,0-64.0018"/>
    </g>
    <g id="line">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
    </g>
  </svg>
    `);
    /* div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `); */


    //Remove class when animation is fully complete
    div.addEventListener("animationend", () => {
      div.remove();
    });

    //Add to scene
    document.querySelector(".Battle").appendChild(div);

    await utils.wait(820);
    onComplete();
  },
  async globGotaAbanera(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("globGotaAbanera-orb");
    div.classList.add(caster.team === "player" ? "battle-globGotaAbanera-right" : "battle-globGotaAbanera-left");

    div.innerHTML = (`
    <svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
    <g id="color">
      <path fill="${event.color}" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
      <path fill="${event.colorShadow}" d="M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265,0,0,22-18.1265,0-64.0018"/>
    </g>
    <g id="line">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"/>
    </g>
  </svg>
    `);
    /* div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `); */


    //Remove class when animation is fully complete
    div.addEventListener("animationend", () => {
      div.remove();
    });

    //Add to scene
    document.querySelector(".Battle").appendChild(div);

    await utils.wait(820);
    onComplete();
  },


  async globCool(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("globCool-orb");
    div.classList.add(caster.team === "player" ? "battle-globCool-right" : "battle-globCool-left");

    div.innerHTML = (`
      <svg viewBox="0 0 64 64"><g id="filled_outline" data-name="filled outline"><polygon points="41 37.196 41 26.804 32 21.608 23 26.804 23 37.196 32 42.392 41 37.196" style="fill:${event.color}"/><polygon points="36 34.309 36 29.69 32 27.381 28 29.69 28 34.309 32 36.618 36 34.309" style="fill:${event.colorShadow}"/><path d="M57.615,45.634l-1.854-1.07,1.445-.718a1,1,0,1,0-.89-1.791l-2.634,1.308-1.594-.92,2.381-1.572a1,1,0,1,0-1.1-1.669l-3.216,2.123-5.641-3.257,3.232-1.6,1.845,1.066a1,1,0,1,0,1-1.732l-.691-.4,2.635-1.3a1,1,0,0,0-.887-1.793l-2.878,1.423-.007-1.054a.962.962,0,0,0-.258-.63.994.994,0,0,0,.282-.683l.008-1.085,2.853,1.411a1,1,0,0,0,.887-1.793L49.95,28.621l.663-.382a1,1,0,0,0-1-1.733L47.8,27.556l-3.284-1.624,5.641-3.257L53.368,24.8a.986.986,0,0,0,.549.166,1,1,0,0,0,.552-1.835l-2.381-1.572,1.592-.919,2.645,1.325a1,1,0,0,0,.9-1.788l-1.466-.735,1.86-1.074a1,1,0,0,0-1-1.732L54.761,17.7l.1-1.61a1,1,0,1,0-2-.125L52.682,18.9l-1.594.921-.171-2.849a.989.989,0,0,0-1.059-.938A1,1,0,0,0,48.92,17.1l.231,3.847L43.51,24.2l.233-3.6,1.845-1.066a1,1,0,1,0-1-1.732l-.691.4.189-2.933a1,1,0,0,0-2-.129l-.206,3.2-.917-.52a.986.986,0,0,0-.68-.1.988.988,0,0,0-.445-.578l-.936-.549,2.649-1.766a1,1,0,1,0-1.11-1.664l-2.4,1.6V14a1,1,0,0,0-2,0v2.1L33,18.132V11.618L36.447,9.9a1,1,0,1,0-.894-1.79L33,9.382V7.543l2.47-1.627a1,1,0,1,0-1.1-1.67l-1.37.9V3a1,1,0,0,0-2,0V5.14l-1.344-.892A1,1,0,1,0,28.55,5.914L31,7.541V9.382L28.447,8.105a1,1,0,1,0-.894,1.79L31,11.618v6.514l-3-2V14a1,1,0,0,0-2,0v.8l-2.445-1.63a1,1,0,0,0-1.11,1.664l2.672,1.781-.91.534a.984.984,0,0,0-.426.538.99.99,0,0,0-.723.1l-.943.536-.2-3.177a1,1,0,0,0-2,.129l.185,2.874-.663-.382a1,1,0,1,0-1,1.732l1.818,1.049L20.49,24.2l-5.641-3.257L15.08,17.1a1,1,0,0,0-.938-1.058.984.984,0,0,0-1.059.938l-.171,2.849-1.592-.92-.175-2.952a1,1,0,0,0-2,.118l.1,1.637L7.385,16.634a1,1,0,0,0-1,1.732l1.854,1.07-1.445.718a1,1,0,0,0,.89,1.791l2.634-1.308,1.594.92L9.531,23.129a1,1,0,1,0,1.1,1.669l3.216-2.123,5.641,3.257-3.232,1.6-1.845-1.066a1,1,0,1,0-1,1.732l.691.4-2.635,1.3a1,1,0,0,0,.887,1.793l2.878-1.423.007,1.054a.984.984,0,0,0,.247.631,1.034,1.034,0,0,0-.271.682l-.008,1.085-2.853-1.411a1,1,0,1,0-.887,1.793l2.582,1.277-.663.382a1,1,0,0,0,1,1.733l1.818-1.05,3.284,1.624-5.641,3.257L10.632,39.2a1,1,0,1,0-1.1,1.669l2.381,1.572-1.592.919L7.675,42.037a1,1,0,1,0-.9,1.788l1.466.735-1.86,1.074a1,1,0,1,0,1,1.732L9.239,46.3l-.1,1.61a1,1,0,0,0,.935,1.061l.064,0a1,1,0,0,0,1-.938l.184-2.935,1.594-.921.171,2.849a1,1,0,0,0,1,.94l.061,0A1,1,0,0,0,15.08,46.9l-.231-3.847L20.49,39.8l-.233,3.6-1.845,1.066a1,1,0,1,0,1,1.732l.691-.4-.189,2.933a1,1,0,0,0,.933,1.062c.022,0,.044,0,.066,0a1,1,0,0,0,1-.935l.206-3.2.917.52a.987.987,0,0,0,.68.1.993.993,0,0,0,.445.577l.936.549-2.649,1.766a1,1,0,0,0,1.11,1.664l2.4-1.6V50a1,1,0,0,0,2,0V47.9L31,45.868v6.514l-3.447,1.723a1,1,0,1,0,.894,1.79L31,54.618v1.839l-2.47,1.627a1,1,0,0,0,.551,1.835.99.99,0,0,0,.549-.165l1.37-.9V61a1,1,0,0,0,2,0V58.86l1.344.892a1,1,0,1,0,1.106-1.666L33,56.459V54.618L35.553,55.9a1,1,0,1,0,.894-1.79L33,52.382V45.868l3,2V50a1,1,0,0,0,2,0v-.8l2.445,1.63a1,1,0,1,0,1.11-1.664l-2.672-1.781.91-.534a.984.984,0,0,0,.427-.539.992.992,0,0,0,.722-.1l.943-.536.205,3.177a1,1,0,0,0,1,.935c.022,0,.044,0,.066,0a1,1,0,0,0,.933-1.062L43.9,45.856l.663.382a.986.986,0,0,0,.5.135,1,1,0,0,0,.5-1.867l-1.818-1.049L43.51,39.8l5.641,3.257L48.92,46.9a1,1,0,0,0,.938,1.058l.061,0a1,1,0,0,0,1-.94l.171-2.849,1.592.92.175,2.952a1,1,0,0,0,1,.941c.02,0,.04,0,.06,0a1,1,0,0,0,.939-1.057l-.1-1.637,1.861,1.074a1,1,0,0,0,1-1.732ZM46.8,29.3l-.015,2.055a.987.987,0,0,0,.25.653,1,1,0,0,0-.274.689l.015,2.025-4.346,2.149L42,36.618V27.382l.429-.248ZM37.057,17.831l1.772,1.041a1,1,0,0,0,.505.137.987.987,0,0,0,.188-.024.991.991,0,0,0,.457.579l1.762,1L41.428,25.4,41,25.649l-8-4.618v-.5ZM32,41.237l-8-4.618V27.381l8-4.618,8,4.618v9.238Zm-9.742-20.7,1.787-1.015a.98.98,0,0,0,.439-.541,1.057,1.057,0,0,0,.23.029,1,1,0,0,0,.506-.137l1.746-1.026L31,20.535v.5l-8,4.618-.428-.247ZM17.2,34.705l.015-2.055a.987.987,0,0,0-.25-.653,1,1,0,0,0,.274-.689l-.015-2.025,4.346-2.149.429.248v9.236l-.429.248Zm9.742,11.464-1.772-1.041a.993.993,0,0,0-.691-.11.992.992,0,0,0-.459-.582l-1.762-1,.313-4.838L23,38.351l8,4.619v.5Zm14.8-2.7-1.787,1.015a.983.983,0,0,0-.44.542.991.991,0,0,0-.735.107l-1.746,1.026L33,43.465v-.5l8-4.619.428.247Z" style="fill:${event.colorShadow}"/><path d="M36.5,28.824l-4-2.309a1,1,0,0,0-1,0l-4,2.309a1,1,0,0,0-.5.866v4.619a1,1,0,0,0,.5.866l4,2.31a1,1,0,0,0,1,0l4-2.31a1,1,0,0,0,.5-.866V29.69A1,1,0,0,0,36.5,28.824ZM35,33.732l-3,1.732-3-1.732V30.268l3-1.732,3,1.732Z"/><path d="M57.981,17a1,1,0,0,0-1.366-.366L54.761,17.7l.1-1.61a1,1,0,1,0-2-.125L52.682,18.9l-1.594.921-.171-2.849a.989.989,0,0,0-1.059-.938A1,1,0,0,0,48.92,17.1l.231,3.847L43.51,24.2l.233-3.6,1.845-1.066a1,1,0,1,0-1-1.732l-.691.4.189-2.933a1,1,0,0,0-2-.129l-.206,3.2-.917-.52a.986.986,0,0,0-.68-.1.988.988,0,0,0-.445-.578l-.936-.549,2.649-1.766a1,1,0,1,0-1.11-1.664l-2.4,1.6V14a1,1,0,0,0-2,0v2.1L33,18.132V11.618L36.447,9.9a1,1,0,1,0-.894-1.79L33,9.382V7.543l2.47-1.627a1,1,0,1,0-1.1-1.67l-1.37.9V3a1,1,0,0,0-2,0V5.14l-1.344-.892A1,1,0,1,0,28.55,5.914L31,7.541V9.382L28.447,8.105a1,1,0,1,0-.894,1.79L31,11.618v6.514l-3-2V14a1,1,0,0,0-2,0v.8l-2.445-1.63a1,1,0,0,0-1.11,1.664l2.672,1.781-.91.534a.984.984,0,0,0-.426.538.99.99,0,0,0-.723.1l-.943.536-.2-3.177a1,1,0,0,0-2,.129l.185,2.874-.663-.382a1,1,0,1,0-1,1.732l1.818,1.049L20.49,24.2l-5.641-3.257L15.08,17.1a1,1,0,0,0-.938-1.058.984.984,0,0,0-1.059.938l-.171,2.849-1.592-.92-.175-2.952a1,1,0,0,0-2,.118l.1,1.637L7.385,16.634a1,1,0,0,0-1,1.732l1.854,1.07-1.445.718a1,1,0,0,0,.89,1.791l2.634-1.308,1.594.92L9.531,23.129a1,1,0,1,0,1.1,1.669l3.216-2.123,5.641,3.257-3.232,1.6-1.845-1.066a1,1,0,1,0-1,1.732l.691.4-2.635,1.3a1,1,0,0,0,.887,1.793l2.878-1.423.007,1.054a.984.984,0,0,0,.247.631,1.034,1.034,0,0,0-.271.682l-.008,1.085-2.853-1.411a1,1,0,1,0-.887,1.793l2.582,1.277-.663.382a1,1,0,0,0,1,1.733l1.818-1.05,3.284,1.624-5.641,3.257L10.632,39.2a1,1,0,1,0-1.1,1.669l2.381,1.572-1.592.919L7.675,42.037a1,1,0,1,0-.9,1.788l1.466.735-1.86,1.074a1,1,0,1,0,1,1.732L9.239,46.3l-.1,1.61a1,1,0,0,0,.935,1.061l.064,0a1,1,0,0,0,1-.938l.184-2.935,1.594-.921.171,2.849a1,1,0,0,0,1,.94l.061,0A1,1,0,0,0,15.08,46.9l-.231-3.847L20.49,39.8l-.233,3.6-1.845,1.066a1,1,0,1,0,1,1.732l.691-.4-.189,2.933a1,1,0,0,0,.933,1.062c.022,0,.044,0,.066,0a1,1,0,0,0,1-.935l.206-3.2.917.52a.987.987,0,0,0,.68.1.993.993,0,0,0,.445.577l.936.549-2.649,1.766a1,1,0,0,0,1.11,1.664l2.4-1.6V50a1,1,0,0,0,2,0V47.9L31,45.868v6.514l-3.447,1.723a1,1,0,1,0,.894,1.79L31,54.618v1.839l-2.47,1.627a1,1,0,0,0,.551,1.835.99.99,0,0,0,.549-.165l1.37-.9V61a1,1,0,0,0,2,0V58.86l1.344.892a1,1,0,1,0,1.106-1.666L33,56.459V54.618L35.553,55.9a1,1,0,1,0,.894-1.79L33,52.382V45.868l3,2V50a1,1,0,0,0,2,0v-.8l2.445,1.63a1,1,0,1,0,1.11-1.664l-2.672-1.781.91-.534a.984.984,0,0,0,.427-.539.992.992,0,0,0,.722-.1l.943-.536.205,3.177a1,1,0,0,0,1,.935c.022,0,.044,0,.066,0a1,1,0,0,0,.933-1.062L43.9,45.856l.663.382a.986.986,0,0,0,.5.135,1,1,0,0,0,.5-1.867l-1.818-1.049L43.51,39.8l5.641,3.257L48.92,46.9a1,1,0,0,0,.938,1.058l.061,0a1,1,0,0,0,1-.94l.171-2.849,1.592.92.175,2.952a1,1,0,0,0,1,.941c.02,0,.04,0,.06,0a1,1,0,0,0,.939-1.057l-.1-1.637,1.861,1.074a1,1,0,0,0,1-1.732l-1.854-1.07,1.445-.718a1,1,0,1,0-.89-1.791l-2.634,1.308-1.594-.92,2.381-1.572a1,1,0,1,0-1.1-1.669l-3.216,2.123-5.641-3.257,3.232-1.6,1.845,1.066a1,1,0,1,0,1-1.732l-.691-.4,2.635-1.3a1,1,0,0,0-.887-1.793l-2.878,1.423-.007-1.054a.962.962,0,0,0-.258-.63.994.994,0,0,0,.282-.683l.008-1.085,2.853,1.411a1,1,0,0,0,.887-1.793L49.95,28.621l.663-.382a1,1,0,0,0-1-1.733L47.8,27.556l-3.284-1.624,5.641-3.257L53.368,24.8a.986.986,0,0,0,.549.166,1,1,0,0,0,.552-1.835l-2.381-1.572,1.592-.919,2.645,1.325a1,1,0,0,0,.9-1.788l-1.466-.735,1.86-1.074A1,1,0,0,0,57.981,17Zm-20.924.831,1.772,1.041a1,1,0,0,0,.505.137.987.987,0,0,0,.188-.024.991.991,0,0,0,.457.579l1.762,1L41.428,25.4,41,25.649l-8-4.618v-.5ZM32,41.237l-8-4.618V27.381l8-4.618,8,4.618v9.238Zm-9.742-20.7,1.787-1.015a.98.98,0,0,0,.439-.541,1.057,1.057,0,0,0,.23.029,1,1,0,0,0,.506-.137l1.746-1.026L31,20.535v.5l-8,4.618-.428-.247ZM17.2,34.705l.015-2.055a.987.987,0,0,0-.25-.653,1,1,0,0,0,.274-.689l-.015-2.025,4.346-2.149.429.248v9.236l-.429.248Zm9.742,11.464-1.772-1.041a.993.993,0,0,0-.691-.11.992.992,0,0,0-.459-.582l-1.762-1,.313-4.838L23,38.351l8,4.619v.5Zm14.8-2.7-1.787,1.015a.983.983,0,0,0-.44.542.991.991,0,0,0-.735.107l-1.746,1.026L33,43.465v-.5l8-4.619.428.247ZM46.8,29.3l-.015,2.055a.987.987,0,0,0,.25.653,1,1,0,0,0-.274.689l.015,2.025-4.346,2.149L42,36.618V27.382l.429-.248Z"/></g></svg>
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

  async globSelf(event, onComplete) {
    const {
      caster
    } = event;
    let div = document.createElement("div");
    div.classList.add("globSelf-orb");
    div.classList.add(caster.team === "player" ? "battle-globSelf-right" : "battle-globSelf-left");

    /* div.innerHTML = (`
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="${event.color}" />
      </svg>
    `); */
    div.innerHTML = (`
      <img src="data:image/png;base64,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"></img>
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
      <img id="corteSVG" class=" rota-horizontal" src="data:image/png;base64,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"></img>
      `);
     /*  div.innerHTML = (`
      <svg id="corteSVG" class=""  viewBox="0 0 600 600"><path d="M412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902C370.979008992513 37.23777880368527 547.9020792643229 198.6014116416166 545.97900390625 286.3636523693591C544.0559285481771 374.1258930971016 359.4405568440755 563.8112231701405 337.2377624511719 563.2867480724842C315.03496805826825 562.762272974828 410.8391621907552 370.9790425111641 412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902 " fill="${event.color}" ></path></svg>
      `); */
    }else{
      /* div.innerHTML = (`
      <svg id="corteSVG" class=" rota-horizontal"  viewBox="0 0 600 600"><path d="M412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902C370.979008992513 37.23777880368527 547.9020792643229 198.6014116416166 545.97900390625 286.3636523693591C544.0559285481771 374.1258930971016 359.4405568440755 563.8112231701405 337.2377624511719 563.2867480724842C315.03496805826825 562.762272974828 410.8391621907552 370.9790425111641 412.7622375488281 283.2168017834216C414.68531290690106 195.4545610556791 326.57342020670575 36.18882860837277 348.7762145996094 36.71330370602902 " fill="${event.color}" ></path></svg>
      `); */
      div.innerHTML = (`
      <img id="corteSVG" class="" src="data:image/png;base64,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"></img>
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