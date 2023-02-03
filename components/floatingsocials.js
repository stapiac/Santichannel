class Floatingsocials extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="container-fluid">
      <div class="col-1 align-items-left" style="background-color: brown">
        <ul class="floatingsocials">
          <li>
            <a
              href="https://www.facebook.com/SantiChannel1/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/santichannel/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@santichannel_"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="bi bi-tiktok"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@santichannel6313"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="bi bi-youtube"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>`;
  }
}

customElements.define("floatingsocials-component", Floatingsocials);
