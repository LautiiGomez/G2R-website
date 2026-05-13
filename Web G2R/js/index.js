//Barra de búsqueda
// JavaScript for handling the search functionality and form submission
function search(event) {
  event.preventDefault();
  let query = document.getElementById('search').value;
  alert('Searching for: ' + query);
  // Add the actual search functionality as needed
}

// JavaScript for handling mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });
});

//Custom select
const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".options");
  //Show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active")
});

//Responsive
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

document.addEventListener('wheel', function(event) {
  event.preventDefault(); // Esto previene el comportamiento de desplazamiento predeterminado
  window.scrollBy(0, event.deltaY); // Esto implementa un desplazamiento personalizado
}, { passive: false }); // Asegúrate de que el evento no sea pasivo
