export  class personajes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <app-personajes>yoda</app-personajes>
        `;
  }
}


customElements.define("app-otro", personajes);
