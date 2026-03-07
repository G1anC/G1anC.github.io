# AGENTS.md - Neocities Next.js Project

## Project Overview

This is a **Next.js 16** project with **TypeScript** and **Tailwind CSS**, configured to export as static HTML for hosting on Neocities. The project uses React 19 and is built for static site generation (SSG).

## Project Structure

```
neocities/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (義安 / G1AN)
│   ├── me/page.tsx        # Me - Interests page
│   ├── works/page.tsx     # Works & Creations page
│   ├── writing/page.tsx     # writing page
│   ├── yapbox/page.tsx    # Yapbox page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles with custom fonts
│   └── not-found.tsx      # 404 page
├── public/                # Static assets
│   └── fonts/            # Custom font files
│       ├── KAISEIDECOL.TTF
│       ├── TEXGYREHEROSCN.OTF
│       └── TEXGYREHEROSCN-BOLD.OTF
├── out/                   # Static build output (gitignored)
├── backup/                # Original HTML/CSS files (reference)
├── next.config.ts         # Next.js config with static export
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Essential Commands

### Development
```bash
npm run dev          # Start dev server at http://localhost:3000
npm run lint         # Run ESLint
```

### Production Build
```bash
npm run build        # Build and export static site to out/
npm run start        # Start production server (not needed for static)
```

### Deployment
```bash
# After npm run build:
cd out
neocities push .     # Deploy to Neocities (requires neocities CLI)
```

## Technology Stack

- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS with PostCSS plugin
- **ESLint** - Code linting with Next.js config

## Code Organization

### Page Structure
- All pages are in `app/` directory (App Router)
- Each page is a `page.tsx` file in its own folder
- Pages export a default React component
- Use TypeScript for all components

### Layout
- Single root layout in `app/layout.tsx`
- Metadata (title, description) defined in layout
- Global styles imported in layout

### Styling
- Tailwind utility classes for most styling
- Custom CSS classes in `app/globals.css`
- Custom fonts loaded via `@font-face`

## Custom Fonts

Three fonts are configured in `globals.css`:

1. **TexGyreHeroes** (regular) - `/fonts/TEXGYREHEROSCN.OTF`
2. **TexGyreHeroesBold** - `/fonts/TEXGYREHEROSCN-BOLD.OTF`
3. **KAISEI** - `/fonts/KAISEIDECOL.TTF`

Applied via CSS classes:
- Default body font: `TexGyreHeroesBold`
- `.kanji` class: `KAISEI` font
- `.sous` class: `TexGyreHeroes` font

## CSS Conventions

### Custom Classes
```css
.link {
  opacity: 1;
  transition: opacity 0.1s ease;
}
.link:hover {
  opacity: 0.5;
}

.kanji {
  font-family: 'KAISEI', serif;
}

