---
name: professional-web-design
description: Create professional, modern, and performant corporate websites with responsive design, smooth animations, and clean minimalist aesthetics. Specializes in converting designs into production-ready HTML/CSS/JS code with optimal performance and accessibility.
---

# Professional Web Design Skill

This skill helps create stunning, production-ready corporate websites that combine modern minimalist design with exceptional performance and user experience.

## Core Design Principles

### 1. Minimalist & Modern Aesthetic
- **Clean layouts**: Generous whitespace, clear hierarchy, focused content
- **Typography-first**: Large, readable fonts with clear hierarchy (48-72px headlines, 18-24px body)
- **Subtle depth**: Soft shadows, gentle gradients, and micro-interactions
- **Limited color palette**: 2-3 brand colors + neutrals (grays, white, black)
- **High-quality imagery**: Hero images, full-width sections, subtle overlays

### 2. Professional Corporate Identity
- **Trust signals**: Professional typography, structured layouts, consistent spacing
- **Clear navigation**: Sticky headers, clear CTAs, logical page structure
- **Brand consistency**: Consistent use of colors, fonts, spacing throughout
- **Content hierarchy**: Clear sections with descriptive headings
- **Social proof**: Testimonials, client logos, case studies, statistics

### 3. User-Centric Design
- **Intuitive navigation**: Clear menu, breadcrumbs, logical flow
- **Fast load times**: < 3s initial load, optimized images, minimal JS
- **Mobile-first**: Design for mobile, enhance for desktop
- **Clear CTAs**: Obvious next steps, contrasting buttons, action-oriented text
- **Scannable content**: Short paragraphs, bullet points, visual breaks

## Technical Architecture

### HTML Structure
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Company Name</title>
    <meta name="description" content="Concise, compelling description">
    
    <!-- Preload critical resources -->
    <link rel="preload" as="font" href="fonts/primary.woff2" crossorigin>
    
    <!-- Critical CSS inline -->
    <style>/* Above-fold critical CSS */</style>
    
    <!-- Defer non-critical CSS -->
    <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
</head>
<body>
    <!-- Semantic HTML5 structure -->
    <header>
        <nav aria-label="Main navigation">
            <!-- Accessible navigation -->
        </nav>
    </header>
    
    <main>
        <!-- Page content with semantic sections -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <!-- Scripts at end, deferred -->
    <script defer src="main.js"></script>
</body>
</html>
```

### CSS Architecture
Use a mobile-first, component-based approach:

```css
/* ============================================
   CUSTOM PROPERTIES (CSS Variables)
   ============================================ */
:root {
    /* Colors */
    --color-primary: #2563eb;
    --color-secondary: #1e40af;
    --color-accent: #3b82f6;
    --color-text: #1f2937;
    --color-text-light: #6b7280;
    --color-bg: #ffffff;
    --color-bg-alt: #f9fafb;
    --color-border: #e5e7eb;
    
    /* Typography */
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-heading: 'Inter', var(--font-primary);
    
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 2rem;      /* 32px */
    --font-size-4xl: 2.5rem;    /* 40px */
    --font-size-5xl: 3rem;      /* 48px */
    --font-size-6xl: 4rem;      /* 64px */
    
    /* Spacing */
    --space-xs: 0.25rem;   /* 4px */
    --space-sm: 0.5rem;    /* 8px */
    --space-md: 1rem;      /* 16px */
    --space-lg: 1.5rem;    /* 24px */
    --space-xl: 2rem;      /* 32px */
    --space-2xl: 3rem;     /* 48px */
    --space-3xl: 4rem;     /* 64px */
    --space-4xl: 6rem;     /* 96px */
    --space-5xl: 8rem;     /* 128px */
    
    /* Layout */
    --container-max: 1280px;
    --container-padding: var(--space-lg);
    --border-radius: 0.5rem;
    --border-radius-lg: 1rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================
   RESET & BASE STYLES
   ============================================ */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--color-text);
    background: var(--color-bg);
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
}

