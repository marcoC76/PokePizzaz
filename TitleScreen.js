class TitleScreen {
  constructor({ progress }) {
    this.progress = progress;
  }

  getOptions(resolve) {
    const safeFile = this.progress.getSaveFile();
    return [
      { 
        label: "Nuevo juego",
        description: "Comienza una nueva aventura de pizza!",
        handler: () => {
          this.close();
          resolve();
        }
      },
      safeFile ? {
        label: "Continuar juego",
        description: "Reanuda tu aventura",
        handler: () => {
          this.close();
          resolve(safeFile);
        }
      } : null
    ].filter(v => v);
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TitleScreen");
    this.element.innerHTML = (`
      <img class="TitleScreen_logo" src="/images/logo.png" alt="Pizza Legends" />
    `)

  }

  close() {
    this.keyboardMenu.end();
    this.element.remove();
  }
  
  init(container) {
    return new Promise(resolve => {
      this.createElement();
      container.appendChild(this.element);
      this.keyboardMenu = new KeyboardMenu();
      this.keyboardMenu.init(this.element);
      this.keyboardMenu.setOptions(this.getOptions(resolve))
    })
  }

}