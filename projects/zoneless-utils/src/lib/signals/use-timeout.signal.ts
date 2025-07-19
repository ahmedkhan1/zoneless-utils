// projects/zoneless-utils/src/lib/signals/use-timeout.signal.ts
import { signal } from '@angular/core';

export function useTimeoutSignal(ms: number) {
  const done = signal(false);
  setTimeout(() => done.set(true), ms);
  return done;
}