# Prof. James Si Zeng - Personal Website

A professional personal website for Prof. James Si Zeng, Associate Professor at the Faculty of Law, The University of Hong Kong.

## Overview

This website showcases Prof. Zeng's academic profile, research interests, publications, and contact information. It features:

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, modern interface with intuitive navigation
- **Publication Management**: Organized publication list with filtering capabilities
- **SEO-Friendly**: Proper semantic HTML structure
- **Fast Loading**: Optimized CSS and minimal JavaScript

## File Structure

```
james-si-zeng-website/
│
├── index.html           # Main website file
├── styles.css           # Stylesheet with responsive design
├── script.js            # Interactive functionality
└── README.md            # This file
```

## Features

### 1. Navigation Bar
- Sticky navigation with smooth scrolling
- Links to all major sections
- Responsive mobile menu

### 2. Hero Section
- Professional introduction with profile image
- Call-to-action button
- Gradient background

### 3. About Section
- Academic profile and research interests
- Education history
- Professional credentials
- Previous positions

### 4. Research Focus
- 6 key research areas with descriptions
- Card-based layout with hover effects
- Covers corporate law, state ownership, empirical studies, etc.

### 5. Publications
- Comprehensive publication list (2012-2025)
- Organized by year
- Filter options (All, Recent, Major Journals)
- Links to external publications where available

### 6. Contact Section
- Office address and contact information
- Links to HKU Faculty of Law profile
- Email contact

## How to Use

### Viewing Locally
1. Download all files to your computer
2. Open `index.html` in your web browser
3. Navigate using the menu or scroll through sections

### Deploying to Web

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository named `james-si-zeng.github.io`
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Website will be live at `https://james-si-zeng.github.io`

#### Option 2: Traditional Web Hosting
1. Upload all files to your web hosting server via FTP or file manager
2. Ensure `index.html` is in the root or public directory
3. Access your domain to view the website

#### Option 3: HKU Hosting
Contact the Faculty of Law's IT department to host on HKU servers.

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #003d7a;
    --accent-color: #ff6b35;
    /* ... */
}
```

### Content Updates
- Edit any text directly in `index.html`
- Add/remove publications in the Publications section
- Update contact information in the Contact section

### Adding More Sections
To add new sections:
1. Add a new `<section>` element in `index.html`
2. Give it a unique `id` attribute
3. Add a link in the navigation bar
4. Style using the existing CSS patterns

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE11: Limited support (basic functionality)

## Performance Tips

1. **Image Optimization**: The current profile image is loaded from HKU's server
2. **Caching**: All resources are lightweight for fast loading
3. **No External Dependencies**: Pure HTML/CSS/JavaScript (no jQuery or frameworks required)

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Color contrast meets WCAG standards
- Mobile-friendly touch targets

## Updates and Maintenance

To update the website:

1. **New Publications**: Add entries to the Publications section
2. **New Research**: Update the Research Focus section
3. **Contact Details**: Update the Contact section
4. **Profile Image**: Replace the image URL in the hero section

## Support

For technical questions or website modifications, consult a web developer or the Faculty of Law's IT support.

## License

© 2026 Prof. James Si Zeng. All rights reserved.

Faculty of Law, The University of Hong Kong
