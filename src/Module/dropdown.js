export default class DropDown {
  constructor(id, developMode) {
    this.id = id;
    this.mode = developMode;
    this.isDevelopped = false;
    this.getElements();
    this.setupDevelop();
  }

  getElements() {
    const container = document.querySelector(`#${this.id}`);
    console.log(container);

    this.button = container.querySelector("button");

    this.itemsContainer = container.querySelector("div:nth-child(2)");
    this.itemsContainer.classList.add("hidden");
  }

  setupDevelop() {
    this.button.addEventListener(this.mode, () => {
      this.isDevelopped
        ? this.itemsContainer.classList.add("hidden")
        : this.itemsContainer.classList.remove("hidden");
      this.isDevelopped = !this.isDevelopped;
    });
  }
}
