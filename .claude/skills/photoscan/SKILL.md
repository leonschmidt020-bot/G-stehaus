---
name: design-from-image
description: Analyze screenshots or photos of websites and recreate them as production-ready HTML/CSS/JS code. Identifies design elements (colors, typography, layout, components) and generates pixel-perfect, responsive implementations.
---

# Design from Image Skill

Transform website screenshots and design mockups into production-ready code with pixel-perfect accuracy.

## Overview

This skill analyzes images of websites or design mockups and generates clean, modern, responsive HTML/CSS/JavaScript code that faithfully recreates the design while following web development best practices.

## Core Capabilities

1. **Visual Analysis**: Extract design system (colors, fonts, spacing, components)
2. **Layout Recognition**: Identify grid systems, sections, and component hierarchy
3. **Code Generation**: Create semantic, accessible, performant code
4. **Responsive Adaptation**: Make designs work across all screen sizes
5. **Optimization**: Apply performance and accessibility best practices

## Analysis Workflow

### Step 1: Initial Image Analysis

When given a screenshot or photo, systematically analyze:

#### 1.1 Overall Layout Structure
```
Questions to answer:
- What is the overall layout type? (Single column, multi-column, grid, asymmetric)
- How many main sections are visible?
- Is there a header/navigation? Footer?
- What is the visual hierarchy?
```

#### 1.2 Color Palette
```
Extract and document:
- Primary color (main brand color)
- Secondary color (accents)
- Text colors (headings, body, muted)
- Background colors
- Border/divider colors

Example output:
--color-primary: #2563eb (from logo/CTA buttons)
--color-secondary: #1e40af (from secondary elements)
--color-text: #1f2937 (main text)
--color-text-light: #6b7280 (secondary text)
--color-bg: #ffffff (main background)
--color-bg-alt: #f9fafb (alternate sections)
```

#### 1.3 Typography
```
Identify:
- Font families (serif, sans-serif, monospace)
- Font weights (light, regular, medium, bold)
- Heading sizes (h1, h2, h3, etc.)
- Body text size
- Line heights
- Letter spacing

Example output:
--font-primary: 'Inter', system-ui, sans-serif
--font-heading: 'Poppins', sans-serif
h1: 48-64px, font-weight: 700, line-height: 1.1
h2: 36-48px, font-weight: 600, line-height: 1.2
body: 16-18px, font-weight: 400, line-height: 1.6
```

#### 1.4 Spacing System
```
Measure and establish:
- Section padding (vertical spacing between major sections)
- Component margins (space between elements)
- Container padding (left/right page margins)
- Grid gaps
- Element padding (buttons, cards, etc.)

Example output:
--space-section: 80px (large sections)
--space-component: 48px (between components)
--space-element: 24px (within components)
--space-small: 12px (tight spacing)
```

#### 1.5 Component Inventory
```
List all visible components:
□ Navigation (sticky/static, desktop/mobile styles)
□ Hero section (full-width, contained, overlay?)
□ Cards (how many per row, style, shadows)
□ Buttons (primary, secondary, sizes)
□ Forms (input fields, labels, validation)
□ Images (full-width, contained, aspect ratios)
□ Icons (style, size, color)
□ Footer (layout, content)
□ Special elements (testimonials, pricing tables, etc.)
```

#### 1.6 Visual Effects
```
Identify:
- Shadows (subtle, medium, strong)
- Border radius (sharp, slightly rounded, very rounded)
- Gradients (linear, radial, locations)
- Overlays (on images, sections)
- Hover states (if visible or implied)
- Animations (if visible or suggested)
```

### Step 2: Design System Documentation

Before writing code, create a comprehensive design system summary:

```markdown
## Design System Analysis

### Colors
- Primary: #[hex]
- Secondary: #[hex]
- Text: #[hex]
- Background: #[hex]

### Typography
- Headings: [font-family], [sizes]
- Body: [font-family], [size]

### Spacing
- Section: [value]
- Component: [value]
- Element: [value]

### Components
1. [Component name]
   - Style: [description]
   - Variants: [list]
   
2. [Next component]
   ...

### Visual Style
- Border radius: [value]
- Shadows: [description]
- Special effects: [list]
```

### Step 3: Semantic HTML Structure

Generate clean, semantic HTML that matches the visual hierarchy:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Extract from image or infer]</title>
    <meta name="description" content="[Infer from content]">
</head>
<body>
    <!-- Build semantic structure based on visual sections -->
    <header class="header">
        <nav class="nav">
            <!-- Navigation elements from image -->
        </nav>
    </header>
    
    <main>
        <!-- Main sections identified in image -->
        <section class="hero">
            <!-- Hero content -->
        </section>
        
        <section class="features">
            <!-- Feature cards or content -->
        </section>
        
        <!-- Additional sections -->
    </main>
    
    <footer class="footer">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Step 4: CSS Implementation

#### 4.1 CSS Custom Properties (Design Tokens)

Start every CSS file with the extracted design tokens:

