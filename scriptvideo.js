document.getElementById('btn-tour').addEventListener('click', function (e) {
  e.preventDefault();

  const videoPC = document.getElementById('video-pc');
  const videoMobile = document.getElementById('video-mobile');

  const newVideoURL = 'assets/video/Eladioconcerts.mp4';
  const newPosterPC = 'assets/img/PosterTourDesktop.webp';
  const newPosterMobile = 'assets/img/PosterTourMobile.webp';

  // Actualizar video PC
  const pcSource = videoPC.querySelector('source');
  pcSource.src = newVideoURL;
  videoPC.setAttribute('poster', newPosterPC);
  videoPC.load();
  videoPC.play();

  // Actualizar video móvil
  const mobileSource = videoMobile.querySelector('source');
  mobileSource.src = newVideoURL;
  videoMobile.setAttribute('poster', newPosterMobile);
  videoMobile.load();
  videoMobile.play();

  // Ocultar tarjeta del menú con animación
  const menuCard = document.querySelector('.menu-card');
  if (menuCard) {
    menuCard.classList.add('hide');
  }


  // Mostrar overlay
document.querySelector('.menu-card').classList.add('hide');
document.getElementById('tour-overlay').classList.remove('hidden');

// Botón HOME: recarga la página
document.getElementById('btn-home').addEventListener('click', () => {
  window.location.reload();
});


});


const regionButtons = document.querySelectorAll('.region-btn');
const allTables = document.querySelectorAll('.region-table');

regionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const region = btn.textContent.trim().toLowerCase();

    allTables.forEach(table => table.classList.remove('active'));

    const targetTable = document.getElementById(`table-${region}`);
    if (targetTable) {
      targetTable.classList.add('active');
    }
  });
});
