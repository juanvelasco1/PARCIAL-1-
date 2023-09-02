export default class personajes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <app-personajes>personaje</app-personajes>
        `;
  }
}


customElements.define("app-otro", personajes);
