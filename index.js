import user from "./data.js";
import personajes from "./src/components/1/personajes.js"
console.log(user);
console.log(personajes);


class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <app-user>user</app-user>
        `;
  }
}

customElements.define("app-container", App);
