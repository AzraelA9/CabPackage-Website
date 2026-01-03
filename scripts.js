function switchTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    if (tab === 'round') {
        document.getElementById('round-trip').classList.add('active');
        event.target.classList.add('active');
    } else {
        document.getElementById('one-way').classList.add('active');
        event.target.classList.add('active');
    }
}

// Handle form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! In production, this would send data to your server.');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button if it doesn't exist
    const header = document.querySelector('.header-content');
    const nav = document.querySelector('nav');
    
    if (header && nav && !document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        
        // Insert before nav
        header.insertBefore(menuToggle, nav);
        
        // Toggle menu on click
        menuToggle.addEventListener('click', function() {
            const navUl = nav.querySelector('ul');
            if (navUl) {
                navUl.classList.toggle('active');
                // Change icon
                this.innerHTML = navUl.classList.contains('active') ? '✕' : '☰';
            }
        });
        
        // Close menu when clicking a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const navUl = nav.querySelector('ul');
                if (navUl && window.innerWidth <= 768) {
                    navUl.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                }
            });
        });
    }
});

// Tab switching for booking form
function switchTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    if (tab === 'round') {
        document.getElementById('round-trip').classList.add('active');
        event.target.classList.add('active');
    } else {
        document.getElementById('one-way').classList.add('active');
        event.target.classList.add('active');
    }
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Get all input values from the form
            const inputs = this.querySelectorAll('input, select');
            const formValues = {};
            inputs.forEach(input => {
                const label = input.previousElementSibling?.textContent || input.placeholder;
                formValues[label] = input.value;
            });
            
            console.log('Form submitted with data:', formValues);
            
            // For demo - show alert
            alert('Form submitted! In production, this would send data to your email.');
            
            // Here you would normally send to your backend/email service
            // See the email integration guide provided separately
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Optional: Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Optional: Lazy loading for better mobile performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    // To use lazy loading, change your img src to data-src in HTML
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}