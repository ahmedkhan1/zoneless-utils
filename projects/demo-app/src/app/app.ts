// Angular core imports
import { ChangeDetectorRef, Component, effect } from '@angular/core';
// CommonModule provides Angular structural directives like *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Importing utilities from your custom zoneless-utils library
import {
  useIntervalSignal,        // Custom signal that emits a counter value every N milliseconds
  useTimeoutSignal,         // Custom signal that emits once after a timeout
  runWithChangeDetection,   // Utility that runs a function and manually triggers change detection
  markForCheck,             // Utility to mark the component for change detection
  ZonelessAsyncPipe,         // Custom pipe to unwrap signals in templates
  useAnimationFrameSignal,
  ZonelessIfDirective,
  useIdleSignal,
  useResizeSignal 
} from 'zoneless-utils';

// Component definition using Angular Standalone API
@Component({
  selector: 'app-root',               // Component selector
  standalone: true,                   // Standalone component (no need to declare in NgModule)
  imports: [CommonModule, ZonelessAsyncPipe, ZonelessIfDirective], // Modules and pipes this component depends on
  templateUrl: './app.html',         // External HTML template
})
export class App {
  animationFrame = useAnimationFrameSignal();

  // Reactive signal that ticks every second (1000 ms)
  intervalSignal = useIntervalSignal(1000);

  // Signal that becomes true after 3 seconds (3000 ms)
  timeoutSignal = useTimeoutSignal(3000);

  idleSignal = useIdleSignal(5000); // 5 seconds

  resizeSignal = useResizeSignal();


  // Local state to show/hide the success message
  showManualChange = false;

  // Injecting Angular's ChangeDetectorRef to manually trigger change detection
  constructor(private cdr: ChangeDetectorRef) {
    // Reactive effect: logs interval ticks every time intervalSignal changes
    effect(() => {
      console.log('Interval Tick:', this.intervalSignal());
    });
  }

  // This method is called when the user clicks the "Run Manual Change Detection" button
  runManualChangeDetection() {
    // Wrap the state change in the custom change detection utility
    runWithChangeDetection(this.cdr, () => {
      this.showManualChange = true; // Update local state
    });

    // After 2 seconds, hide the message and mark the component for change detection again
    setTimeout(() => {
      this.showManualChange = false;
      markForCheck(this.cdr); // This should also receive cdr if you want full control
    }, 2000);
  }
}
