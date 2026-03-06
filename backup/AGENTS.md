# AGENTS.md - Neocities Static Website

## Project Overview

This is a static HTML website project designed for hosting on [Neocities](https://neocities.org/), a free web hosting service for static sites. The project is intentionally simple with no build process or dependencies.

## Project Structure

```
neocities/
├── index.html         # Main homepage
├── not_found.html     # Custom 404 page (currently empty)
├── style.css          # Custom stylesheet (currently empty)
└── AGENTS.md          # This file
```

## Technology Stack

- **HTML5**: Standard HTML structure
- **Tailwind CSS**: Loaded via CDN (`https://cdn.tailwindcss.com`)
- **No build tools**: Direct HTML editing, no compilation needed
- **No package manager**: No npm, yarn, or other dependencies
- **No version control**: Currently not a git repository

## Development Commands

### No build process required
This is pure static HTML. Changes are immediate - just edit and preview in browser.

### Local development
```bash
# Option 1: Python simple server
python -m http.server 8000

# Option 2: Node.js http-server (if installed globally)
npx http-server

# Option 3: PHP built-in server (if PHP installed)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Deployment to Neocities

**Manual deployment:**
1. Log into your Neocities account at https://neocities.org
2. Use the web dashboard to upload files
3. Drag and drop `index.html`, `not_found.html`, `style.css`, and any other assets

**CLI deployment (if neocities-cli is installed):**
```bash
# Install neocities CLI globally (one-time setup)
gem install neocities

# Configure credentials (one-time setup)
neocities login

# Push all files
neocities push .

# Push specific files
neocities push index.html style.css not_found.html
```

## Code Conventions

### HTML Structure
- Use semantic HTML5 elements
- Always include proper DOCTYPE, meta charset, and viewport meta tags
- Keep HTML clean and readable with proper indentation (4 spaces)
- Self-closing tags can use either format: `<meta />` or `<meta>`

### CSS Approach
- **Primary**: Tailwind CSS utility classes via CDN
- **Custom styles**: Add to `style.css` for project-specific styles not covered by Tailwind
- Tailwind CDN is suitable for small projects; for production or larger sites, consider a build process with Tailwind CLI

### File Naming
- Use lowercase with underscores: `not_found.html`, `about_page.html`
- Exceptions: Standard files like `AGENTS.md`, `README.md`

### Character Encoding
- Always use UTF-8
- Include `<meta charset="UTF-8">` in all HTML files

## Current File Status

### index.html
- Basic skeleton with Tailwind CSS CDN
- Contains minimal "Hello Tailwind" example
- Ready for customization

### not_found.html
- **Currently empty** - needs implementation
- Should be a custom 404 error page
- Neocities automatically serves this file when a page is not found

### style.css
- **Currently empty** - ready for custom styles
- Include this file in HTML if custom CSS is needed
- Currently not linked in index.html

## Common Tasks

### Adding a new page
1. Create new `.html` file (e.g., `about.html`)
2. Copy structure from `index.html` as template
3. Update content and title
4. Link from other pages using relative paths: `<a href="about.html">About</a>`

### Adding custom CSS
1. Write styles in `style.css`
2. Link in HTML head: `<link rel="stylesheet" href="style.css">`
3. Can be combined with Tailwind classes

### Adding images
1. Create an `images/` or `assets/` directory
2. Add image files
3. Reference in HTML: `<img src="images/photo.jpg" alt="Description">`
4. Remember to upload images when deploying

### Adding JavaScript
1. Either inline in `<script>` tags or create separate `.js` files
2. Place scripts before closing `</body>` tag for better performance
3. Or use `defer` attribute if in `<head>`

## Neocities-Specific Considerations

### File size limits
- Individual files: 100MB max
- Total site size: Varies by plan (free tier: 1GB)

### Supported file types
- HTML, CSS, JavaScript
- Images: PNG, JPG, GIF, SVG, ICO
- Fonts: WOFF, WOFF2, TTF, OTF
- Text: TXT, MD
- Data: JSON, XML
- No server-side code (PHP, Python, Ruby, etc.)

### not_found.html
- This file is automatically served by Neocities for any 404 errors
- Must be in root directory
- Should include helpful navigation back to main site

### URLs
- Default: `https://yourusername.neocities.org`
- Custom domains supported (requires configuration in Neocities dashboard)

## Best Practices

### Performance
- Minimize external dependencies
- Optimize images before uploading (compress JPGs/PNGs, use WebP)
- Consider lazy loading for images
- Keep JavaScript minimal for static sites

### Accessibility
- Always include `alt` attributes on images
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Ensure sufficient color contrast
- Test with keyboard navigation

### Mobile responsiveness
- Tailwind CSS is mobile-first by default
- Always include viewport meta tag (already in index.html)
- Test on different screen sizes

### SEO
- Include descriptive `<title>` tags on each page
- Add meta description: `<meta name="description" content="...">`
- Use heading tags (`<h1>`, `<h2>`) hierarchically
- Create meaningful URLs (e.g., `about.html` not `page2.html`)

## Tailwind CSS Usage

### Current setup
- Using Tailwind Play CDN: `https://cdn.tailwindcss.com`
- **Note**: This is for development/prototyping only
- No configuration file, uses default Tailwind settings

### Common utility patterns
```html
<!-- Typography -->
<h1 class="text-3xl font-bold">Heading</h1>
<p class="text-gray-600">Paragraph</p>

<!-- Layout -->
<div class="container mx-auto px-4">Content</div>
<div class="flex justify-between items-center">Flexbox</div>
<div class="grid grid-cols-3 gap-4">Grid</div>

<!-- Spacing -->
<div class="mt-4 mb-8 px-6 py-3">Margins and padding</div>

<!-- Colors -->
<div class="bg-blue-500 text-white">Colored box</div>

<!-- Responsive -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive widths</div>
```

### For production
Consider switching to Tailwind CLI for:
- Smaller CSS file size (only used utilities)
- Custom configuration
- Better performance
- More control over design system

## Gotchas and Important Notes

1. **CDN Tailwind limitations**: The CDN includes all Tailwind utilities (~3MB). For production, use Tailwind CLI to generate optimized CSS.

2. **No server-side processing**: Neocities is static hosting only. No forms with server processing, no databases, no backend logic.

3. **Live site updates**: Changes uploaded to Neocities are immediately live. No staging environment unless you create a separate Neocities account.

4. **Case sensitivity**: URLs on Neocities are case-sensitive. `About.html` and `about.html` are different files.

5. **No .htaccess**: Neocities doesn't support Apache .htaccess files. Use `not_found.html` for 404s.

6. **External resources**: Loading fonts, scripts, or styles from CDNs requires internet connection and depends on CDN availability.

7. **Browser caching**: Users may have cached versions. Consider cache-busting for major updates (e.g., `style.css?v=2`).

## Version Control Recommendations

This project currently has no git repository. Consider initializing:

```bash
git init
git add .
git commit -m "Initial commit"
```

**Suggested .gitignore:**
```
.DS_Store
Thumbs.db
*.log
.crush/
```

## Future Enhancements to Consider

- Implement proper content for `not_found.html`
- Add custom styles to `style.css`
- Create additional pages (about, contact, portfolio, etc.)
- Add favicon: `<link rel="icon" href="favicon.ico">`
- Add Open Graph meta tags for social sharing
- Consider static site generator (11ty, Hugo) if site grows large
- Set up git for version control
- Create build process with Tailwind CLI for production optimization

## External Resources

- [Neocities Documentation](https://neocities.org/api)
- [Neocities CLI](https://neocities.org/cli)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [Can I Use](https://caniuse.com/) - Browser compatibility checking

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Edit files | Open in any text editor |
| Preview locally | `python -m http.server 8000` |
| Deploy | Upload via Neocities dashboard or CLI |
| Add new page | Create `.html` file, link from existing pages |
| Add styling | Use Tailwind classes or add to `style.css` |
| Test mobile | Browser DevTools or responsive design mode |
| Validate HTML | https://validator.w3.org/ |

---

**Last updated**: March 6, 2026  
**Project type**: Static HTML website for Neocities hosting  
**Complexity level**: Beginner-friendly, minimal setup required
