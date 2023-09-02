import user from "./data.js";
console.log(user);

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log("hola")

  }
}