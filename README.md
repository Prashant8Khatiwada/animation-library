# react-animation-kit

<div align="center">

🎨 **Production-ready React animation library with 142 components**

[![npm version](https://img.shields.io/npm/v/react-animation-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-animation-kit)
[![npm downloads](https://img.shields.io/npm/dm/react-animation-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-animation-kit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-animation-kit?style=flat-square)](https://bundlephobia.com/package/react-animation-kit)
[![license](https://img.shields.io/npm/l/react-animation-kit.svg?style=flat-square)](https://github.com/Prashant8Khatiwada/animation-library/blob/main/LICENSE)
[![typescript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)

*Lightweight · Tree-shakeable · SSR-safe · Customizable · Built on Framer Motion*

[Live Demo](http://localhost:3000/playground.html) · [Documentation](#-documentation) · [NPM](https://www.npmjs.com/package/react-animation-kit)

</div>

---

## ✨ Why react-animation-kit?

The **easiest** way to add beautiful animations to your React app. No complex configuration, no learning curve - just import and use.

```tsx
import { FadeIn, SlideUp, HoverLift } from 'react-animation-kit/animations'

<FadeIn><h1>Hello World</h1></FadeIn>
```

### Features

- 🪶 **Lightweight** - Only ~0.5-1KB per component
- 🎨 **142 Components** - Entrance, exit, hover, loops, and more
- 🧩 **Component-Based** - Clean `<FadeIn>` API, not complex variants
- ⚡ **SSR-Safe** - Works with Next.js App Router out of the box
- 🎯 **Customizable** - Runtime control via `options` prop
- ♿ **Accessible** - Built-in reduced motion support
- 📦 **Tree-shakeable** - Only bundle what you use
- 🔒 **TypeScript** - 100% type-safe with full IntelliSense
- 🌍 **Production-Ready** - Battle-tested, optimized, documented

## 📦 Installation

```bash
npm install react-animation-kit framer-motion
# or
yarn add react-animation-kit framer-motion
# or
pnpm add react-animation-kit framer-motion
```

## 🚀 Quick Start

```tsx
import { FadeIn, SlideUp, HoverLift } from 'react-animation-kit/animations'

function App() {
  return (
    <div>
      {/* Entrance animation */}
      <FadeIn>
        <h1>Welcome!</h1>
      </FadeIn>

      {/* Custom timing */}
      <SlideUp options={{ duration: 0.8, delay: 0.2 }}>
        <p>Slides up with custom timing</p>
      </SlideUp>

      {/* Interactive hover */}
      <HoverLift>
        <button>Hover me</button>
      </HoverLift>
    </div>
  )
}
```

That's it! No `motion.div`, no `variants`, no `initial`/`animate` props. Just wrap and go.

## 🎯 Core Concepts

### Simple Component API

Every animation is a React component:

```tsx
<AnimationComponent options={{ duration: 0.5 }}>
  {children}
</AnimationComponent>
```

### Runtime Customization

Use the `options` prop to customize any animation:

```tsx
<FadeIn options={{
  duration: 1.5,      // Animation duration
  delay: 0.3,         // Delay before start
  ease: [0.4, 0, 0.2, 1],  // Custom easing
  type: 'spring',     // Animation type
  stiffness: 100,     // Spring physics
  damping: 10         // Spring damping
}}>
  <div>Customized animation</div>
</FadeIn>
```

### Full Framer Motion Support

Pass any Framer Motion props:

```tsx
<SlideUp
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="my-class"
>
  Full Framer Motion compatibility
</SlideUp>
```

## 📚 Available Components

### 🎭 Entrance Animations (20)

Perfect for content appearing on screen:

```tsx
import {
  FadeIn, FadeInSoft, FadeInSharp,
  SlideUp, SlideDown, SlideLeft, SlideRight,
  ScaleIn, ZoomIn, BlurIn, RotateIn,
  FlipInX, FlipInY, PopIn, DropIn, GrowIn,
  RevealClip, SlideUpSoft, SlideRightLong, ScaleInSoft
} from 'react-animation-kit/animations'
```

### 🚪 Exit Animations (11)

Graceful exits:

```tsx
import {
  FadeOut, FadeOutFast, ZoomOut, ScaleDown,
  SlideOutLeft, SlideOutRight, SlideOutUp, SlideOutDown,
  RotateOut, FlipOutX, CollapseOut
} from 'react-animation-kit/animations'
```

### 🖱️ Hover & Tap (13)

Interactive micro-interactions:

```tsx
import {
  HoverLift, HoverDip, HoverScale, HoverTilt,
  HoverRotate, HoverGlow, HoverShadow, HoverPulse,
  TapShrink, TapBounce, TapRotate
} from 'react-animation-kit/animations'

<HoverLift><button>Hover me</button></HoverLift>
```

### ♾️ Loop Animations (11)

Continuous ambient motion:

```tsx
import {
  Float, FloatWide, FloatSlow,
  Breath, BreathSlow, Wiggle,
  ShakeLoop, BounceLoop, PulseGlow,
  OscillateX, OscillateY
} from 'react-animation-kit/animations'

<Float><div>Floating element</div></Float>
```

### 📋 List & Stagger (11)

Sequential reveals:

```tsx
import {
  StaggerContainer, StaggerFast, StaggerSlow,
  FadeItem, SlideItemUp, SlideItemRight,
  ClipItemReveal, ScaleItem, SpringItem,
  CascadeFade, CascadeSlide
} from 'react-animation-kit/animations'

<StaggerContainer>
  <SlideItemUp>Item 1</SlideItemUp>
  <SlideItemUp>Item 2</SlideItemUp>
  <SlideItemUp>Item 3</SlideItemUp>
</StaggerContainer>
```

### 🎴 Specialized Components

- **Cards** (10): `CardPop`, `CardFlip`, `CardHoverGlow`, `CardSwipeIn`...
- **Buttons** (8): `ButtonTap`, `ButtonHoverPop`, `ButtonGlow`, `ButtonRipple`...
- **Modals** (8): `ModalFadeIn`, `ModalSlideUp`, `OverlayFade`, `SheetSlideUp`...
- **Pages** (8): `PageFade`, `PageSlideLeft`, `PageSwap`, `PagePush`...
- **Heroes** (7): `HeroFade`, `HeroRise`, `HeroTextReveal`, `HeroStagger`...
- **Icons** (8): `IconSpin`, `IconPop`, `IconPulse`, `IconBounce`...
- **Forms** (6): `InputFocusGlow`, `CheckboxScale`, `ToggleSlide`...
- **Images** (6): `ImageZoomOnHover`, `ImageTilt`, `ImageRevealMask`...
- **Loaders** (5): `LoaderSpin`, `LoaderPulse`, `LoaderBounce`...

## 🎮 Interactive Physics Components

Advanced physics-based interactions:

```tsx
import {
  Magnetic,          // Sticks to cursor
  Tilt3D,           // 3D parallax tilt
  ElasticScale,     // Bouncy scale on hover
  DraggableSnap,    // Drag and snap back
  Shake,            // Click to shake
  HoverGlowEffect,  // Mouse-following glow
  CursorFollow,     // Custom cursor
  ScrollReveal,     // Physics-based scroll
  Orbit,            // Circular motion
  WaveList          // Wave stagger
} from 'react-animation-kit/interactive'

<Magnetic>
  <button>I follow your cursor!</button>
</Magnetic>
```

## 🎨 Presets & Utilities

### Custom Easings

```tsx
import { easings } from 'react-animation-kit/presets'

<FadeIn options={{ ease: easings.softOvershoot }}>
  Smooth animation
</FadeIn>

// Available: smooth, softOvershoot, bounce, snap, decelerate, accelerate
```

### Spring Presets

```tsx
import { springs } from 'react-animation-kit/presets'

<SlideUp options={springs.bouncy}>
  Bouncy animation
</SlideUp>

// Available: gentle, bouncy, snappy, slow
```

### Accessibility Hook

```tsx
import { useReducedMotion } from 'react-animation-kit/hooks'

function Component() {
  const prefersReduced = useReducedMotion()
  
  return (
    <FadeIn options={{ duration: prefersReduced ? 0.01 : 0.5 }}>
      Respects user motion preferences
    </FadeIn>
  )
}
```

### Viewport Detection

```tsx
import { useInView } from 'react-animation-kit/hooks'

function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.5, once: true })
  
  return (
    <div ref={ref}>
      <FadeIn animate={isInView ? "visible" : "hidden"}>
        Animates when scrolled into view
      </FadeIn>
    </div>
  )
}
```

## 🔧 Advanced Usage

### Page Transitions (Next.js)

```tsx
import { AnimatePresence } from 'framer-motion'
import { PageFade } from 'react-animation-kit/animations'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <PageFade key={pathname}>{children}</PageFade>
    </AnimatePresence>
  )
}
```

### Custom Element Type

```tsx
<FadeIn as="section" className="hero">
  Renders as a section element
</FadeIn>
```

### Create Your Own

```tsx
import { createAnimation } from 'react-animation-kit/utils'

const MyAnimation = createAnimation(
  'MyAnimation',
  {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 }
  },
  { duration: 1, type: 'spring' }
)

<MyAnimation>Custom animation</MyAnimation>
```

## 📊 Bundle Size

| Import | Size (gzipped) |
|--------|---------------|
| Single component | ~0.5-1KB |
| Full library | ~14-16KB |
| With tree-shaking | Only what you use |

## 🌐 Framework Support

- ✅ **Next.js** - App Router & Pages Router
- ✅ **Vite** - Full support
- ✅ **Create React App** - Works out of the box
- ✅ **Remix** - SSR-safe
- ✅ **Gatsby** - Compatible

## 📚 Requirements

- React 18+
- Framer Motion 10+
- TypeScript 5+ (optional)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/Prashant8Khatiwada/animation-library/blob/main/CONTRIBUTING.md).

## 📄 License

MIT © Prashant Khatiwada

## 🙏 Credits

Built with ❤️ using [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**[⭐ Star on GitHub](https://github.com/Prashant8Khatiwada/animation-library)** · **[📦 View on NPM](https://www.npmjs.com/package/react-animation-kit)** · **[🐛 Report Bug](https://github.com/Prashant8Khatiwada/animation-library/issues)**

Made with React · Framer Motion · TypeScript

</div>
