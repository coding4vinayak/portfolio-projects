// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    initCarousel();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize animations on scroll
    initScrollAnimations();
});

// Carousel Functions
function initCarousel() {
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
}

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

function changeSlide(direction) {
    stopAutoSlide();
    
    if (direction === 1) {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    
    showSlide(currentSlide);
    startAutoSlide();
}

function currentSlideFunc(index) {
    stopAutoSlide();
    showSlide(index - 1);
    startAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Navigation Functions
function initNavigation() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Contact Form Functions
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }
}

function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    // Add +91 prefix if not present
    if (value.length > 0 && !value.startsWith('91')) {
        value = '91' + value;
    }
    
    // Format as +91 XXXXX XXXXX
    if (value.length > 2) {
        value = '+' + value.substring(0, 2) + ' ' + value.substring(2, 7) + ' ' + value.substring(7, 12);
    }
    
    e.target.value = value;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Validate form
    if (validateForm(data)) {
        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showSuccessMessage();
            sendToWhatsApp(data);
            e.target.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }
}

function validateForm(data) {
    // Check required fields
    if (!data.firstName || !data.email || !data.phone || !data.insuranceType || !data.location) {
        showAlert('Please fill in all required fields', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate phone (basic validation for Indian numbers)
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = data.phone.replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showAlert('Please enter a valid phone number', 'error');
        return false;
    }
    
    return true;
}

function showSuccessMessage() {
    showAlert('Quote request sent successfully! We will contact you soon.', 'success');
}

function showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'check-circle'}"></i>
        <span>${message}</span>
        <button class="alert-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add alert styles
    alert.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'error' ? '#fee2e2' : '#d1fae5'};
        color: ${type === 'error' ? '#dc2626' : '#065f46'};
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid ${type === 'error' ? '#fecaca' : '#a7f3d0'};
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        font-weight: 500;
    `;
    
    // Add close button styles
    const closeBtn = alert.querySelector('.alert-close');
    if (closeBtn) {
        closeBtn.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
            color: inherit;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        `;
        
        closeBtn.addEventListener('mouseover', () => {
            closeBtn.style.opacity = '1';
        });
        
        closeBtn.addEventListener('mouseout', () => {
            closeBtn.style.opacity = '0.7';
        });
    }
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                if (alert.parentNode) {
                    alert.parentNode.removeChild(alert);
                }
            }, 300);
        }
    }, 5000);
}

function sendToWhatsApp(data) {
    const phoneNumber = '919999999999';
    const message = `
New Insurance Quote Request:

Name: ${data.firstName} ${data.lastName || ''}
Email: ${data.email}
Phone: ${data.phone}
Insurance Type: ${data.insuranceType}
Location: ${data.location}
Address: ${data.address || 'Not provided'}
Message: ${data.message || 'No additional message'}

Please contact them for the quote.
    `.trim();
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });
    
    // Observe about items
    const aboutItems = document.querySelectorAll('.about-item');
    aboutItems.forEach(item => {
        item.classList.add('animate-on-scroll');
        observer.observe(item);
    });
    
    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate-on-scroll:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .animate-on-scroll:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .animate-on-scroll:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        .animate-on-scroll:nth-child(5) {
            transition-delay: 0.4s;
        }
        
        .animate-on-scroll:nth-child(6) {
            transition-delay: 0.5s;
        }
    `;
    document.head.appendChild(animationStyle);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Pause carousel on hover
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    } else if (e.key === 'Escape') {
        // Close mobile menu
        const hamburger = document.querySelector('.nav-hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Touch/Swipe support for carousel
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Form field focus animations
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src || img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll performance
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations or effects can be added here
}, 16));

// Export functions for global access
window.scrollToSection = scrollToSection;
window.changeSlide = changeSlide;
window.currentSlide = currentSlideFunc;