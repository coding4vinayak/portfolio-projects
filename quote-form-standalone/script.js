// Multi-language translations
const translations = {
    english: {
        pageTitle: "Get Insurance Quote",
        pageSubtitle: "Fill out this form to get a personalized insurance quote from Urmila Deshmukh",
        contactInfoTitle: "Contact Information",
        officeHoursTitle: "Office Hours",
        mondayToSaturday: "Monday - Saturday: 9:00 AM - 7:00 PM",
        sunday: "Sunday: 10:00 AM - 5:00 PM",
        whatsappText: "Chat on WhatsApp",
        formTitle: "Insurance Quote Request",
        firstNameLabel: "First Name *",
        lastNameLabel: "Last Name",
        emailLabel: "Email Address *",
        phoneLabel: "Mobile Number *",
        insuranceTypeLabel: "Insurance Type *",
        locationLabel: "Location *",
        addressLabel: "Address",
        messageLabel: "Message/Requirements",
        submitBtn: "Submit Quote Request",
        selectInsuranceOption: "Select Insurance Type",
        selectLocationOption: "Select Location",
        successTitle: "Quote Request Sent!",
        successText: "Thank you for your quote request. We'll contact you soon with your personalized insurance quote.",
        validationError: "Please fill in all required fields",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Please enter a valid phone number"
    },
    hindi: {
        pageTitle: "बीमा कोटेशन प्राप्त करें",
        pageSubtitle: "उर्मिला देशमुख से व्यक्तिगत बीमा कोटेशन प्राप्त करने के लिए यह फॉर्म भरें",
        contactInfoTitle: "संपर्क जानकारी",
        officeHoursTitle: "कार्यालय समय",
        mondayToSaturday: "सोमवार - शनिवार: सुबह 9:00 - शाम 7:00",
        sunday: "रविवार: सुबह 10:00 - शाम 5:00",
        whatsappText: "WhatsApp पर चैट करें",
        formTitle: "बीमा कोटेशन अनुरोध",
        firstNameLabel: "पहला नाम *",
        lastNameLabel: "अंतिम नाम",
        emailLabel: "ईमेल पता *",
        phoneLabel: "मोबाइल नंबर *",
        insuranceTypeLabel: "बीमा प्रकार *",
        locationLabel: "स्थान *",
        addressLabel: "पता",
        messageLabel: "संदेश/आवश्यकताएं",
        submitBtn: "कोटेशन अनुरोध भेजें",
        selectInsuranceOption: "बीमा प्रकार चुनें",
        selectLocationOption: "स्थान चुनें",
        successTitle: "कोटेशन अनुरोध भेजा गया!",
        successText: "आपके कोटेशन अनुरोध के लिए धन्यवाद। हम जल्द ही आपके व्यक्तिगत बीमा कोटेशन के साथ संपर्क करेंगे।",
        validationError: "कृपया सभी आवश्यक फ़ील्ड भरें",
        invalidEmail: "कृपया एक वैध ईमेल पता दर्ज करें",
        invalidPhone: "कृपया एक वैध फ़ोन नंबर दर्ज करें"
    },
    marathi: {
        pageTitle: "विमा कोटेशन मिळवा",
        pageSubtitle: "उर्मिला देशमुख कडून वैयक्तिक विमा कोटेशन मिळवण्यासाठी हा फॉर्म भरा",
        contactInfoTitle: "संपर्क माहिती",
        officeHoursTitle: "कार्यालय वेळा",
        mondayToSaturday: "सोमवार - शनिवार: सकाळ 9:00 - संध्याकाळ 7:00",
        sunday: "रविवार: सकाळ 10:00 - संध्याकाळ 5:00",
        whatsappText: "WhatsApp वर चैट करा",
        formTitle: "विमा कोटेशन विनंती",
        firstNameLabel: "पहिले नाव *",
        lastNameLabel: "आडनाव",
        emailLabel: "ईमेल पत्ता *",
        phoneLabel: "मोबाइल नंबर *",
        insuranceTypeLabel: "विमा प्रकार *",
        locationLabel: "स्थान *",
        addressLabel: "पत्ता",
        messageLabel: "संदेश/आवश्यकता",
        submitBtn: "कोटेशन विनंती पाठवा",
        selectInsuranceOption: "विमा प्रकार निवडा",
        selectLocationOption: "स्थान निवडा",
        successTitle: "कोटेशन विनंती पाठविली!",
        successText: "तुमच्या कोटेशन विनंतीसाठी धन्यवाद. आम्ही लवकरच तुमच्या वैयक्तिक विमा कोटेशनसह संपर्क साधू.",
        validationError: "कृपया सर्व आवश्यक फील्ड भरा",
        invalidEmail: "कृपया वैध ईमेल पत्ता प्रविष्ट करा",
        invalidPhone: "कृपया वैध फोन नंबर प्रविष्ट करा"
    }
};

// Current language state
let currentLanguage = 'english';

// DOM elements
const languageSelect = document.getElementById('languageSelect');
const quoteForm = document.getElementById('quoteForm');
const successMessage = document.getElementById('successMessage');
const closeSuccess = document.getElementById('closeSuccess');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    
    // Add event listeners
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
    
    quoteForm.addEventListener('submit', handleFormSubmit);
    closeSuccess.addEventListener('click', hideSuccessMessage);
    
    // Close success message when clicking outside
    successMessage.addEventListener('click', function(e) {
        if (e.target === successMessage) {
            hideSuccessMessage();
        }
    });
});

