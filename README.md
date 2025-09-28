# Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and JavaScript. The site features a clean design with interactive elements and is fully localized in Slovak.
<p align="center">
  <img src="https://github.com/Marek-Repisky/Restaurant-website/blob/main/Gallery.png" alt=Restaurant gallery">
  <br />
  <i>Obrázok 1: Restaurant gallery</i>
</p>

## 🍽️ Features

### Core Pages
- **Homepage (index.html)** - Main landing page with hero section and reservation form
- **Menu (Menu.html)** - Interactive accordion-style menu with dish descriptions
- **Gallery (Galeria.html)** - Image slideshow showcasing restaurant dishes
- **Reviews (Recenzie.html)** - Customer testimonials and feedback

### Interactive Elements
- **Dynamic Banner** - Christmas specials countdown that updates daily
- **Image Slideshow** - Gallery with navigation arrows and dot indicators
- **Accordion Menu** - Expandable menu items with detailed descriptions
- **Chat Popup** - Customer service chat functionality
- **Reservation Form** - Complete booking system with validation
- **Cookie Consent** - GDPR-compliant cookie acceptance popup
- **Smooth Scrolling** - Enhanced navigation experience

## 🚀 Getting Started

### Installation
1. Clone or download the project files
2. Ensure the following file structure:
```
restaurant-website/
├── index.html
├── Menu.html
├── Galeria.html
├── Recenzie.html
├── css/
│   ├── style.css
│   ├── Menu.css
│   ├── Galeria.css
│   └── Recenzie.css
├── js/
│   ├── index.js
│   ├── Menu.js
│   ├── Galeria.js
│   └── Recenzie.js
└── img/
    ├── Logo.png
    ├── Salmon.jpg
    ├── Risotto.jpg
    ├── Chicken.jpg
    ├── Curry.jpg
    └── Steak.jpg
```

3. Open `index.html` in your web browser

## 🎨 Customization

### Restaurant Information
Update the following in all HTML files:
- Restaurant name: Currently "MenoRestauracie"
- Contact email: `menoRestauracie@gmail.com`
- Phone number: `+421999888777`
- Copyright year: Currently 2023

### Menu Items
Edit the accordion sections in `Menu.html`:
```html
<button class="accordion">Dish Name</button>
<div class="panel">
  <p>Dish description...</p>
</div>
```

### Gallery Images
Replace images in the `img/` folder and update corresponding references in `Galeria.html`:
- `Salmon.jpg` - Grilled salmon
- `Risotto.jpg` - Mushroom risotto
- `Chicken.jpg` - Chicken parmesan
- `Curry.jpg` - Thai green curry
- `Steak.jpg` - Prime ribeye steak

### Opening Hours
Modify the table in `index.html` to reflect your restaurant's schedule:
```html
<td>9<sup>00</sup> - 17<sup>00</sup></td>
```

## 🔧 Technical Details

### JavaScript Functionality
- **Countdown Timer**: Automatically calculates days until Christmas (December 24)
- **Slideshow**: Manual navigation with automatic looping
- **Form Validation**: Built-in HTML5 validation with custom alerts
- **Responsive Design**: Mobile-friendly layout
- **Smooth Scrolling**: Enhanced navigation between sections

### External Dependencies
- **Google Fonts**: Material Icons for UI elements
- **Google Fonts API**: `https://fonts.googleapis.com/icon?family=Material+Icons`

### Browser Compatibility
- Modern browsers (Chrome 60+, Firefox 55+, Safari 12+)
- IE11+ (with potential styling limitations)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (up to 767px)

## 🛠️ Development Notes

### Key Features Implementation
1. **Dynamic Content**: Countdown timer updates daily
2. **Interactive Elements**: Hover effects and smooth transitions
3. **Form Handling**: Client-side validation with server-side ready structure
4. **Accessibility**: Semantic HTML and proper alt attributes
5. **SEO Optimized**: Meta tags and structured content
