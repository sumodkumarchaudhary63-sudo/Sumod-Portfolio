document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.querySelector('.menu-toggle i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // Rotating Hero Quotes
    const heroQuotes = [
        "“AI is not replacing humans, it’s empowering them.”",
        "“Technology works best when it feels human.”",
        "“Prompt engineering is the new programming language.”"
    ];

    let currentHeroQuote = 0;
    const heroQuoteElement = document.getElementById('rotating-quote');

    setInterval(() => {
        heroQuoteElement.style.opacity = 0;
        setTimeout(() => {
            currentHeroQuote = (currentHeroQuote + 1) % heroQuotes.length;
            heroQuoteElement.textContent = heroQuotes[currentHeroQuote];
            heroQuoteElement.style.opacity = 1;
        }, 500);
    }, 4000);

    // Tech Quotes Slider
    const techQuotes = document.querySelectorAll('.quote-item');
    const techQuoteBgs = document.querySelectorAll('.quote-bg');
    let currentTechQuote = 0;

    function showNextTechQuote() {
        // Remove active class from current quote and background
        techQuotes[currentTechQuote].classList.remove('active');
        if (techQuoteBgs[currentTechQuote]) {
            techQuoteBgs[currentTechQuote].classList.remove('active');
        }

        // Move to next quote
        currentTechQuote = (currentTechQuote + 1) % techQuotes.length;

        // Add active class to next quote and background
        techQuotes[currentTechQuote].classList.add('active');
        if (techQuoteBgs[currentTechQuote]) {
            techQuoteBgs[currentTechQuote].classList.add('active');
        }
    }

    if (techQuotes.length > 0) {
        setInterval(showNextTechQuote, 5000);
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
