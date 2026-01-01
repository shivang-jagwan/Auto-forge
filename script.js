// ============================================
// AUTOFORGE SYSTEMS - PREMIUM JAVASCRIPT
// ============================================

// DOM Cache
const elements = {
    navbar: document.querySelector('.navbar'),
    progressBar: document.querySelector('.progress-bar'),
    navLinks: document.querySelectorAll('.nav-links a'),
    contactForm: document.getElementById('contactForm'),
    formMessage: document.getElementById('formMessage'),
    testimonialPrev: document.querySelector('.testimonial-prev'),
    testimonialNext: document.querySelector('.testimonial-next'),
    testimonialCards: document.querySelectorAll('.testimonial-card'),
    body: document.body,
    html: document.documentElement
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    setupNavbar();
    setupProgressBar();
    setupSmoothScroll();
    setupScrollAnimations();
    setupFormHandler();
    setupTestimonialCarousel();
    setupParallax();
    setupCardHovers();
}

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

function setupNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Active link highlighting
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            elements.navLinks.forEach(l => l.style.color = '');
            link.style.color = 'var(--accent-yellow)';
            
            setTimeout(() => {
                elements.navLinks.forEach(l => l.style.color = '');
            }, 500);
        });
    });
}

// ============================================
// PROGRESS BAR
// ============================================

function setupProgressBar() {
    window.addEventListener('scroll', () => {
        const scrollTop = elements.html.scrollTop || elements.body.scrollTop;
        const docHeight = elements.html.scrollHeight - elements.html.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        elements.progressBar.style.width = scrollPercent + '%';
    }, { passive: true });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function setupSmoothScroll() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate reveal cards
                if (entry.target.classList.contains('reveal-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }

                // Animate service cards
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }

                // Animate timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }

                // Animate portfolio cards
                if (entry.target.classList.contains('portfolio-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.reveal-card, .service-card, .timeline-item, .portfolio-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ============================================
// FORM HANDLER
// ============================================

function setupFormHandler() {
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        requirement: document.getElementById('requirement').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.requirement) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Show success message
    showFormMessage('✓ Thank you! We\'ll contact you within 24 hours.', 'success');

    // Reset form
    setTimeout(() => {
        elements.contactForm.reset();
        elements.formMessage.style.display = 'none';
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    elements.formMessage.textContent = message;
    elements.formMessage.className = `form-message ${type}`;
    elements.formMessage.style.display = 'block';
}

// ============================================
// TESTIMONIAL CAROUSEL
// ============================================

let currentTestimonial = 0;

function setupTestimonialCarousel() {
    if (elements.testimonialPrev && elements.testimonialNext) {
        elements.testimonialPrev.addEventListener('click', prevTestimonial);
        elements.testimonialNext.addEventListener('click', nextTestimonial);
    }

    // Auto-rotate testimonials
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function nextTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    cards[currentTestimonial].style.opacity = '0';
    cards[currentTestimonial].style.transform = 'translateX(-30px)';

    currentTestimonial = (currentTestimonial + 1) % cards.length;

    cards[currentTestimonial].style.opacity = '1';
    cards[currentTestimonial].style.transform = 'translateX(0)';
}

function prevTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;

    cards[currentTestimonial].style.opacity = '0';
    cards[currentTestimonial].style.transform = 'translateX(30px)';

    currentTestimonial = (currentTestimonial - 1 + cards.length) % cards.length;

    cards[currentTestimonial].style.opacity = '1';
    cards[currentTestimonial].style.transform = 'translateX(0)';
}

// Initialize testimonial styles
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.position = 'relative';
        if (index !== 0) {
            card.style.opacity = '0';
            card.style.transform = 'translateX(30px)';
        }
    });
});

// ============================================
// PARALLAX SCROLLING
// ============================================

function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Parallax on hero background
        const gradientBlur1 = document.querySelector('.gradient-blur-1');
        const gradientBlur2 = document.querySelector('.gradient-blur-2');

        if (gradientBlur1) {
            gradientBlur1.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        if (gradientBlur2) {
            gradientBlur2.style.transform = `translateY(${scrollY * 0.5}px)`;
        }

        // Parallax on floating cards
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach((card, index) => {
            const offset = scrollY * (0.1 + index * 0.05);
            card.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });
}

// ============================================
// CARD HOVER EFFECTS
// ============================================

function setupCardHovers() {
    const cards = document.querySelectorAll('.service-card, .about-card, .portfolio-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) * 0.1;
            const rotateY = (centerX - x) * 0.1;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// ============================================
// ACCESSIBILITY & PERFORMANCE
// ============================================

// Reduce animations for users with preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}

// Optimize scroll performance with passive listeners
document.addEventListener('scroll', () => {}, { passive: true });
window.addEventListener('resize', debounce(() => {
    // Handle resize if needed
}, 250), { passive: true });

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Log page load time
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page loaded in ' + pageLoadTime + 'ms');
});

// ============================================
// ADDITIONAL INTERACTIONS
// ============================================

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.position = 'absolute';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('AutoForge Systems - Premium Website Loaded ✓');
