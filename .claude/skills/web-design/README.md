# Professional Web Design Skill

Ein umfassendes Skill für die Erstellung professioneller, moderner Corporate Websites mit Fokus auf Performance, Accessibility und minimalistischem Design.

## Funktionen

✨ **Moderne Designs**: Minimalistische, professionelle Ästhetik für Corporate Websites
🚀 **Performance**: Optimiert für schnelle Ladezeiten (<3s)
📱 **Responsive**: Mobile-First Design mit perfekter Darstellung auf allen Geräten
🎨 **Animationen**: Smooth, GPU-beschleunigte Animationen
♿ **Accessibility**: WCAG AA konform mit vollständiger Keyboard-Navigation
🎯 **Best Practices**: Semantic HTML5, moderne CSS, optimiertes JavaScript

## Installation

1. **Skill kopieren**:
   ```bash
   cp -r web-design-skill /mnt/skills/user/
   ```

2. **Skill aktivieren**:
   - In Claude.ai Settings → Skills
   - "Professional Web Design" aktivieren

## Verwendung

### Beispiel 1: Landing Page erstellen
```
Erstelle eine professionelle Landing Page für ein IT-Consulting Unternehmen.
Features: Hero-Sektion, 3 Dienstleistungskarten, Team-Bereich, Kontaktformular.
Farbe: Blau (#2563eb), Design: Modern & Minimalistisch
```

### Beispiel 2: Responsive Navigation
```
Erstelle eine sticky Navigation mit Logo, 5 Menüpunkten und CTA-Button.
Auf Mobile soll ein Hamburger-Menu erscheinen.
```

### Beispiel 3: Animierte Hero-Sektion
```
Hero-Sektion mit Gradient-Background, großer Überschrift, Untertitel,
2 CTA-Buttons und einem Bild. Elemente sollen beim Laden einblenden.
```

## Design-Tokens

Das Skill verwendet ein konsistentes Design-System:

### Farben
- **Primary**: `#2563eb` (Blau)
- **Secondary**: `#1e40af` (Dunkelblau)
- **Text**: `#1f2937` (Dunkelgrau)
- **Background**: `#ffffff` (Weiß)

### Typography
- **Heading**: 48-64px (Desktop), 32-40px (Mobile)
- **Body**: 18px (Desktop), 16px (Mobile)
- **Line Height**: 1.6

### Spacing
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

## Performance-Checkliste

- ✅ Bilder optimiert (WebP + Fallback)
- ✅ Lazy Loading für Bilder
- ✅ Critical CSS inline
- ✅ Fonts mit `font-display: swap`
- ✅ Minified CSS/JS
- ✅ GPU-beschleunigte Animationen
- ✅ Responsive Images mit `srcset`

## Accessibility-Features

- ✅ Semantic HTML5
- ✅ ARIA Labels
- ✅ Keyboard Navigation
- ✅ Focus Indicators
- ✅ Color Contrast WCAG AA
- ✅ Screen Reader Support
- ✅ Reduced Motion Support

## Testing

Teste deine Website mit:

1. **Lighthouse**: Performance, Accessibility, Best Practices
2. **Responsive Design**: Chrome DevTools Device Toolbar
3. **Accessibility**: WAVE, axe DevTools
4. **Cross-Browser**: Chrome, Firefox, Safari

## Evaluierung

Teste das Skill mit den bereitgestellten Evals:

```bash
# Alle Evals ausführen
npm run eval

# Einzelnen Eval ausführen
npm run eval -- corporate-landing-page
```

## Beispiel-Output

Das Skill erstellt vollständige HTML-Dateien mit:

- ✅ Inline Critical CSS
- ✅ Responsive Meta Tags
- ✅ Optimierte Bilder
- ✅ Smooth Animationen
- ✅ Mobile Menu
- ✅ Accessibility Features

## Anpassung

Du kannst die Design-Tokens in `SKILL.md` anpassen:

```css
:root {
    --color-primary: #your-color;
    --font-primary: 'Your-Font';
    /* ... */
}
```

## Support

Bei Fragen oder Problemen:
- Überprüfe die `SKILL.md` für detaillierte Dokumentation
- Teste mit den Evals in `evals/evals.json`
- Passe Design-Tokens nach Bedarf an

## Version

**v1.0** - Initial Release
- Corporate Website Support
- Responsive Design
- Performance Optimization
- Accessibility Features
- Animation System

---

Made with ❤️ for professional web development
