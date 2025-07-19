import { signal } from '@angular/core';

export function useAnimationFrameSignal(): () => number {
  const frame = signal(0);

  function update(time: number) {
    frame.set(time);
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);

  return frame;
}
