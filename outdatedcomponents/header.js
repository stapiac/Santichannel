//The social media icons were removed from the navbar (header) because we are using floating social media.
//This file is the old header nav bar with the responsive social media icons on it

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
        <a class="nav-link " href="#">Redes Sociales</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Proyectos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Entrevistas</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Fotos</a>
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
    <div class = "navbar-text socials">

  <a href="https://www.facebook.com/SantiChannel1/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
  <a href="https://www.instagram.com/santichannel/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
  <a href="https://www.tiktok.com/@santichannel_" target="_blank" rel="noopener noreferrer"><i class="bi bi-tiktok"></i></a>
  <a href="https://www.youtube.com/@santichannel6313" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a>
      

</div>
  </div>
</div>
</nav>`;
  }
}

customElements.define("header-component", Header);
