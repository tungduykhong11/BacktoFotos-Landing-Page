const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let currentGroup = []; // array of image src strings
let currentIndex = 0;

function openLightbox(imgSrc, group) {
  currentGroup = group;
  currentIndex = group.indexOf(imgSrc);
  if (currentIndex === -1) currentIndex = 0;
  showImage();
  lightbox.classList.add("open");
}

function showImage() {
  if (currentGroup.length === 0) return;
  lightboxImg.src = currentGroup[currentIndex];
  // Ẩn mũi tên nếu chỉ có 1 ảnh
  lightboxPrev.style.display = currentGroup.length <= 1 ? "none" : "";
  lightboxNext.style.display = currentGroup.length <= 1 ? "none" : "";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGroup.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
  showImage();
}

// Portfolio cards
document.querySelectorAll(".portfolio__card").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    openLightbox(img.src, [img.src]);
  });
});

// Gallery images
const galleryImages = Array.from(document.querySelectorAll(".gallery__grid img")).map(img => img.src);
document.querySelectorAll(".gallery__grid img").forEach((img, i) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    openLightbox(img.src, galleryImages);
  });
});

// Instagram images
const instagramImages = Array.from(document.querySelectorAll(".instagram__flex img")).map(img => img.src);
document.querySelectorAll(".instagram__flex img").forEach((img, i) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    openLightbox(img.src, instagramImages);
  });
});

// VIEW GALLERY button
const viewGalleryBtn = document.querySelector(".gallery__btn .btn");
if (viewGalleryBtn) {
  viewGalleryBtn.style.cursor = "pointer";
  viewGalleryBtn.addEventListener("click", () => {
    if (galleryImages.length > 0) {
      openLightbox(galleryImages[0], galleryImages);
    }
  });
}

// Lightbox controls
lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "Escape") lightbox.classList.remove("open");
});

// Blog Read More toggle
const blogReadMore = document.getElementById("blog-readmore");
const blogMore = document.getElementById("blog-more");

if (blogReadMore && blogMore) {
  blogReadMore.addEventListener("click", () => {
    const isOpen = blogMore.classList.toggle("open");
    blogReadMore.textContent = isOpen ? "Show Less" : "Read More";
  });
}
