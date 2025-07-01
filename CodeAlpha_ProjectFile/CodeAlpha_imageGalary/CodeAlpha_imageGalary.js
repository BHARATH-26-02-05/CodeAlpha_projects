// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
  
    filterButtons.forEach(btn => btn.classList.remove('active'));
 
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let images = [];

galleryItems.forEach((item, index) => {
  const img = item.querySelector('img');
  images.push(img);
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = 'block';
  lightboxImg.src = images[currentIndex].src;
  lightboxCaption.textContent = images[currentIndex].alt;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