.sous {
  font-family: 'TexGyreHeroes', serif;
  font-size: 10px;
  opacity: 0.5;
}
```

### Tailwind Usage
- Use utility classes directly in JSX `className` attributes
- Background color: `bg-[#EBF0F8]` (light blue-grey)
- Text color: `text-gray-800`
- Responsive: `sm:`, `md:`, `lg:` prefixes
- Flexbox: `flex`, `flex-col`, `gap-*`, `items-center`, `justify-between`

## Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Layouts: `layout.tsx` (Next.js convention)
- Config files: `kebab-case` or `camelCase`

### Code
- Components: `PascalCase` (e.g., `function HomePage()`)
- Variables: `camelCase`
- CSS classes: `kebab-case` or utility classes
- TypeScript: Use explicit types where beneficial

## Static Export Configuration

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Enable static export
  images: {
    unoptimized: true,        // Required for static export
  },
};
```

### Key Points
- All pages are pre-rendered at build time
- No server-side rendering (SSR)
- No API routes (static only)
- Use `<a>` tags for navigation (not Next.js `<Link>` for external compatibility)
- Images must be unoptimized

## Testing Approach

No automated tests currently configured. Manual testing workflow:

1. Run `npm run dev` and test in browser
2. Check all navigation links work
3. Verify fonts load correctly
4. Test responsive design (mobile, tablet, desktop)
5. Run `npm run build` to verify static export succeeds
6. Preview `out/` folder in browser before deploying

## Common Tasks

### Adding a New Page
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Export default component:
   ```tsx
   export default function NewPage() {
     return (
       <div className="bg-[#EBF0F8] text-gray-800 min-h-screen p-16">
         <h1>New Page</h1>
         <a href="/" className="link">← Back</a>
       </div>
     );
   }
   ```
4. Build: `npm run build`

### Adding Images
1. Place in `public/images/`
2. Reference as `/images/filename.png`
3. Use standard `<img>` tag (not Next.js `<Image>` due to static export constraints)

### Modifying Fonts
1. Add font file to `public/fonts/`
2. Add `@font-face` in `app/globals.css`
3. Reference in CSS or Tailwind

### Updating Styles
- Global styles: Edit `app/globals.css`
- Tailwind config: Edit `tailwind.config.ts`
- Inline styles: Use `className` with Tailwind utilities

## Important Gotchas

### 1. Use `className` not `class`
React uses `className` attribute, not HTML's `class`:
```tsx
<div className="flex gap-2">  // ✅ Correct
<div class="flex gap-2">      // ❌ Wrong
```

### 2. Static Export Limitations
- No server-side code execution
- No API routes (`/api/*`)
- No dynamic routes with `getStaticPaths` unless pre-defined
- No `next/image` optimization (use `unoptimized: true`)

### 3. Navigation
Use `<a>` tags for compatibility with static hosting:
```tsx
<a href="/me">Link</a>          // ✅ Works on Neocities
<Link href="/me">Link</Link>    // ⚠️ Works but adds JS dependency
```

### 4. Font Paths
Fonts in `public/` are referenced from root:
```css
src: url('/fonts/font.otf')     // ✅ Correct
src: url('fonts/font.otf')      // ❌ Wrong
```

### 5. Build Output
The `out/` directory contains:
- HTML files for each page
- `_next/` folder with JS/CSS chunks
- All assets from `public/`

**Deploy the entire `out/` directory to Neocities**, not individual files.

### 6. Opacity Values
Tailwind 4 uses decimals, CSS uses percentages:
```tsx
className="opacity-50"           // Tailwind (50% = 0.5)
style={{ opacity: 0.5 }}        // React inline style
opacity: 50%;                    // CSS (avoid, use 0.5)
```

### 7. Hover States
Tailwind hover modifier:
```tsx
className="hover:opacity-50"     // ✅ Tailwind way
className="link"                 // ✅ Custom class with :hover in CSS
```

## Deployment Workflow

### Manual Deployment
1. Run `npm run build`
2. Verify `out/` directory generated
3. Go to Neocities dashboard
4. Upload all files from `out/` preserving structure
5. Test live site

### CLI Deployment
```bash
# One-time setup
gem install neocities
neocities login

# Deploy
npm run build
cd out
neocities push .
```

### Pre-Deployment Checklist
- [ ] All pages build without errors
- [ ] Fonts load correctly
- [ ] Links navigate properly
- [ ] Responsive design works
- [ ] No console errors
- [ ] `out/` directory has all expected files

## Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct
- Check `next.config.ts` syntax

### Fonts Not Loading
- Verify font files in `public/fonts/`
- Check `@font-face` paths start with `/fonts/`
- Ensure fonts copied to `out/fonts/` after build

### Styles Not Applying
- Verify `className` not `class`
- Check Tailwind class names are correct
- Ensure `globals.css` imported in `layout.tsx`

### Page Not Found (404)
- Verify page has `page.tsx` file
- Check folder structure in `app/`
- Rebuild with `npm run build`

## Performance Tips

1. **Minimize dependencies** - Static site, keep bundle small
2. **Use Tailwind utilities** - Avoids custom CSS bloat
3. **Optimize images** - Compress before adding to `public/`
4. **Font subsetting** - Consider subsetting fonts if only using specific characters
5. **Code splitting** - Next.js handles automatically

## Future Enhancements

Potential improvements:
- Add more pages (blog, portfolio items)
- Integrate MDX for markdown content
- Add image gallery
- Implement dark mode toggle
- Add background images (ASCIIbranch.png referenced in original)
- Set up git repository for version control
- Create deployment script for automation

## External Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Neocities API](https://neocities.org/api)

## Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build static site | `npm run build` |
| Lint code | `npm run lint` |
| Preview build locally | Serve `out/` with any static server |
| Deploy to Neocities | `cd out && neocities push .` |
| Add new page | Create `app/pagename/page.tsx` |
| Add font | Place in `public/fonts/`, define in `globals.css` |

---

**Last updated**: March 6, 2026  
**Project type**: Next.js static site for Neocities  
**Node version**: 24.11.1  
**Package manager**: npm
