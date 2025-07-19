import { signal, effect } from '@angular/core';

interface WindowSize {
  width: number;
  height: number;
}

export function useResizeSignal(): () => WindowSize {
  const size = signal<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const update = () => {
    size.set({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Attach resize listener once
  window.addEventListener('resize', update);

  return size;
}