```css
:root {
    /* Colors from image */
    --color-primary: #[extracted];
    --color-secondary: #[extracted];
    --color-text: #[extracted];
    --color-text-light: #[extracted];
    --color-bg: #[extracted];
    --color-bg-alt: #[extracted];
    --color-border: #[extracted];
    
    /* Typography from image */
    --font-primary: [identified font stack];
    --font-heading: [identified font stack];
    
    --font-size-xs: [measured];
    --font-size-sm: [measured];
    --font-size-base: [measured];
    --font-size-lg: [measured];
    --font-size-xl: [measured];
    --font-size-2xl: [measured];
    --font-size-3xl: [measured];
    --font-size-4xl: [measured];
    --font-size-5xl: [measured];
    
    /* Spacing from image */
    --space-xs: [measured];
    --space-sm: [measured];
    --space-md: [measured];
    --space-lg: [measured];
    --space-xl: [measured];
    --space-2xl: [measured];
    --space-3xl: [measured];
    
    /* Visual effects from image */
    --border-radius: [measured];
    --border-radius-lg: [measured];
    
    --shadow-sm: [replicate from image];
    --shadow: [replicate from image];
    --shadow-md: [replicate from image];
    --shadow-lg: [replicate from image];
    
    /* Layout from image */
    --container-max: [measured or inferred];
    --container-padding: [measured];
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
}
```

#### 4.2 Component-Based CSS

Write modular, reusable CSS for each identified component:

```css
/* Navigation - based on image analysis */
.header {
    background: var(--color-bg);
    box-shadow: [replicate from image];
    position: [static/sticky based on design];
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: [measured from image];
    max-width: var(--container-max);
    margin: 0 auto;
}

/* Hero - based on image analysis */
.hero {
    padding: [measured from image];
    background: [color/gradient from image];
    color: [text color from image];
}

/* Replicate exact layout from image */
.hero__content {
    display: [grid/flex based on layout];
    [additional properties to match image]
}

/* Cards - based on image analysis */
.card {
    background: [from image];
    border-radius: var(--border-radius);
    padding: [measured from image];
    box-shadow: [replicate from image];
    [additional styles to match image]
}
```

#### 4.3 Responsive Breakpoints

Adapt the design for mobile while preserving visual integrity:

```css
/* Mobile base styles (from image or inferred) */
.hero {
    padding: var(--space-2xl) 0;
}

.grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
}

/* Tablet (if different layout visible or inferred) */
@media (min-width: 640px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop (match the image) */
@media (min-width: 1024px) {
    .hero {
        padding: var(--space-4xl) 0;
    }
    
    .grid {
        grid-template-columns: repeat([count from image], 1fr);
    }
}
```

### Step 5: Interactive Elements

Add appropriate interactivity based on design cues:

```css
/* Buttons - replicate style from image */
.button {
    background: var(--color-primary);
    color: white;
    padding: [from image];
    border-radius: [from image];
    font-weight: [from image];
    transition: all var(--transition-base);
}

/* Add sensible hover states */
.button:hover {
    background: [darker shade];
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

/* Cards - add subtle interactions */
.card {
    transition: transform var(--transition-base),
                box-shadow var(--transition-base);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
```

### Step 6: Content Strategy

When text is not clearly readable in the image:

```html
<!-- Use placeholder content that matches the context -->
<h1>Professional Solutions for Modern Business</h1>
<!-- vs generic "Lorem ipsum" -->

<!-- Infer content length and structure from visual layout -->
<p>
    [Write contextually appropriate text that fits the space
    and purpose suggested by the design]
</p>
```

## Quality Checklist

Before delivering code, verify:

### Visual Accuracy
- [ ] Colors match the image (use color picker precision)
- [ ] Typography sizes and weights are accurate
- [ ] Spacing matches the image layout
- [ ] Component arrangement is identical
- [ ] Shadows and borders replicate the design
- [ ] Overall visual feel matches the reference

### Code Quality
- [ ] Semantic HTML5 structure
- [ ] CSS uses custom properties (variables)
- [ ] Mobile-first responsive design
- [ ] No hard-coded values (use design tokens)
- [ ] Clean, commented code
- [ ] Follows BEM or consistent naming

### Functionality
- [ ] All links/buttons have appropriate targets
- [ ] Forms have proper structure (if present)
- [ ] Navigation works on mobile
- [ ] Images have alt text
- [ ] Interactive elements have hover states

### Performance
- [ ] Images use lazy loading (loading="lazy")
- [ ] CSS is optimized (no redundant rules)
- [ ] Uses modern CSS (Grid, Flexbox)
- [ ] No blocking resources

### Accessibility
- [ ] Semantic HTML provides structure
- [ ] Color contrast meets WCAG AA
- [ ] Interactive elements are keyboard accessible
- [ ] ARIA labels where necessary
- [ ] Focus states are visible

## Edge Cases & Guidelines

### When Image Quality is Low
```
If the image is:
- Blurry: Make best estimates, note assumptions
- Cropped: Infer missing parts from common patterns
- Small: Scale up proportionally, maintain ratios
```

