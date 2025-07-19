# Zoneless Utility Toolkit for Angular

A lightweight utility library to help you build **Angular apps without Zone.js** — using Signals, manual change detection, and smart async strategies.

## ✨ Features

- ✅ `zonelessAsync` pipe
- ✅ `useIntervalSignal` / `useTimeoutSignal`
- ✅ `runWithChangeDetection()`
- ✅ `markForCheck()`
- ✅ `useAnimationFrameSignal()`
- ✅ `*zonelessIf` directive (Signal-aware structural conditional)
- ✅ `useResizeSignal()` — Track window resize as a signal
- ✅ `useIdleSignal()` — Emit when user is idle (e.g. no mouse/keyboard for X ms)



## 📦 Installation
```bash
npm install zoneless-utils
```

## 🚀 Usage

## Interval Signals

```ts
import { useIntervalSignal } from 'zoneless-utils';

const counter = useIntervalSignal(1000);
```

```html
<p>Tick: {{ counter | zonelessAsync }}</p>
```

## Zoneless Conditional Rendering Directive
```ts
import { ZonelessIfDirective } from 'zoneless-utils';

// Component definition using Angular Standalone API
@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [ZonelessIfDirective],
  templateUrl: './app.html',
})
```

```html
<div *zonelessIf="counter() % 2 === 0">Even Tick</div>
```

## Manual change detection

```ts
import { runWithChangeDetection } from 'zoneless-utils';

runWithChangeDetection(this.cdr, () => {
  this.someValue = 'Updated!';
});

```

## Idle Signal for tracking when user is idle (e.g. no mouse/keyboard for X ms)

```ts
import { useIdleSignal } from 'zoneless-utils';

idleSignal = useIdleSignal(5000); // 5 seconds

```
```html
<p *zonelessIf="idleSignal()">🛌 User is idle</p>
```

## Resize Signal for Tracking window resize

```ts
import { useResizeSignal } from 'zoneless-utils';

resizeSignal = useResizeSignal();

```
```html
<p>📏 Window Size: {{ resizeSignal() | json }}</p>
```


## 📚 API Reference
- **zonelessAsync** — Bind a signal directly in the template.
- **useIntervalSignal(ms)** — Emits a number every `ms` milliseconds.
- **useTimeoutSignal(ms)** — Emits `true` once after the timeout.
- **runWithChangeDetection(cdr, fn)** — Runs a function and triggers change detection.
- **markForCheck(cdr)** — Marks a component for check manually.
- **useAnimationFrameSignal()** - Emits timestamp on each requestAnimationFrame call — great for animations.
- ***zonelessIf="condition"** - Like *ngIf, but supports Signals as input.
- **useResizeSignal()** — Track window resize as a signal




## 🧱 Demo

You can run a live demo in this workspace:

```ts
ng build zoneless-utils
ng serve demo-app
```

## 🛠️ Contributing

- Fork the repo

- Add a utility to src/lib/

- Export it in public-api.ts

- Add a demo usage

- Submit a PR!