// Modal
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Mobile menu
function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('active');
}

// FAQ toggle
function toggleFaq(button) {
    const item = button.parentElement;
    const wasActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
    });

    if (!wasActive) {
        item.classList.add('active');
    }
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat__number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Scroll animation
function handleScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .price-card, .faq-item');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Form submit
function submitForm(e) {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    closeModal();
    e.target.reset();
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Init
window.addEventListener('load', () => {
    animateCounters();
    handleScroll();
});

window.addEventListener('scroll', handleScroll);

// Close modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