/* ============================================
   TYPOGRAPHY
   ============================================ */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-md);
    color: var(--color-text);
}

h1 { font-size: var(--font-size-5xl); }
h2 { font-size: var(--font-size-4xl); }
h3 { font-size: var(--font-size-3xl); }
h4 { font-size: var(--font-size-2xl); }
h5 { font-size: var(--font-size-xl); }
h6 { font-size: var(--font-size-lg); }

p {
    margin-bottom: var(--space-lg);
    color: var(--color-text-light);
}

a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
}

a:hover {
    color: var(--color-secondary);
}

/* ============================================
   LAYOUT COMPONENTS
   ============================================ */
.container {
    width: 100%;
    max-width: var(--container-max);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
}

.section {
    padding: var(--space-4xl) 0;
}

.section--alt {
    background: var(--color-bg-alt);
}

/* ============================================
   RESPONSIVE BREAKPOINTS
   ============================================ */
@media (min-width: 640px) {
    :root {
        --container-padding: var(--space-2xl);
    }
}

@media (min-width: 1024px) {
    :root {
        --container-padding: var(--space-3xl);
    }
}
```

## Responsive Design Guidelines

### Breakpoint Strategy
```css
/* Mobile-first approach */
/* Base styles: 320px - 639px (mobile) */

@media (min-width: 640px) {
    /* Tablet: 640px - 1023px */
}

@media (min-width: 1024px) {
    /* Desktop: 1024px - 1279px */
}

@media (min-width: 1280px) {
    /* Large desktop: 1280px+ */
}
```

### Responsive Patterns

**Flexible Grid System**:
```css
.grid {
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Responsive columns */
.grid--2 { grid-template-columns: 1fr; }
@media (min-width: 640px) {
    .grid--2 { grid-template-columns: repeat(2, 1fr); }
}

.grid--3 { grid-template-columns: 1fr; }
@media (min-width: 640px) {
    .grid--3 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
    .grid--3 { grid-template-columns: repeat(3, 1fr); }
}
```

**Responsive Typography**:
```css
/* Fluid typography using clamp() */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

p {
    font-size: clamp(1rem, 2vw, 1.125rem);
}
```

**Container Queries** (for modern browsers):
```css
.card-container {
    container-type: inline-size;
}

.card {
    padding: var(--space-md);
}

@container (min-width: 400px) {
    .card {
        padding: var(--space-xl);
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
}
```

## Animation Best Practices

### Performance-First Animations
Only animate properties that don't trigger layout/paint:
- ✅ `transform`, `opacity`
- ❌ `width`, `height`, `top`, `left`, `margin`

```css
/* Good: GPU-accelerated */
.card {
    transition: transform var(--transition-base), 
                opacity var(--transition-fast);
}

.card:hover {
    transform: translateY(-4px);
    opacity: 0.95;
}

/* Bad: Causes layout recalculation */
.card-bad {
    transition: margin-top 250ms;
}

.card-bad:hover {
    margin-top: -4px; /* Don't do this */
}
```

### Animation Patterns

**Fade In on Scroll**:
```css
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

```javascript
// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

**Smooth Hover Effects**:
```css
.button {
    position: relative;
    overflow: hidden;
    background: var(--color-primary);
    color: white;
    padding: var(--space-md) var(--space-xl);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: transform var(--transition-fast),
                box-shadow var(--transition-fast);
}

.button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.2), 
        transparent);
    transition: left 0.5s;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.button:hover::before {
    left: 100%;
}

.button:active {
    transform: translateY(0);
}
```

**Loading Skeleton**:
```css
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}

