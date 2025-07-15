
// Flyer data
const flyerData = {
    general: {
        title: 'Complete Insurance Solutions',
        description: 'Your trusted insurance partner for all types of coverage',
        url: window.location.origin + '/flyers/flyer-general.html'
    },
    life: {
        title: 'Life Insurance',
        description: 'Secure your family\'s future with comprehensive life coverage',
        url: window.location.origin + '/flyers/flyer-life.html'
    },
    health: {
        title: 'Health Insurance',
        description: 'Protect your health and finances with medical coverage',
        url: window.location.origin + '/flyers/flyer-health.html'
    },
    car: {
        title: 'Car Insurance',
        description: 'Drive with confidence with comprehensive vehicle coverage',
        url: window.location.origin + '/flyers/flyer-car.html'
    },
    home: {
        title: 'Home Insurance',
        description: 'Protect your most valuable asset with home coverage',
        url: window.location.origin + '/flyers/flyer-home.html'
    },
    travel: {
        title: 'Travel Insurance',
        description: 'Travel worry-free with comprehensive travel protection',
        url: window.location.origin + '/flyers/flyer-travel.html'
    },
    business: {
        title: 'Business Insurance',
        description: 'Protect your business investment with commercial coverage',
        url: window.location.origin + '/flyers/flyer-business.html'
    },
    motor: {
        title: 'Motor Insurance',
        description: 'Complete protection for two-wheelers and commercial vehicles',
        url: window.location.origin + '/flyers/flyer-motor.html'
    }
};

let currentFlyer = '';

// Download flyer function
function downloadFlyer(type) {
    const flyer = flyerData[type];
    if (flyer) {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = flyer.url;
        link.download = `urmila-deshmukh-${type}-insurance-flyer.html`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        showNotification(`${flyer.title} flyer downloaded successfully!`, 'success');
    }
}

// Share flyer function
function shareFlyer(type) {
    currentFlyer = type;
    const modal = document.getElementById('shareModal');
    modal.style.display = 'block';
}

// Share via WhatsApp
function shareViaWhatsApp() {
    const flyer = flyerData[currentFlyer];
    if (flyer) {
        const message = `Check out this ${flyer.title} flyer from Urmila Deshmukh Insurance Services!\n\n${flyer.description}\n\n${flyer.url}\n\nContact: +91 99999 99999`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeModal();
    }
}

// Share via Email
function shareViaEmail() {
    const flyer = flyerData[currentFlyer];
    if (flyer) {
        const subject = `${flyer.title} - Urmila Deshmukh Insurance Services`;
        const body = `Hi,\n\nI wanted to share this ${flyer.title} information from Urmila Deshmukh Insurance Services.\n\n${flyer.description}\n\nYou can view the flyer here: ${flyer.url}\n\nFor personalized quotes, contact:\nUrmila Deshmukh\nPhone: +91 99999 99999\nOffice: Office No. 12, Prime Business Center, Pune, MH\n\nBest regards`;
        
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
        closeModal();
    }
}

// Copy link to clipboard
function copyLink() {
    const flyer = flyerData[currentFlyer];
    if (flyer) {
        navigator.clipboard.writeText(flyer.url).then(() => {
            showNotification('Link copied to clipboard!', 'success');
            closeModal();
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = flyer.url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Link copied to clipboard!', 'success');
            closeModal();
        });
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('shareModal');
    modal.style.display = 'none';
    currentFlyer = '';
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('shareModal');
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal when clicking the X
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add keyboard support for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
