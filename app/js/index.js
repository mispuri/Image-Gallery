let scrolContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrolContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrolContainer.scrollLeft += e.deltaY;
  scrolContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', () => {
  scrolContainer.style.scrollBehavior = 'smooth';
  scrolContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
  scrolContainer.style.scrollBehavior = 'smooth';
  scrolContainer.scrollLeft -= 900;
});
