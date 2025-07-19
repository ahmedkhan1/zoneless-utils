import { signal, effect } from '@angular/core';

export function useIdleSignal(timeoutMs: number = 30000): () => boolean {
  const isIdle = signal(false);
  let timer: any;

  const reset = () => {
    clearTimeout(timer);
    isIdle.set(false);
    timer = setTimeout(() => isIdle.set(true), timeoutMs);
  };

  ['mousemove', 'keydown', 'mousedown', 'touchstart'].forEach(event =>
    window.addEventListener(event, reset)
  );

  reset();

  return isIdle;
}
