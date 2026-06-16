import './style.css'

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // Scroll Animations (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Carousel Logic
  const carousel = document.querySelector('.gallery-carousel');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = 400; // Scroll by one item + gap approximate

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }

  // Lightbox Logic
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (lightbox && lightboxImg && galleryItems.length > 0) {
    galleryItems.forEach(img => {
      // Make images look clickable
      img.style.cursor = 'pointer';
      
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    // Close on click outside the image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
      }
    });
  }

  // WhatsApp Form Logic
  const waForm = document.getElementById('whatsapp-form');
  if (waForm) {
    waForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload
      
      const name = document.getElementById('wa-name').value;
      const phone = document.getElementById('wa-phone').value;
      const message = document.getElementById('wa-message').value;
      
      // Target WhatsApp number (from the footer)
      // Removing non-numeric characters just in case, but keeping the exact number formatting 55 + DDD + Number
      const targetPhone = "5573982182805"; 
      
      // Format the message
      const waText = `Olá, me chamo *${name}*.\nMeu contato é: ${phone}.\n\n*Gostaria de solicitar um orçamento/informação:*\n${message}`;
      const encodedText = encodeURIComponent(waText);
      
      // Redirect to WhatsApp
      const waUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
