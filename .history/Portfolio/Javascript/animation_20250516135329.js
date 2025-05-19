document.addEventListener("DOMContentLoaded", () => {
    const options = {
        strings: [
            "I am <span class='name'>Asanda</span> Ngwenya",
            "A Software Developer",
            "I turn caffeine into code",
            "And bugs into features",
            "Let's create something amazing together!"
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