### When Design Elements are Ambiguous
```
If unsure about:
- Exact color: Pick closest web-safe color, note in comment
- Font family: Use similar web font with fallback
- Spacing: Use standard 8px grid system as baseline
```

### When Multiple Interpretations Exist
```
Ask clarifying questions:
- "I see this could be either [A] or [B]. Which do you prefer?"
- "The image shows [X]. Should I implement [Y] or [Z]?"
```

### When Modern Enhancements Make Sense
```
Automatically add:
- Smooth scroll behavior
- Hover states on interactive elements
- Subtle transitions
- Mobile menu (if not visible but needed)
- Form validation states

Note these additions in comments:
/* Added smooth hover transition (not visible in static image) */
```

## Best Practices for Common Components

### Hero Sections
```css
.hero {
    /* Common patterns from image analysis */
    min-height: 60vh; /* or specific height from image */
    display: flex;
    align-items: center;
    background: [color/image/gradient from screenshot];
    
    /* Add overlay if image has text over photo */
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* if dark overlay visible */
}
```

### Card Grids
```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
}

/* Or specific columns if clear in image */
@media (min-width: 1024px) {
    .cards {
        grid-template-columns: repeat(3, 1fr); /* match image */
    }
}
```

### Navigation Patterns
```css
/* Desktop navigation from image */
.nav__menu {
    display: flex;
    gap: var(--space-lg);
    list-style: none;
}

/* Mobile menu (implement if needed) */
@media (max-width: 1023px) {
    .nav__menu {
        position: fixed;
        top: [header height];
        left: -100%;
        width: 100%;
        flex-direction: column;
        background: var(--color-bg);
        transition: left 0.3s ease;
    }
    
    .nav__menu.active {
        left: 0;
    }
}
```

## Output Format

Always provide:

1. **Design Analysis Summary** (before code)
   ```markdown
   ## Design Analysis
   
   ### Visual Overview
   [Description of the design]
   
   ### Color Palette
   - Primary: #[hex]
   - Secondary: #[hex]
   [...]
   
   ### Key Components
   1. [Component] - [description]
   2. [Component] - [description]
   [...]
   
   ### Notable Design Choices
   - [Observation 1]
   - [Observation 2]
   ```

2. **Complete HTML File** with inline or linked CSS
3. **Separate CSS File** (if large enough to warrant separation)
4. **JavaScript** (if interactivity is needed)
5. **Implementation Notes**
   ```markdown
   ## Implementation Notes
   
   ### Assumptions Made
   - [List any assumptions about the design]
   
   ### Modern Enhancements Added
   - [List improvements beyond the static image]
   
   ### Responsive Adaptations
   - [How design adapts to mobile]
   
   ### Missing Information
   - [Anything that wasn't clear from image]
   ```

## Example Workflow

**Input**: Screenshot of a corporate website

**Step 1 - Analysis**:
```markdown
This appears to be a modern corporate landing page with:
- Sticky navigation with logo left, menu center, CTA right
- Full-width hero with gradient background (blue to purple)
- Three-column feature section with icon cards
- Testimonial section with customer quotes
- Footer with links and contact info

Colors extracted:
- Primary blue: #2563eb
- Purple accent: #7c3aed
[...]
```

**Step 2 - HTML Structure**:
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Solutions</title>
    <style>
        /* Inline critical CSS */
    </style>
</head>
<body>
    <header class="header">
        <!-- Replicate navigation from image -->
    </header>
    
    <main>
        <section class="hero">
            <!-- Replicate hero from image -->
        </section>
        
        <section class="features">
            <!-- Replicate features from image -->
        </section>
    </main>
    
    <footer class="footer">
        <!-- Replicate footer from image -->
    </footer>
</body>
</html>
```

**Step 3 - CSS**:
```css
/* Design tokens from image analysis */
:root {
    --color-primary: #2563eb;
    --color-accent: #7c3aed;
    /* ... */
}

/* Replicate exact layout from image */
.hero {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    padding: 120px 0;
    text-align: center;
}
```

## Tips for Accuracy

1. **Use browser DevTools color picker** on the image to extract exact colors
2. **Measure spacing** using image editor tools or estimation
3. **Compare font sizes** relatively (this is 2x bigger than that)
4. **Count grid columns** carefully (2-col mobile, 3-col desktop, etc.)
5. **Note visual weight** (bold, medium, regular)
6. **Preserve white space** - negative space is as important as content
7. **Match corner radius** (sharp, subtle, or very rounded)
8. **Replicate shadow depth** (subtle elevation vs strong depth)

## Success Criteria

A successful recreation should:
- ✅ Look virtually identical to the reference image
- ✅ Work responsively across all screen sizes
- ✅ Use clean, maintainable code
- ✅ Follow web best practices
- ✅ Be production-ready
- ✅ Include sensible enhancements (hover states, etc.)
- ✅ Be accessible and performant

This skill transforms visual inspiration into production-ready code with precision and professionalism.
