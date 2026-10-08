const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
if (menuBtn) {
  menuBtn.addEventListener('click', () => header.classList.toggle('open'));
}
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});
function comingSoon(item){
  alert(item + " estará disponível em breve. Vamos configurar essa função quando a cidade estiver pronta.");
  return false;
}
