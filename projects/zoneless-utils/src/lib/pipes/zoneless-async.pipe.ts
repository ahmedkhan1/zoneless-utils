// zoneless-async.pipe.ts
import { Pipe, Signal, inject, PipeTransform } from '@angular/core';

@Pipe({ name: 'zonelessAsync', standalone: true, pure: false })
export class ZonelessAsyncPipe<T> implements PipeTransform {
  transform(signal: Signal<T>): T {
    return signal();
  }
}
