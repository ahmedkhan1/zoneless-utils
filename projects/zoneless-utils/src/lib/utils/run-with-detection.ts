// run-with-detection.ts
import { inject, ChangeDetectorRef } from '@angular/core';

export function runWithChangeDetection(cdr: ChangeDetectorRef, callback: () => void): void {
  callback();
  cdr.detectChanges();
}

