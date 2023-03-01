class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg rounded fixed-top nav-custom">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><span style="font-family: 'Poppins'; font-size:larger"> S</span>antiago <span style= "font-family: 'Poppins'; font-size:larger">T</span>apia</a>
  
  
  
    <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
    </button>



  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link " href="reel.html">Reel</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="proyectos.html">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Entrevistas</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="fotos.html">Fotos</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="biografia.html">Biografía</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>


        </ul>
      </li>
    </ul>
    
  </div>
</div>
</nav>`;
  }
}

customElements.define("header-component", Header);