// Update language function
function updateLanguage() {
    const texts = translations[currentLanguage];
    
    // Update all text elements
    document.getElementById('pageTitle').textContent = texts.pageTitle;
    document.getElementById('pageSubtitle').textContent = texts.pageSubtitle;
    document.getElementById('contactInfoTitle').textContent = texts.contactInfoTitle;
    document.getElementById('officeHoursTitle').textContent = texts.officeHoursTitle;
    document.getElementById('mondayToSaturday').textContent = texts.mondayToSaturday;
    document.getElementById('sunday').textContent = texts.sunday;
    document.getElementById('whatsappText').textContent = texts.whatsappText;
    document.getElementById('formTitle').textContent = texts.formTitle;
    document.getElementById('firstNameLabel').textContent = texts.firstNameLabel;
    document.getElementById('lastNameLabel').textContent = texts.lastNameLabel;
    document.getElementById('emailLabel').textContent = texts.emailLabel;
    document.getElementById('phoneLabel').textContent = texts.phoneLabel;
    document.getElementById('insuranceTypeLabel').textContent = texts.insuranceTypeLabel;
    document.getElementById('locationLabel').textContent = texts.locationLabel;
    document.getElementById('addressLabel').textContent = texts.addressLabel;
    document.getElementById('messageLabel').textContent = texts.messageLabel;
    document.getElementById('submitBtn').textContent = texts.submitBtn;
    document.getElementById('selectInsuranceOption').textContent = texts.selectInsuranceOption;
    document.getElementById('selectLocationOption').textContent = texts.selectLocationOption;
    document.getElementById('successTitle').textContent = texts.successTitle;
    document.getElementById('successText').textContent = texts.successText;
    
    // Update page title
    document.title = texts.pageTitle + ' - Urmila Deshmukh Insurance Services';
}

// Form validation
function validateForm(formData) {
    const texts = translations[currentLanguage];
    
    // Check required fields
    if (!formData.firstName || !formData.email || !formData.phone || !formData.insuranceType || !formData.location) {
        showAlert(texts.validationError, 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showAlert(texts.invalidEmail, 'error');
        return false;
    }
    
    // Validate phone (basic validation for Indian numbers)
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\s+/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showAlert(texts.invalidPhone, 'error');
        return false;
    }
    
    return true;
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(quoteForm);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Disable submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = currentLanguage === 'english' ? 'Sending...' : 
                           currentLanguage === 'hindi' ? 'भेजा जा रहा है...' : 
                           'पाठवत आहे...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Reset form
        quoteForm.reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        updateLanguage(); // This will reset the button text
        
        // Optional: Send data to WhatsApp or email
        sendToWhatsApp(data);
        
    }, 1500);
}

// Show success message
function showSuccessMessage() {
    successMessage.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Hide success message
function hideSuccessMessage() {
    successMessage.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Show alert function
function showAlert(message, type) {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : 'check-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add alert styles
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#fee2e2' : '#d1fae5'};
        color: ${type === 'error' ? '#dc2626' : '#065f46'};
        padding: 12px 16px;
        border-radius: 8px;
        border: 1px solid ${type === 'error' ? '#fecaca' : '#a7f3d0'};
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
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
    
    // Remove after 4 seconds
    setTimeout(() => {
        alert.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 4000);
}

// Send to WhatsApp function
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
    
    // Optional: Open WhatsApp automatically (uncomment if desired)
    // window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add input formatting for phone numbers
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    
    phoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        
        // Add +91 prefix if not present
        if (value.length > 0 && !value.startsWith('91')) {
            value = '91' + value;
        }
        
        // Format as +91 XXXXX XXXXX
        if (value.length > 2) {
            value = '+' + value.substring(0, 2) + ' ' + value.substring(2, 7) + ' ' + value.substring(7, 12);
        }
        
        this.value = value;
    });
});

// Add form field focus animations
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

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close success message with Escape key
    if (e.key === 'Escape' && successMessage.classList.contains('show')) {
        hideSuccessMessage();
    }
    
    // Submit form with Ctrl+Enter
    if (e.ctrlKey && e.key === 'Enter') {
        quoteForm.dispatchEvent(new Event('submit'));
    }
});

// Add loading animation
function addLoadingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        .loading {
            position: relative;
            overflow: hidden;
        }
        
        .loading::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize loading animation
addLoadingAnimation();

// Add accessibility features
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        field.setAttribute('aria-required', 'true');
    });
    
    // Add role attributes
    document.getElementById('successMessage').setAttribute('role', 'dialog');
    document.getElementById('successMessage').setAttribute('aria-modal', 'true');
    
    // Focus management for success dialog
    successMessage.addEventListener('transitionend', function() {
        if (this.classList.contains('show')) {
            closeSuccess.focus();
        }
    });
});

// Export for potential use in other scripts
window.InsuranceQuoteForm = {
    updateLanguage,
    validateForm,
    showSuccessMessage,
    hideSuccessMessage,
    currentLanguage: () => currentLanguage,
    translations
};