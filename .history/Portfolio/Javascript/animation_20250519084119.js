document.addEventListener("DOMContentLoaded", () => {
    const options = {
   strings: [
    "I am <span class='name'>Asanda</span> Ngwenya",
    "A Software <span class='name'>Developer</span>",
    "I turn caffeine<span class='name'> into</span> code",
    "And bugs <span class='name'>into </span> features",
    "Let's create <span class='name'>something  </span>  amazing together!"
],

        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true // Keeps looping through the phrases
    };

    new Typed(".typing-effect", options);
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
