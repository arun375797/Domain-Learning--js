# Event Loop Diagram Notes

- Stack: executes synchronous code.
- Queue (macrotasks): timers, DOM events, network callbacks.
- Microtask queue: promises, queueMicrotask, MutationObserver.
- Render phase: browser paints between tasks when the stack is empty.
- Re-draw this diagram by hand and annotate with log outputs from the scripts.
