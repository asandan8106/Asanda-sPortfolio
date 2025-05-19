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

