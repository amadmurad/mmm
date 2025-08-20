# SkyBuild - Modern Windows & Doors Website

A beautiful, responsive website for SkyBuild construction company, featuring modern design, smooth animations, and excellent mobile experience.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Beautiful gradients, animations, and visual effects
- **Two Main Buttons**: Prominent window and door service buttons as requested
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Mobile-First**: Optimized for mobile users with touch-friendly interactions
- **No Database Required**: Pure frontend website as requested
- **Fast Loading**: Optimized performance with lazy loading and efficient animations

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. For development, you can use a local server:
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve .`
   - **PHP**: `php -S localhost:8000`

## 📁 File Structure

```
SkyBuild/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses a modern color scheme that can be easily customized in `styles.css`:

```css
/* Primary colors */
--primary-blue: #2563eb;
--primary-purple: #3b82f6;
--accent-gold: #ffd700;

/* Background gradients */
--hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Images
To add your own images:

1. **Replace Icons**: The website currently uses Font Awesome icons. You can replace them with your own images:
   ```html
   <!-- Replace this -->
   <i class="fas fa-window-maximize"></i>
   
   <!-- With this -->
   <img src="your-window-image.jpg" alt="Windows" class="button-image">
   ```

2. **Add Background Images**: You can add background images to sections:
   ```css
   .hero {
       background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%),
                   url('your-background-image.jpg');
       background-size: cover;
       background-position: center;
   }
   ```

### Content
- **Company Information**: Update the about section in `index.html`
- **Contact Details**: Modify the contact information
- **Services**: Customize the services offered

## 📱 Mobile Optimization

The website is fully optimized for mobile devices:

- **Touch-Friendly**: Large buttons and touch targets
- **Responsive Layout**: Adapts to all screen sizes
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Optimized Images**: Responsive images that scale properly

## 🎭 Animations & Effects

### Available Animations
- **Floating Shapes**: Background elements that move with scroll
- **Fade-in Effects**: Content appears as you scroll
- **Hover Effects**: Interactive button animations
- **Ripple Effects**: Click animations on buttons
- **Smooth Scrolling**: Navigation between sections

### Customizing Animations
You can adjust animation speeds and effects in `styles.css`:

```css
/* Animation duration */
transition: all 0.3s ease;

/* Animation timing function */
animation: float 6s ease-in-out infinite;
```

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Lazy Loading**: Images load as needed
- **Throttled Events**: Optimized scroll handling
- **CSS Animations**: Hardware-accelerated animations
- **Minimal Dependencies**: Only Font Awesome for icons

### SEO Features
- Semantic HTML structure
- Meta tags for social sharing
- Accessible navigation
- Fast loading times

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast deployment with Git integration
- **AWS S3**: Scalable cloud hosting

### Custom Domain
To use your own domain:
1. Purchase a domain name
2. Configure DNS settings
3. Upload files to your hosting provider
4. Set up SSL certificate (recommended)

## 📝 Adding Real Images

When you're ready to add real images:

1. **Create an `images/` folder** in your project
2. **Add your images** (recommended formats: WebP, JPEG, PNG)
3. **Update HTML** to reference your images:
   ```html
   <img src="images/window-example.jpg" alt="Modern Window" class="button-image">
   ```
4. **Optimize images** for web (compress, resize if needed)

## 🎯 Key Sections

### Hero Section
- Company name with gradient effect
- Two main service buttons (Windows & Doors)
- Floating background shapes
- Call-to-action subtitle

### About Section
- Company description
- Key features and benefits
- Visual placeholder (ready for your image)

### Services Section
- Detailed service cards
- Hover effects and animations
- Professional presentation

### Contact Section
- Contact information
- Contact form with validation
- Professional layout

## 🛠️ Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and ensure images exist
2. **Animations not working**: Ensure JavaScript is enabled
3. **Mobile menu not working**: Check for JavaScript errors in console

### Performance Tips
1. **Optimize images** before uploading
2. **Minify CSS/JS** for production
3. **Use WebP format** for better compression
4. **Enable gzip compression** on your server

## 📞 Support

If you need help customizing or deploying your website:

1. Check the code comments for guidance
2. Review the CSS classes for styling options
3. Modify the JavaScript for custom functionality
4. Test on multiple devices and browsers

## 🔄 Updates & Maintenance

### Regular Updates
- Keep contact information current
- Update service offerings as needed
- Refresh images and content periodically
- Monitor website performance

### Security
- Keep dependencies updated
- Use HTTPS in production
- Regular backups of your files

## 📊 Analytics

To track website performance, consider adding:

- Google Analytics
- Google Search Console
- Performance monitoring tools

---

**SkyBuild** - Building your vision, one window and door at a time! 🏗️✨

*This website is designed to be professional, modern, and user-friendly while showcasing your construction expertise.*
