// use-interval.signal.ts
import { signal } from '@angular/core';

export function useIntervalSignal(ms: number) {
  const counter = signal(0);
  setInterval(() => counter.update(c => c + 1), ms);
  return counter;
}
