document.getElementById('contactUsBtn').addEventListener('click', function () {
    document.getElementById('contactFormModal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('contactFormModal').style.display = 'none';
  });
  
  window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('contactFormModal')) {
      document.getElementById('contactFormModal').style.display = 'none';
    }
  });
  
  const projectContents = document.querySelectorAll('.project-content');
  
  projectContents.forEach(content => {
      content.addEventListener('click', function() {
          document.getElementById('projectImage').src = this.getAttribute('data-image');
          projectContents.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
      });
  });
  

  const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pagination = document.querySelector('.pagination');

let currentSlide = 0;
let slidesPerView = 3;
let totalSlides = 3; // Changed to 3 dots
let slideWidth = cards[0].offsetWidth;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  const marginRight = parseInt(window.getComputedStyle(cards[0]).marginRight);
  const moveX = (cardWidth + marginRight) * currentSlide;
  cardWrapper.style.transform = `translateX(-${moveX}px)`;
  updatePagination();
}

function updatePagination() {
  pagination.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    if (i === currentSlide) bullet.classList.add('active');
    bullet.addEventListener('click', () => {
      currentSlide = i;
      updateSlider();
    });
    pagination.appendChild(bullet);
  }
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) currentSlide--;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) currentSlide++;
  else currentSlide = 0;
  updateSlider();
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 520) {
    slidesPerView = 1;
  } else if (window.innerWidth < 768) {
    slidesPerView = 2;
  } else {
    slidesPerView = 3;
  }
  totalSlides = 3; // Always 3 dots
  slideWidth = cards[0].offsetWidth;
  updateSlider();
});

updateSlider();
updatePagination();
