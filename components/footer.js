class footerc extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div
      class="container-fluid text-white text-center p-2"
      style="background-color: black"
    >
      <p class="text-center">
        Todos los derechos reservados © - Stapia Productions 2023
      </p>
    </div>`;
  }
}

customElements.define("footer-component", footerc);
