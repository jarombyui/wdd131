// // You can add interactivity here, like linking to actual pages or adding hover effects.
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//       alert('This link is currently inactive.');
//     });
//   });
  
    // Código para insertar el año actual
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Código para insertar la fecha de última modificación
    document.getElementById('lastModified').textContent = 'Última modificación: ' + document.lastModified;
