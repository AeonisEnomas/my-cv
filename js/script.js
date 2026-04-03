
/**
 * Portfolio JavaScript - Enhanced with modern features
 * Author: Abdullah Mushtaq
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLoadingScreen();
    initTypingEffect();
    initThemeToggle();
    initNavigation();
    initScrollProgress();
    initRevealAnimations();
    initSkillBars();
    initContactForm();
    initDownloadCV();
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after animation
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 800);
    });
}

// ============================================
// TYPING EFFECT
// ============================================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const roles = [
        'CS Undergraduate',
        'Full-Stack Developer',
        'Problem Solver',
        'C++ Enthusiast',
        'React.js Developer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ============================================
// THEME TOGGLE
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');

        // Toggle icon
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }

        // Add ripple effect
        createRipple(themeToggle);
    });
}

function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${(rect.width - size) / 2}px`;
    ripple.style.top = `${(rect.height - size) / 2}px`;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Show/hide desktop nav on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            desktopNav.classList.add('visible');
        } else {
            desktopNav.classList.remove('visible');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    function openMobileNav() {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        overlay.id = 'mobile-nav-overlay';
        document.body.appendChild(overlay);

        setTimeout(() => overlay.classList.add('active'), 10);

        overlay.addEventListener('click', closeMobileNav);
    }

    function closeMobileNav() {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';

        const overlay = document.getElementById('mobile-nav-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        }
    }

    mobileMenuBtn.addEventListener('click', openMobileNav);
    mobileNavClose.addEventListener('click', closeMobileNav);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Active section highlighting
    function updateActiveNav() {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Smooth scroll for all nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#download-cv') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = `${scrollPercent}%`;
    });
}

// ============================================
// REVEAL ANIMATIONS (Intersection Observer)
// ============================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Animate skill bars if inside this section
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = `${width}%`;
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================
// SKILL BARS ANIMATION
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = `${width}%`;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.getElementById('message-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = form.querySelector('.submit-btn');
    const toast = document.getElementById('toast');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;

        // Validate
        if (!name || !email || !message) {
            showFormStatus('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormStatus('Please enter a valid email', 'error');
            return;
        }

        // Show loading state
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate API call (replace with actual API endpoint)
        try {
            await simulateFormSubmission({ name, email, message });

            showToast(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
            showFormStatus('', '');
        } catch (error) {
            showFormStatus('Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
    }

    function simulateFormSubmission(data) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
    }

    function showToast(message) {
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.required && !input.value.trim()) {
                input.style.borderColor = 'var(--accent-error)';
            } else {
                input.style.borderColor = '';
            }
        });

        input.addEventListener('input', () => {
            input.style.borderColor = '';
        });
    });
}

// ============================================
// DOWNLOAD CV
// ============================================
function initDownloadCV() {
    const downloadBtn = document.getElementById('download-cv');

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Create print-friendly content
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        const printContent = generatePrintableCV();

        printWindow.document.write(printContent);
        printWindow.document.close();

        // Wait for styles to load then print
        setTimeout(() => {
            printWindow.print();
        }, 500);
    });
}

function generatePrintableCV() {
    const name = document.querySelector('.hero-name')?.textContent || 'Abdullah Mushtaq';
    const title = document.querySelector('.hero-title')?.textContent || 'CS Undergraduate';

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${name} - CV</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Segoe UI', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 40px;
                }
                h1 {
                    font-size: 2rem;
                    color: #2563eb;
                    margin-bottom: 5px;
                }
                h2 {
                    font-size: 1.1rem;
                    color: #666;
                    font-weight: 400;
                    margin-bottom: 20px;
                }
                h3 {
                    font-size: 1.1rem;
                    color: #2563eb;
                    border-bottom: 2px solid #2563eb;
                    padding-bottom: 5px;
                    margin: 25px 0 15px;
                }
                .contact-info {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .contact-info span {
                    font-size: 0.9rem;
                }
                .education-item, .project-item {
                    margin-bottom: 15px;
                }
                .item-header {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 600;
                }
                .item-subheader {
                    color: #666;
                    font-style: italic;
                }
                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .skill-tag {
                    background: #e0e7ff;
                    padding: 3px 10px;
                    border-radius: 15px;
                    font-size: 0.85rem;
                }
                ul {
                    margin-left: 20px;
                    margin-top: 5px;
                }
                li {
                    margin-bottom: 5px;
                }
                @media print {
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <h2>${title}</h2>

            <div class="contact-info">
                <span>✉ abdullahmushtaq445@gmail.com</span>
                <span>📱 +92 302 1047124</span>
                <span>🔗 github.com/AevitusOmegus</span>
                <span>📍 Lahore, Pakistan</span>
            </div>

            <h3>Professional Summary</h3>
            <p>CS Undergraduate at FAST-NUCES Lahore with a focus on Full-Stack Development and Core Computing Fundamentals. Experienced in React.js, Node.js, and C++, dedicated to developing high-impact software solutions.</p>

            <h3>Education</h3>
            <div class="education-item">
                <div class="item-header">
                    <span>Bachelor of Computer Science</span>
                    <span>2023 - 2027</span>
                </div>
                <div class="item-subheader">FAST NUCES Lahore</div>
            </div>
            <div class="education-item">
                <div class="item-header">
                    <span>Inter Pre-Medical</span>
                    <span>2020 - 2022</span>
                </div>
                <div class="item-subheader">Shalimar College Lahore</div>
            </div>

            <h3>Technical Skills</h3>
            <div class="skills-list">
                <span class="skill-tag">React.js</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">T-SQL</span>
                <span class="skill-tag">C#</span>
                <span class="skill-tag">C++</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Assembly</span>
            </div>

            <h3>Projects</h3>
            <div class="project-item">
                <div class="item-header">Classroom Management System</div>
                <div class="item-subheader">React.js | Express.js | T-SQL</div>
                <ul>
                    <li>Developed responsive web application with user role-based authentication</li>
                    <li>Architected relational database using T-SQL for high-performance data retrieval</li>
                    <li>Implemented RESTful APIs for seamless frontend-backend communication</li>
                </ul>
            </div>
            <div class="project-item">
                <div class="item-header">2D Dungeon Crawler - Penance</div>
                <div class="item-subheader">C++ | Raylib</div>
                <ul>
                    <li>Created feature-rich game with complex mechanics and sprite animations</li>
                    <li>Implemented collision detection, enemy AI, and real-time rendering</li>
                </ul>
            </div>
            <div class="project-item">
                <div class="item-header">Maze Rush</div>
                <div class="item-subheader">Assembly Language</div>
                <ul>
                    <li>Developed maze navigation game in low-level Assembly language</li>
                    <li>Implemented efficient memory management and interrupt-driven game logic</li>
                </ul>
            </div>
        </body>
        </html>
    `;
}

// Add ripple animation CSS
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
