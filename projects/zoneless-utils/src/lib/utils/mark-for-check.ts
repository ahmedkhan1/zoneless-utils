import { inject, ChangeDetectorRef } from '@angular/core';

export function markForCheck(cdr: ChangeDetectorRef) {
  cdr.markForCheck();
}
