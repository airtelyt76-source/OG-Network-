// Features fade-in on scroll

const features = document.querySelectorAll('.features li');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.animation = 'fadeInUp 1s forwards';

      observer.unobserve(entry.target);

    }

  });

}, {threshold:0.2});

features.forEach(f => observer.observe(f));

// Smooth scroll for nav links

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});

  });

});