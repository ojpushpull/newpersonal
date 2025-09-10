# Personal Website - Next.js TypeScript Project

## Project Overview
This is a modern personal website built with Next.js 15.5.2, TypeScript, and Tailwind CSS 4. It features a responsive design with a professional home page including header navigation, hero section, features showcase, and footer.

## Tech Stack
- **Next.js 15.5.2** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript 5** - Type safety and better development experience
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Next/Font** - Optimized font loading with Geist fonts

## Development Commands
```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Install dependencies
npm install
```

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   ├── Hero.tsx        # Hero section with CTA buttons
│   │   ├── Features.tsx    # Feature cards grid
│   │   ├── Footer.tsx      # Footer with links and social
│   │   └── Button.tsx      # Reusable button component
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with fonts
│   └── page.tsx            # Home page component
├── next.config.ts          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Component Architecture

### Header Component
- Responsive navigation with mobile hamburger menu
- Logo branding
- Navigation links: Home, About, Services, Contact
- Mobile-first design with Tailwind classes

### Hero Component  
- Gradient background design
- Main heading with brand emphasis
- Descriptive text and dual call-to-action buttons
- Utilizes the Button component for consistency

### Features Component
- Grid layout showcasing 4 key features
- SVG icons for visual appeal
- Responsive grid: 1 column (mobile) → 4 columns (desktop)
- Features: Creative Solutions, Technical Excellence, User-Centered Design, Continuous Learning

### Footer Component
- Dark theme with organized sections
- Social media icons (LinkedIn, GitHub, Twitter)
- Quick navigation links
- Contact information placeholder
- Copyright with dynamic year

### Button Component
- Versatile component supporting both Link and button behaviors
- Two variants: primary (blue) and secondary (white with border)
- TypeScript interface for props
- Accessible with focus states

## Styling Guidelines

### Color Scheme
- Primary: Blue 600 (#2563EB)
- Background: White/Gray tones
- Text: Gray 900 (dark), Gray 600 (medium)
- Footer: Gray 900 background

### Typography
- Font Family: Geist Sans (primary), Geist Mono (monospace)
- Headings: Bold weights (font-bold)
- Body text: Regular weight with good contrast

### Responsive Design
- Mobile-first approach using Tailwind breakpoints
- sm: 640px+ (small tablets)
- md: 768px+ (tablets)
- lg: 1024px+ (desktops)

### Layout Patterns
- Max width container: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8`
- Grid layouts for features and footer sections

## Configuration Notes

### TypeScript Config
- Target: ES2017
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`
- Next.js plugin included

### Next.js Config
- Turbopack enabled for faster builds
- App Router architecture
- Font optimization with next/font

## Development Tips

1. **Component Creation**: Follow existing patterns in `/components/` directory
2. **Styling**: Use Tailwind utility classes, avoid custom CSS unless necessary
3. **TypeScript**: Define interfaces for component props
4. **Responsive**: Test all breakpoints during development
5. **Accessibility**: Include proper ARIA labels and semantic HTML

## Common Issues & Solutions

### Build Errors
- Check for missing imports in component files
- Ensure all TypeScript interfaces are properly defined
- Verify Tailwind classes are valid

### Development Server Issues
- Clear `.next` cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check port availability (default: 3000)

### Styling Problems
- Tailwind classes not applying: Check if Tailwind is properly imported in globals.css
- Layout issues: Verify container and responsive classes
- Font not loading: Check font imports in layout.tsx

## Next Steps
- Add About, Services, and Contact pages
- Implement contact form functionality  
- Add image optimization and assets
- Set up ESLint and Prettier for code quality
- Configure environment variables for production
- Add SEO metadata and Open Graph tags
- Implement animations and micro-interactions
- Set up testing framework (Jest/Testing Library)

## Deployment
This project is optimized for deployment on Vercel, but can be deployed to any platform that supports Node.js. The build output is optimized with Turbopack for faster builds and better performance.

---

**Last Updated**: Generated with Claude Code assistance