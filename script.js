// Toggle menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav'); // Target the whole navigation, not just the links

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the active class on the nav element
});

// Select all the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent default anchor behavior
        event.preventDefault();

        // Get the target section's id
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href

        // Scroll to the corresponding section
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight; // Get the header height

            window.scrollTo({
                top: targetSection.offsetTop - headerHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }

        // Close the menu after clicking on a link (for mobile)
        nav.classList.remove('active');
    });
});

document.getElementById('copyright').textContent = new Date().getFullYear();

/**for sending mail to the suggester */

(function () {
    emailjs.init("qEM9SEhPaQx5gh-O7"); 
  })();

  // Attach form submission logic
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    emailjs.sendForm("service_iju9x3r", "template_ld3ez5l", this)
      .then(function () {
        alert("Message sent successfully ");
        form.reset(); // Reset form
      }, function (error) {
        alert("Something went wrong ");
        console.log("FAILED...", error);
      });
  });

// trying something
const words = ["Engineer", "Web Developer", "Tech Explorer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const span = document.getElementById("typed-text");
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
        span.textContent = currentWord.substring(0, charIndex);
    } else {
        charIndex++;
        span.textContent = currentWord.substring(0, charIndex);
    }

    // Timing control
    let typingSpeed = isDeleting ? 100 : 150;

    // Word complete
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; // pause before deleting
    }

    // Word deleted
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300; // pause before typing next word
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);

