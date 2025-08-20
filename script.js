// Image Grid Modal Functions
function openImageGrid(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeImageGrid(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Image Gallery Functions
let currentGalleryType = '';
let currentImageIndex = 0;
let galleryImages = [];

function openImageGallery(type, index) {
    currentGalleryType = type;
    currentImageIndex = index;
    
    // Set up gallery images based on type
    if (type === 'windows') {
        galleryImages = [
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Modern Casement Window', description: 'Energy efficient design' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Sliding Window', description: 'Space-saving solution' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Bay Window', description: 'Elegant architectural feature' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Picture Window', description: 'Maximum natural light' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Awning Window', description: 'Ventilation with privacy' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center', title: 'Double-Hung Window', description: 'Classic design' }
        ];
    } else if (type === 'doors') {
        galleryImages = [
            { src: 'photo_2025-08-20_02-18-28.jpg', title: 'Premium uPVC Door', description: 'Modern design with excellent insulation' },
            { src: 'photo_2025-08-20_02-18-22.jpg', title: 'Contemporary Entry Door', description: 'Elegant and secure entrance' },
            { src: 'photo_2025-08-20_02-18-18.jpg', title: 'Sliding Glass Door', description: 'Indoor-outdoor living experience' },
            { src: 'photo_2025-08-20_02-18-13.jpg', title: 'French Doors', description: 'Timeless sophistication' },
            { src: 'photo_2025-08-20_02-18-09.jpg', title: 'Barn Door', description: 'Rustic charm and character' },
            { src: 'photo_2025-08-20_02-18-01.jpg', title: 'Pocket Door', description: 'Space-saving design solution' },
            { src: 'photo_2025-08-20_02-17-56.jpg', title: 'Bifold Door', description: 'Versatile functionality' },
            { src: 'photo_2025-08-20_02-17-50.jpg', title: 'Panel Door', description: 'Classic panel design' },
            { src: 'photo_2025-08-20_02-17-43.jpg', title: 'Glass Panel Door', description: 'Natural light enhancement' },
            { src: 'photo_2025-08-20_02-17-40.jpg', title: 'Solid Wood Door', description: 'Premium quality construction' },
            { src: 'photo_2025-08-20_02-17-36.jpg', title: 'Composite Door', description: 'Durability meets style' },
            { src: 'photo_2025-08-20_02-17-32.jpg', title: 'Security Door', description: 'Enhanced protection' },
            { src: 'photo_2025-08-20_02-17-27.jpg', title: 'Luxury Entry Door', description: 'Premium architectural feature' },
            { src: 'photo_2025-08-20_02-17-20.jpg', title: 'Modern Sliding Door', description: 'Contemporary design' },
            { src: 'Internal-Door.jpg', title: 'Internal Door', description: 'Perfect for interior spaces' },
            { src: 'mg_dt_1_upvc_doors_1.jpg', title: 'uPVC Door Collection', description: 'Energy efficient solution' },
            { src: '3l4-13-2-1-installed.png', title: 'Professional Installation', description: 'Expert fitting service' },
            { src: 'uPVC-3-scaled.jpg', title: 'uPVC Door Range', description: 'Wide selection available' },
            { src: 'Blog2_uPVC_Bathroom_Door-1_11zon-1024x1024.jpg', title: 'Bathroom Door', description: 'Moisture resistant design' },
            { src: '1.jpg', title: 'Contemporary Style', description: 'Modern aesthetic appeal' },
            { src: '2.jpg', title: 'Classic Design', description: 'Timeless elegance' },
            { src: '3.jpg', title: 'Modern Appeal', description: 'Contemporary charm' },
            { src: 'images.jpg', title: 'Door Collection', description: 'Comprehensive range' },
            { src: 'images (1).jpg', title: 'Elegant Design', description: 'Sophisticated style' },
            { src: 'images (2).jpg', title: 'Premium Quality', description: 'Exceptional craftsmanship' },
            { src: 'images (4).jpg', title: 'Modern Collection', description: 'Contemporary designs' },
            { src: 'images (7).jpg', title: 'Style Variety', description: 'Multiple options available' },
            { src: 'download.jpg', title: 'Download Catalog', description: 'View full collection' }
        ];
    }
    
    // Close the grid modal
    closeImageGrid(type);
    
    // Open gallery modal
    const galleryModal = document.getElementById('imageGalleryModal');
    if (galleryModal) {
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateGalleryImage();
    }
}

function closeImageGallery() {
    const galleryModal = document.getElementById('imageGalleryModal');
    if (galleryModal) {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function updateGalleryImage() {
    if (galleryImages.length === 0) return;
    
    const image = document.getElementById('galleryImage');
    const currentIndex = document.getElementById('currentImageIndex');
    const totalImages = document.getElementById('totalImages');
    
    if (image && currentIndex && totalImages) {
        image.src = galleryImages[currentImageIndex].src;
        currentIndex.textContent = currentImageIndex + 1;
        totalImages.textContent = galleryImages.length;
    }
    
    // Update navigation buttons
    updateNavigationButtons();
}

function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        updateGalleryImage();
    }
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateGalleryImage();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentImageIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentImageIndex === galleryImages.length - 1;
    }
}

// Touch/swipe functionality
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            previousImage();
        }
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('image-modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.image-modal, .image-gallery-modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Arrow key navigation
    if (event.key === 'ArrowLeft') {
        previousImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});

// Smooth scrolling for contact section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add touch event listeners for gallery
    const galleryModal = document.getElementById('imageGalleryModal');
    if (galleryModal) {
        galleryModal.addEventListener('touchstart', handleTouchStart, false);
        galleryModal.addEventListener('touchend', handleTouchEnd, false);
    }
});

// Button hover effects enhancement
document.querySelectorAll('.button-container').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Enhanced button click effects
document.querySelectorAll('.button-container').forEach(button => {
    button.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Position ripple
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
            style.remove();
        }, 600);
        
        // Add click feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('revealed');
        }
    });
}

// Add reveal class to sections
document.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Add CSS for revealed sections
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: none !important;
    }
`;
document.head.appendChild(revealStyle);

// Performance optimization: Throttle scroll events
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
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    revealOnScroll();
}, 16)); // 60fps

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'SkyBuild';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2rem;
        font-weight: 700;
        z-index: 10000;
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;
document.head.appendChild(loadingStyle);