.skeleton {
    background: linear-gradient(
        90deg,
        #f0f0f0 0px,
        #e0e0e0 40px,
        #f0f0f0 80px
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite linear;
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Performance Optimization

### Image Optimization
```html
<!-- Responsive images with WebP fallback -->
<picture>
    <source 
        srcset="image-320.webp 320w,
                image-640.webp 640w,
                image-1280.webp 1280w"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        type="image/webp">
    <img 
        src="image-640.jpg"
        srcset="image-320.jpg 320w,
                image-640.jpg 640w,
                image-1280.jpg 1280w"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
        alt="Descriptive text"
        loading="lazy"
        decoding="async">
</picture>
```

### Lazy Loading
```javascript
// Native lazy loading (recommended)
<img src="image.jpg" loading="lazy" alt="Description">

// Intersection Observer for custom lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### Critical CSS
Inline critical above-the-fold CSS in `<head>`:
```html
<style>
    /* Critical CSS for above-the-fold content */
    :root { /* essential variables */ }
    body { /* base styles */ }
    .header { /* header styles */ }
    .hero { /* hero section styles */ }
</style>

<!-- Load full stylesheet asynchronously -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

### Font Loading Strategy
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>

<style>
    /* Font-face with font-display: swap */
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/inter-var.woff2') format('woff2');
        font-weight: 100 900;
        font-display: swap; /* Show fallback font immediately */
    }
</style>
```

### JavaScript Performance
```javascript
// Debounce scroll/resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    // Expensive scroll handler
}, 100));

// Use requestAnimationFrame for animations
function animateElement() {
    requestAnimationFrame(() => {
        // Animation logic
    });
}

// Passive event listeners for better scroll performance
document.addEventListener('touchstart', handler, { passive: true });
```

## Component Patterns

### Hero Section
```html
<section class="hero">
    <div class="container">
        <div class="hero__content">
            <h1 class="hero__title fade-in">
                Innovative Lösungen für Ihr Unternehmen
            </h1>
            <p class="hero__subtitle fade-in">
                Wir entwickeln maßgeschneiderte Software, die Ihr Business transformiert
            </p>
            <div class="hero__actions fade-in">
                <a href="#contact" class="button button--primary">
                    Jetzt starten
                </a>
                <a href="#services" class="button button--secondary">
                    Mehr erfahren
                </a>
            </div>
        </div>
        <div class="hero__image fade-in">
            <img src="hero.jpg" alt="Hero image" loading="eager">
        </div>
    </div>
</section>

<style>
.hero {
    padding: var(--space-5xl) 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero .container {
    display: grid;
    gap: var(--space-3xl);
    align-items: center;
}

@media (min-width: 1024px) {
    .hero .container {
        grid-template-columns: 1fr 1fr;
    }
}

.hero__title {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: var(--space-lg);
    color: white;
}

.hero__subtitle {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    margin-bottom: var(--space-2xl);
    color: rgba(255, 255, 255, 0.9);
}

.hero__actions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
}

.hero__image {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}
</style>
```

### Feature Cards
```html
<section class="features section">
    <div class="container">
        <h2 class="section__title">Unsere Leistungen</h2>
        <div class="grid grid--3">
            <div class="card fade-in">
                <div class="card__icon">
                    <svg><!-- icon --></svg>
                </div>
                <h3 class="card__title">Webentwicklung</h3>
                <p class="card__text">
                    Moderne, performante Websites mit React, Vue oder klassischem HTML/CSS
                </p>
            </div>
            <!-- More cards -->
        </div>
    </div>
</section>

<style>
.card {
    background: var(--color-bg);
    border-radius: var(--border-radius-lg);
    padding: var(--space-2xl);
    box-shadow: var(--shadow);
    transition: transform var(--transition-base),
                box-shadow var(--transition-base);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.card__icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-lg);
}

.card__icon svg {
    width: 32px;
    height: 32px;
    fill: white;
}
</style>
```

### Navigation Header
```html
<header class="header" id="header">
    <nav class="nav container">
        <a href="/" class="nav__logo">
            <img src="logo.svg" alt="Company Logo" width="150" height="40">
        </a>
        
        <button class="nav__toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <ul class="nav__menu" id="nav-menu">
            <li><a href="#services" class="nav__link">Leistungen</a></li>
            <li><a href="#about" class="nav__link">Über uns</a></li>
            <li><a href="#portfolio" class="nav__link">Portfolio</a></li>
            <li><a href="#contact" class="nav__link nav__link--cta">Kontakt</a></li>
        </ul>
    </nav>
