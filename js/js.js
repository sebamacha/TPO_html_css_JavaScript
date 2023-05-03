// Seleccionamos el header y el botón de menú
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');

// Añadimos un evento al botón de menú para mostrar/ocultar el menú
menuBtn.addEventListener('click', () => {
  header.classList.toggle('show');
});

// Añadimos un evento al hacer scroll en la ventana
window.addEventListener('scroll', () => {
  // Si la posición vertical del scroll es mayor o igual a la altura del header
  if (window.pageYOffset >= header.offsetHeight) {
    // Añadimos la clase 'sticky' al header
    header.classList.add('sticky');
  } else {
    // En caso contrario, eliminamos la clase 'sticky'
    header.classList.remove('sticky');
  }
});