# @yourorg/motion

A lightweight, component-based animation library for React/Next.js built on Framer Motion.

## ✨ Features

🪶 **Lightweight** - Tree-shakeable, ~0.5-1KB per component  
🎨 **132+ Components** - Ready-to-use animation components  
🧩 **Component-Based API** - Simple `<FadeIn>` syntax  
⚡ **SSR-Safe** - Full Next.js App Router support  
🎯 **Customizable** - `options` prop for runtime control  
♿ **Accessible** - Built-in reduced motion support  
📦 **Zero Config** - Works out of the box  
🔒 **TypeScript** - Full type safety

## 📦 Installation

```bash
npm install @yourorg/motion framer-motion
# or
yarn add @yourorg/motion framer-motion
# or
pnpm add @yourorg/motion framer-motion
```

## 🚀 Quick Start

```tsx
import { FadeIn, SlideUp, HoverLift } from '@yourorg/motion/animations'

function MyComponent() {
  return (
    <div>
      <FadeIn>
        <h1>Fades in smoothly</h1>
      </FadeIn>

      <SlideUp options={{ duration: 0.8, delay: 0.2 }}>
        <p>Slides up with custom timing</p>
      </SlideUp>

      <HoverLift>
        <button>Lifts on hover</button>
      </HoverLift>
    </div>
  )
}
```

## 🎯 Core Concepts

### Component-Based API

Every animation is a React component that wraps your content:

```tsx
<AnimationComponent options={{ duration: 0.5 }}>
  {children}
</AnimationComponent>
```

### Options Prop

Customize animations at runtime:

```tsx
<FadeIn options={{
  duration: 1.5,      // Animation duration in seconds
  delay: 0.3,         // Delay before animation starts
  ease: [0.4, 0, 0.2, 1],  // Custom easing curve
  type: 'spring',     // 'tween' | 'spring'
  stiffness: 100,     // Spring stiffness
  damping: 10         // Spring damping
}}>
  <div>Custom animated content</div>
</FadeIn>
```

### All Framer Motion Props

Pass any Framer Motion prop directly:

```tsx
<SlideUp
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="my-class"
  style={{ background: 'white' }}
>
  Full Framer Motion support
</SlideUp>
```

## 📚 Animation Components

### Entrance Animations (20)

```tsx
import {
  FadeIn, FadeInSoft, FadeInSharp,
  SlideUp, SlideDown, SlideLeft, SlideRight,
  SlideUpSoft, SlideRightLong,
  ScaleIn, ScaleInSoft, ZoomIn,
  BlurIn, RotateIn, FlipInX, FlipInY,
  PopIn, DropIn, GrowIn, RevealClip
} from '@yourorg/motion/animations'

<FadeIn><h1>Welcome!</h1></FadeIn>
```

### Exit Animations (11)

```tsx
import {
  FadeOut, FadeOutFast, ZoomOut, ScaleDown,
  SlideOutLeft, SlideOutRight, SlideOutUp, SlideOutDown,
  RotateOut, FlipOutX, CollapseOut
} from '@yourorg/motion/animations'
```

### Hover & Tap Interactions (13)

```tsx
import {
  HoverLift, HoverDip, HoverScale, HoverScaleSoft,
  HoverTilt, HoverRotate, HoverGlow, HoverShadow,
  HoverPulse, HoverFloat,
  TapShrink, TapBounce, TapRotate
} from '@yourorg/motion/animations'

<HoverLift>
  <button>Hover me!</button>
</HoverLift>
```

### Loop Animations (11)

```tsx
import {
  Float, FloatWide, FloatSlow,
  Breath, BreathSlow,
  Wiggle, ShakeLoop, BounceLoop,
  PulseGlow, OscillateX, OscillateY
} from '@yourorg/motion/animations'

<Float>
  <div>Continuously floating</div>
</Float>
```

### List & Stagger (11)

```tsx
import {
  StaggerContainer, StaggerFast, StaggerSlow,
  FadeItem, SlideItemUp, SlideItemRight,
  ClipItemReveal, ScaleItem, SpringItem,
  CascadeFade, CascadeSlide
} from '@yourorg/motion/animations'

<StaggerContainer>
  <SlideItemUp>Item 1</SlideItemUp>
  <SlideItemUp>Item 2</SlideItemUp>
  <SlideItemUp>Item 3</SlideItemUp>
</StaggerContainer>
```

### Card Animations (10)

```tsx
import {
  CardPop, CardFloat, CardHoverGlow, CardHoverLift,
  CardFlip, CardRevealUp, CardSwipeIn, CardSwipeOut,
  CardPress, CardPulse
} from '@yourorg/motion/animations'
```

### Button Animations (8)

