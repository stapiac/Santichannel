class footerc extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div
      class="container-fluid text-white text-center p-2 custom-footer"
      
    >
      <p class="text-center">
        2023 Todos los derechos reservados © - Stapia Productions
      </p>
    </div>`;
  }
}

customElements.define("footer-component", footerc);
