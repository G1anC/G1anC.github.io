# Neocities Site - Next.js TypeScript

This is a Next.js project with TypeScript and Tailwind CSS, configured to export as static HTML for Neocities hosting.

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build and export the static site:

```bash
npm run build
```

This generates static HTML files in the `out/` directory.

## Project Structure

```
neocities/
├── app/
│   ├── page.tsx          # Homepage
│   ├── me/page.tsx       # Me - Interests page
│   ├── works/page.tsx    # Works & Creations page
│   ├── diary/page.tsx    # Diary page
│   ├── yapbox/page.tsx   # Yapbox page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with custom fonts
├── public/
│   └── fonts/            # Custom font files
│       ├── KAISEIDECOL.TTF
│       ├── TEXGYREHEROSCN.OTF
│       └── TEXGYREHEROSCN-BOLD.OTF
├── out/                  # Static export output (generated)
└── next.config.ts        # Next.js configuration with static export

```

## Deploying to Neocities

After running `npm run build`, the `out/` directory contains all static files:

### Method 1: Manual Upload
1. Go to your Neocities dashboard
2. Upload all files from the `out/` directory
3. Make sure to preserve the folder structure (`_next/`, `fonts/`, etc.)

### Method 2: Neocities CLI
```bash
# Install neocities CLI (one-time)
gem install neocities

# Login (one-time)
neocities login

# Deploy
cd out
neocities push .
```

## Custom Fonts

Three custom fonts are included:
- **TexGyreHeroes**: Main body font (regular and bold)
- **KAISEI**: For kanji characters

These are defined in `app/globals.css` and loaded from `public/fonts/`.

## CSS Classes

Custom CSS classes available:
- `.link` - Styled links with hover opacity transition
- `.kanji` - Kanji text styling with KAISEI font
- `.sous` - Subtitle/small text styling

## Technologies Used

- **Next.js 16.1.6** - React framework
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Static Export** - Generates pure HTML/CSS/JS

## Configuration

### Static Export
The `next.config.ts` file is configured for static export:

```typescript
{
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

This ensures all pages are pre-rendered as static HTML.

## Notes

- All pages are statically generated at build time
- No server-side rendering or API routes
- Images are unoptimized (required for static export)
- All links use standard `<a>` tags for navigation between pages
- The `out/` directory is ready for immediate deployment

## Adding New Pages

1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file inside
3. Export a default React component
4. Run `npm run build` to generate the static page

Example:
```typescript
// app/blog/page.tsx
export default function Blog() {
  return (
    <div className="bg-[#EBF0F8] text-gray-800 min-h-screen p-16">
      <h1 className="text-4xl font-bold mb-4 kanji">BLOG</h1>
      <p>Your content here...</p>
      <a href="/" className="link mt-4 inline-block">← Back to home</a>
    </div>
  );
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Neocities Documentation](https://neocities.org/api)
- [Tailwind CSS](https://tailwindcss.com/docs)
