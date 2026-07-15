/* ============================================
   ARCHITEKT - JavaScript Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Video Slider Functionality
    // ============================================
    const slider = {
        slides: document.querySelectorAll('.slide'),
        indicators: document.querySelectorAll('.indicator'),
        prevBtn: document.querySelector('.slider-btn.prev'),
        nextBtn: document.querySelector('.slider-btn.next'),
        currentSlide: 0,
        autoplayInterval: null,
        autoplayDelay: 6000
    };

    function initSlider() {
        if (slider.slides.length === 0) return;

        // Set up event listeners
        slider.prevBtn.addEventListener('click', () => changeSlide(-1));
        slider.nextBtn.addEventListener('click', () => changeSlide(1));
        
        slider.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });

        // Start autoplay
        startAutoplay();

        // Pause on hover
        const heroSection = document.querySelector('.hero-slider');
        heroSection.addEventListener('mouseenter', stopAutoplay);
        heroSection.addEventListener('mouseleave', startAutoplay);
    }

    function changeSlide(direction) {
        let newIndex = slider.currentSlide + direction;
        
        if (newIndex >= slider.slides.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slider.slides.length - 1;
        }
        
        goToSlide(newIndex);
    }

    function goToSlide(index) {
        // Remove active class from current slide
        slider.slides[slider.currentSlide].classList.remove('active');
        slider.indicators[slider.currentSlide].classList.remove('active');
        
        // Update current slide index
        slider.currentSlide = index;
        
        // Add active class to new slide
        slider.slides[slider.currentSlide].classList.add('active');
        slider.indicators[slider.currentSlide].classList.add('active');
        
        // Reset video for smooth transition
        const video = slider.slides[slider.currentSlide].querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play().catch(e => console.log('Video autoplay prevented:', e));
        }
    }

    function startAutoplay() {
        slider.autoplayInterval = setInterval(() => {
            changeSlide(1);
        }, slider.autoplayDelay);
    }

    function stopAutoplay() {
        clearInterval(slider.autoplayInterval);
    }

    // Initialize slider
    initSlider();


    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Unobserve after animation triggers (optional)
                // scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-on-scroll class
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });


    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });


    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }


    // ============================================
    // Contact Form Handling
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Sent!</span>';
                submitBtn.style.background = '#4CAF50';
                
                // Reset form
                this.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
                showNotification('Thank you! We will be in touch soon.', 'success');
            }, 1500);
        });
    }


    // ============================================
    // Notification System
    // ============================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '1rem 2rem',
            background: type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3',
            color: 'white',
            borderRadius: '4px',
            fontSize: '0.875rem',
            zIndex: '9999',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            animation: 'slideInRight 0.3s ease-out'
        });
        
        document.body.appendChild(notification);
        
        // Auto-remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }


    // ============================================
    // Parallax Effect for Hero Content
    // ============================================
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroHeight = document.querySelector('.hero-slider').offsetHeight;
            
            if (scrolled < heroHeight) {
                const opacity = 1 - (scrolled / (heroHeight * 0.5));
                const translateY = scrolled * 0.3;
                
                heroContent.style.opacity = Math.max(0, opacity);
                heroContent.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
                
                // For mobile view
                if (window.innerWidth < 768) {
                    heroContent.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
                }
            }
        }, { passive: true });
    }


    // ============================================
    // Lazy Loading for Images
    // ============================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));


    // ============================================
    // Cursor Follow Effect (Optional - Desktop Only)
    // ============================================
    if (window.matchMedia('(hover: hover)').matches && window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 1px solid rgba(26, 26, 26, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, background-color 0.3s;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.backgroundColor = 'rgba(26, 26, 26, 0.1)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }


    // ============================================
    // Keyboard Navigation for Slider
    // ============================================
    document.addEventListener('keydown', (e) => {
        const heroSection = document.querySelector('.hero-slider');
        const isHeroInViewport = heroSection.getBoundingClientRect().top < window.innerHeight;
        
        if (isHeroInViewport) {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        }
    });


    // ============================================
    // Performance: Throttle Scroll Events
    // ============================================
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function(...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime < delay) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    lastExecTime = currentTime;
                    func.apply(this, args);
                }, delay);
            } else {
                lastExecTime = currentTime;
                func.apply(this, args);
            }
        };
    }


    // ============================================
    // Add CSS Animations for Notifications
    // ============================================
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
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        /* Mobile menu styles */
        @media (max-width: 767px) {
            .nav-links.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 2rem;
                gap: 1.5rem;
                border-bottom: 1px solid #E8E8E8;
                animation: slideDown 0.3s ease-out;
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .menu-toggle.active span:nth-child(2) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);


    // ============================================
    // Console Welcome Message
    // ============================================
    console.log('%cARCHITEKT Studio', 'font-size: 24px; font-weight: bold; color: #1A1A1A;');
    console.log('%cArchitectural Excellence Through Minimalist Design', 'font-size: 14px; color: #8B7355;');
    console.log('%cBuilt with precision and passion.', 'font-size: 12px; color: #9A9A9A;');
});
