# Urmila Deshmukh Insurance Services - Standalone Quote Form

This is a standalone HTML/CSS/JavaScript quote form that can be shared independently for insurance quote requests.

## Features

- **Multi-language Support**: English, Hindi (हिंदी), and Marathi (मराठी)
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Professional Design**: Clean, modern interface with Urmila Deshmukh branding
- **Form Validation**: Client-side validation with multilingual error messages
- **WhatsApp Integration**: Automatic WhatsApp message generation for received quotes
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Files

- `index.html` - Main HTML file with the quote form
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript functionality, validation, and multi-language support
- `README.md` - This documentation file

## How to Use

### 1. Direct Sharing
Simply share the `index.html` file or upload all files to a web server. The form works completely standalone.

### 2. Web Server Setup
Upload all files to your web server:
```
/your-website/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 3. Local Testing
Open `index.html` in any modern web browser to test locally.

## Form Fields

### Required Fields (marked with *)
- **First Name** - Customer's first name
- **Email Address** - Valid email for follow-up
- **Mobile Number** - Indian phone number format (+91 XXXXX XXXXX)
- **Insurance Type** - Select from: Life, Health, Car/Bike, Travel, Business, General
- **Location** - Select from major Maharashtra cities or "Other"

### Optional Fields
- **Last Name** - Customer's last name
- **Address** - Customer's address
- **Message/Requirements** - Additional information or specific requirements

## Language Support

The form automatically translates all text including:
- Form labels and placeholders
- Validation messages
- Success messages
- Contact information
- Office hours

**Languages Available:**
- English (default)
- Hindi (हिंदी)
- Marathi (मराठी)

## Contact Information

The form displays:
- **Phone**: +91 99999 99999
- **Address**: Office No. 12, Prime Business Center, Pune, MH
- **Office Hours**: 
  - Monday - Saturday: 9:00 AM - 7:00 PM
  - Sunday: 10:00 AM - 5:00 PM
- **WhatsApp**: Direct chat link

## Technical Features

### Form Validation
- Real-time validation with visual feedback
- Email format validation
- Indian phone number validation
- Multi-language error messages

### User Experience
- Smooth animations and transitions
- Loading states during form submission
- Success confirmation modal
- Keyboard navigation support
- Focus management for accessibility

### WhatsApp Integration
Upon form submission, the system can automatically:
- Generate a formatted WhatsApp message
- Include all form data
- Open WhatsApp with pre-filled message (optional)

## Customization

### Updating Contact Information
Edit the following in `index.html`:
- Phone numbers in href attributes
- Address text
- Office hours
- WhatsApp link

### Modifying Form Fields
To add/remove form fields:
1. Update the HTML structure in `index.html`
2. Add corresponding labels to all three languages in `script.js`
3. Update validation logic if needed

### Styling Changes
Modify `styles.css` to:
- Change colors (CSS variables at the top)
- Adjust responsive breakpoints
- Modify spacing and layout
- Update fonts and typography

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Notes

- Form data is processed client-side only
- No sensitive data is stored
- All external links open in new tabs
- CSRF protection not needed (no server-side processing)

## Deployment Options

### Static Web Hosting
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

### CDN Integration
The form uses CDN resources for:
- Font Awesome icons
- Google Fonts (Inter)
- All other assets are local

## Support

For technical support or customization requests, contact:
- Phone: +91 99999 99999
- WhatsApp: https://wa.me/919999999999

---

**Created for Urmila Deshmukh Insurance Services**  
Professional insurance advisory services in Maharashtra, India.