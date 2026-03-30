# MotionKit-RN

A React Native + Reanimated 2 animation library with **26 reusable animation hooks**.

## Installation

```bash
npm install
# or
yarn install
```

Requires:
- React Native 0.73+
- react-native-reanimated ^3.6.0
- react-native-gesture-handler ^2.14.0

## Quick Start

```jsx
import AnimatedView from './src/core/AnimatedView';
import {useFadeIn} from './src/effects';

// On mount
<AnimatedView effect={useFadeIn} trigger="onMount">
  <Text>Hello</Text>
</AnimatedView>

// On tap
<AnimatedView effect={useBounce} trigger="onTap">
  <Text>Tap me</Text>
</AnimatedView>
```

## Animations

| # | Hook | Description |
|---|------|-------------|
| 1 | `useFadeIn` | Opacity 0 → 1 |
| 2 | `useFadeOut` | Opacity 1 → 0 |
| 3 | `useScaleUp` | Scale 0.5 → 1 |
| 4 | `useScaleDown` | Scale 1.5 → 1 |
| 5 | `useBounce` | Spring bounce |
| 6 | `useShake` | Horizontal shake |
| 7 | `useRotateClockwise` | 360° CW |
| 8 | `useRotateCounterClockwise` | 360° CCW |
| 9 | `useSlideInFromLeft` | Slide from left |
| 10 | `useSlideInFromRight` | Slide from right |
| 11 | `useSlideInFromTop` | Slide from top |
| 12 | `useSlideInFromBottom` | Slide from bottom |
| 13 | `useSlideOutToLeft` | Slide out left |
| 14 | `useSlideOutToRight` | Slide out right |
| 15 | `usePulse` | Repeating pulse |
| 16 | `useFlipHorizontal` | 3D Y-axis flip |
| 17 | `useFlipVertical` | 3D X-axis flip |
| 18 | `useSwing` | Wobble oscillation |
| 19 | `StaggeredItem` | Delayed list items (component) |
| 20 | `useColorPulse` | Background color pulse |
| 21 | `useOpacityScale` | Opacity + scale combo |
| 22 | `ShimmerView` | Loading shimmer (component) |
| 23 | `usePathMotion` | Curve path motion |
| 24 | `useSpringElastic` | Spring physics |
| 25 | `useTypewriter` | Character-by-character text (hook) |
| 26 | `useMorph` | Shape morph via borderRadius |

## Triggers

- `"onMount"` — animates when component mounts
- `"onTap"` — animates on press

## Custom Effects

Create a function that takes a `sharedValue` and returns `useAnimatedStyle`:

```jsx
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const useMyEffect = (isActive) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 1 : 0, {duration: 300}),
  }));
};
```

## Demo Components

- `DemoButton` — animated button
- `DemoCard` — animated card
- `DemoLabel` — animated text label
- `DemoList` — staggered list

## Project Structure

```
src/
├── core/
│   └── AnimatedView.js
├── effects/
│   ├── fadeIn.js ... (26 effect files)
│   ├── index.js
│   └── morph.js
├── components/
│   ├── DemoButton.js
│   ├── DemoCard.js
│   ├── DemoLabel.js
│   └── DemoList.js
└── index.js
App.js
```

## License

MIT