```tsx
import {
  ButtonTap, ButtonHoverPop, ButtonHoverArrow,
  ButtonSlideBg, ButtonGlow, ButtonShake,
  ButtonRipple, ButtonExpand
} from '@yourorg/motion/animations'
```

### Modal & Overlay (8)

```tsx
import {
  ModalFadeIn, ModalScaleIn, ModalSlideUp, ModalPopIn,
  OverlayFade, OverlayBlurIn,
  SheetSlideUp, SheetSlideDown
} from '@yourorg/motion/animations'
```

### Page Transitions (8)

```tsx
import {
  PageFade, PageSlideLeft, PageSlideRight,
  PageScaleIn, PageReveal, PageBlurIn,
  PageSwap, PagePush
} from '@yourorg/motion/animations'
```

### Other Categories

- **Hero/Banner (7)**: `HeroFade`, `HeroRise`, `HeroTextReveal`, etc.
- **Icons (8)**: `IconSpin`, `IconPop`, `IconShake`, etc.
- **Forms (6)**: `InputFocusGlow`, `CheckboxScale`, `ToggleSlide`, etc.
- **Images (6)**: `ImageZoomOnHover`, `ImageTilt`, `ImageRevealMask`, etc.
- **Loaders (5)**: `LoaderSpin`, `LoaderPulse`, `LoaderBounce`, etc.

## 🎮 Interactive Components

Physics-based interactive animations:

```tsx
import {
  Magnetic, Tilt3D, ElasticScale, DraggableSnap,
  Shake, HoverGlowEffect, CursorFollow,
  ScrollReveal, Orbit, WaveList
} from '@yourorg/motion/interactive'

<Magnetic>
  <div>Sticks to cursor</div>
</Magnetic>

<Tilt3D>
  <img src="card.jpg" alt="3D tilt effect" />
</Tilt3D>
```

## 🎨 Presets & Hooks

### Custom Easings

```tsx
import { easings } from '@yourorg/motion/presets'

<FadeIn options={{ ease: easings.softOvershoot }}>
  Custom easing
</FadeIn>

// Available: smooth, softOvershoot, bounce, snap, decelerate, accelerate, standard
```

### Spring Configurations

```tsx
import { springs } from '@yourorg/motion/presets'

<SlideUp options={springs.bouncy}>
  Bouncy animation
</SlideUp>

// Available: gentle, bouncy, snappy, slow
```

### Accessibility Hook

```tsx
import { useReducedMotion } from '@yourorg/motion/hooks'

function Component() {
  const prefersReduced = useReducedMotion()
  
  return (
    <FadeIn options={{ duration: prefersReduced ? 0.01 : 0.5 }}>
      Respects user preferences
    </FadeIn>
  )
}
```

### Viewport Detection

```tsx
import { useInView } from '@yourorg/motion/hooks'
import { useRef } from 'react'

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

### Combining Animations

```tsx
<SlideUp
  options={{ duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Entrance + Hover + Tap
</SlideUp>
```

### Custom Element Type

```tsx
<FadeIn as="section" className="hero">
  Renders as a section element
</FadeIn>
```

### Page Transitions (Next.js)

```tsx
import { AnimatePresence } from 'framer-motion'
import { PageFade } from '@yourorg/motion/animations'

export default function Layout({ children }) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <PageFade key={pathname}>
        {children}
      </PageFade>
    </AnimatePresence>
  )
}
```

### Creating Custom Animations

```tsx
import { createAnimation } from '@yourorg/motion/utils'

const MyCustomAnimation = createAnimation(
  'MyCustomAnimation',
  {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 }
  },
  { duration: 1, type: 'spring' }
)

<MyCustomAnimation>
  Custom animation
</MyCustomAnimation>
```

## 📊 Bundle Size

- **Full library**: ~14-16KB gzipped
- **Single animation**: ~0.5-1KB
- **Tree-shakeable**: Only bundle what you use
- **No runtime overhead**: Components are lightweight wrappers

## 🌐 Next.js Support

All components work seamlessly with Next.js:

```tsx
// app/page.tsx
import { FadeIn } from '@yourorg/motion/animations'

export default function Page() {
  return <FadeIn><h1>Next.js Page</h1></FadeIn>
}
```

Components are already marked with `'use client'` so you don't need to add it yourself.

## 📚 Requirements

- React 18+
- Framer Motion 10+
- TypeScript 5+ (optional but recommended)

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT © [Your Name]

## 🙏 Credits

Built with ❤️ using [Framer Motion](https://www.framer.com/motion/)

---

**Total**: 142 components (132 animations + 10 interactive)  
**Bundle**: ~14KB gzipped  
**TypeScript**: 100% type-safe  
**SSR**: ✅ Next.js compatible  
**Accessibility**: ✅ Reduced motion support
