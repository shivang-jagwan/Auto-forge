# AutoForge Systems - React + Framer Motion

A premium, enterprise-grade AI & Automation company website built with React, TypeScript, and Framer Motion.

## 🚀 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Framer Motion 10** - Advanced Animations
- **Vite** - Fast Build Tool
- **CSS3** - Modern Styling

## 📁 Project Structure

```
src/
├── components/          # React components (one per section)
│   ├── Navbar.tsx      # Fixed sticky navigation
│   ├── Hero.tsx        # Full-screen hero with parallax
│   ├── About.tsx       # Mission & vision cards
│   ├── Services.tsx    # 8-service grid with 3D effects
│   ├── Features.tsx    # Feature list with animations
│   ├── Process.tsx     # 6-step timeline
│   ├── Portfolio.tsx   # Project showcase
│   ├── Testimonials.tsx # Carousel with auto-rotation
│   ├── Founders.tsx    # Team member profiles
│   ├── Contact.tsx     # Form + contact info
│   └── Footer.tsx      # Footer section
├── hooks/              # Custom React hooks
│   └── useScroll.ts    # Scroll-related hooks
├── styles/             # Global styles
│   └── global.css      # Base styling
├── utils/              # Utility functions
│   └── animations.ts   # Framer Motion variants
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Design System

**Colors:**
- Primary: `#0B0B0B` (Deep Black)
- Secondary: `#FFFFFF` (White)
- Accent Orange: `#FF6A00`
- Accent Yellow: `#FFC107`

**Typography:**
- Headings: Syne (Bold, 800 weight)
- Body: Inter (Clean, modern)

## ✨ Features

### Components
- ✅ Sticky navbar with scroll progress indicator
- ✅ Full-viewport hero with parallax effects
- ✅ 3D card hover effects
- ✅ Scroll-triggered animations
- ✅ Animated timeline
- ✅ Auto-rotating testimonial carousel
- ✅ Contact form with validation
- ✅ Embedded Google Map

### Animations
- Staggered text reveals
- Parallax scrolling
- 3D perspective transforms
- Fade-in/slide-in on scroll
- Hover tilt effects
- Smooth transitions

### Performance
- Code-split via Vite
- Optimized animations (GPU-accelerated)
- Lazy-loaded components
- Responsive design (mobile-first)

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Component Overview

### Navbar
- Fixed positioning with transparent-to-solid transition
- Animated scroll progress bar
- Smooth navigation links

### Hero
- Full-screen with parallax blurred gradients
- Staggered text reveal animation
- Floating cards with independent animations
- Stats section with fade-in

### Services
- 8-card grid layout
- 3D hover tilt effects
- Glassmorphism overlays
- Staggered entry animations

### Testimonials
- Carousel with auto-rotation (5s interval)
- Manual prev/next controls
- Smooth transitions between cards

### Contact Form
- Real-time validation
- Floating label inputs
- Success/error messaging
- Responsive layout

### Animations
All animations use Framer Motion variants defined in `src/utils/animations.ts`:
- `slideInUp` - Entrance from bottom
- `slideInLeft/Right` - Entrance from sides
- `fadeIn` - Simple opacity
- `scaleIn` - Scale + fade
- `floatVariants` - Continuous floating motion
- `glowVariants` - Pulsing glow effect

## 🎯 Customization

### Change Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --primary: #0B0B0B;
  --accent-orange: #FF6A00;
  --accent-yellow: #FFC107;
}
```

### Modify Animations
Update variants in `src/utils/animations.ts` or individual component animations.

### Update Content
Edit content directly in component JSX files.

### Add New Sections
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to component list
4. Create corresponding CSS file

## 📱 Responsive Design

- **Desktop** (1024px+): Full layout
- **Tablet** (768px-1023px): Adjusted grids
- **Mobile** (< 768px): Single column, optimized spacing

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Netlify
```bash
npm run build
# Deploy `dist/` folder
```

### Traditional Hosting
```bash
npm run build
# Upload `dist/` folder to web server
```

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Contributing

Feel free to modify and customize this template for your needs.

## 📄 License

© 2024 AutoForge Systems. All rights reserved.

---

**Built with ❤️ using React + Framer Motion**