</header>

<style>
.header {
    position: sticky;
    top: 0;
    background: var(--color-bg);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    transition: background var(--transition-base),
                box-shadow var(--transition-base);
}

.header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-md);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg) var(--container-padding);
}

.nav__menu {
    display: flex;
    gap: var(--space-xl);
    list-style: none;
}

.nav__link {
    font-weight: 500;
    position: relative;
}

.nav__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-base);
}

.nav__link:hover::after {
    width: 100%;
}

.nav__link--cta {
    background: var(--color-primary);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--border-radius);
}

.nav__toggle {
    display: none;
}

/* Mobile menu */
@media (max-width: 1023px) {
    .nav__toggle {
        display: flex;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
    }
    
    .nav__toggle span {
        width: 24px;
        height: 2px;
        background: var(--color-text);
        transition: all var(--transition-base);
    }
    
    .nav__menu {
        position: fixed;
        top: 72px;
        left: -100%;
        width: 100%;
        flex-direction: column;
        background: var(--color-bg);
        padding: var(--space-2xl);
        box-shadow: var(--shadow-lg);
        transition: left var(--transition-base);
    }
    
    .nav__menu.active {
        left: 0;
    }
}
</style>

<script>
// Sticky header & mobile menu
const header = document.getElementById('header');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
});
</script>
```

## Accessibility Guidelines

### ARIA Labels
```html
<!-- Descriptive labels for screen readers -->
<nav aria-label="Main navigation">
    <button aria-label="Open menu" aria-expanded="false">
        <span aria-hidden="true">☰</span>
    </button>
</nav>

<!-- Skip to main content -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
    <!-- Content -->
</main>
```

### Keyboard Navigation
```css
/* Visible focus indicators */
:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* Remove outline for mouse users */
:focus:not(:focus-visible) {
    outline: none;
}
```

### Color Contrast
Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text):
```css
/* Good contrast examples */
.text-on-light {
    color: #1f2937; /* Dark gray on white = 16.1:1 */
}

.text-on-primary {
    color: #ffffff; /* White on blue #2563eb = 4.5:1 */
}
```

## Testing Checklist

### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images optimized (WebP, lazy loading)
- [ ] CSS/JS minified and compressed
- [ ] Fonts preloaded

### Responsive Design
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Touch targets minimum 44x44px
- [ ] No horizontal scrolling on mobile
- [ ] Text readable without zoom

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast WCAG AA
- [ ] Alt text for all images
- [ ] Semantic HTML
- [ ] ARIA labels where needed

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Best Practices Summary

1. **Mobile-First**: Design for small screens, enhance for larger
2. **Performance**: Optimize images, lazy load, minimize JS
3. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
4. **Animations**: Use transform/opacity, respect reduced motion
5. **Typography**: Clear hierarchy, readable sizes, proper contrast
6. **Spacing**: Consistent use of design tokens
7. **Components**: Reusable, modular, well-documented
8. **Testing**: Regular performance audits, cross-browser testing

## Quick Start Template

When creating a new corporate website:

1. **Setup structure**:
   - Create semantic HTML5 structure
   - Add CSS custom properties for design tokens
   - Include responsive meta tags

2. **Build header**:
   - Sticky navigation
   - Mobile menu
   - Logo and CTAs

3. **Create hero section**:
   - Compelling headline
   - Clear value proposition
   - Strong CTA buttons

4. **Add content sections**:
   - Features/services
   - About/team
   - Testimonials
   - Contact form

5. **Optimize**:
   - Compress images
   - Add lazy loading
   - Implement animations
   - Test performance

6. **Polish**:
   - Add microinteractions
   - Refine spacing
   - Test responsiveness
   - Validate accessibility

This skill ensures every website is professional, performant, and pixel-perfect.
