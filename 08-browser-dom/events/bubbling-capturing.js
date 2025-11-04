/**
 * Event Bubbling and Capturing
 * 
 * WHAT TO LEARN:
 * 
 * 1. EVENT PHASES
 *    - Capturing: outer to inner
 *    - Target: element itself
 *    - Bubbling: inner to outer
 * 
 * 2. CAPTURING PHASE
 *    - addEventListener('click', handler, true)
 *    - Third parameter: useCapture
 *    - true = capturing phase
 *    - Rarely used
 * 
 * 3. BUBBLING PHASE
 *    - Default behavior
 *    - Events bubble up
 *    - addEventListener('click', handler, false)
 *    - false or omitted
 * 
 * 4. STOPPROPAGATION
 *    - event.stopPropagation()
 *    - Stops event propagation
 *    - Prevents bubbling/capturing
 * 
 * 5. STOPIMMEDIATEPROPAGATION
 *    - event.stopImmediatePropagation()
 *    - Stops all handlers
 *    - Even on same element
 * 
 * 6. EVENT PHASE PROPERTY
 *    - event.eventPhase
 *    - 1 = capturing, 2 = target, 3 = bubbling
 */

// Event phases: capturing (outer to inner), target, bubbling (inner to outer)
// Use capture phase: addEventListener("click", handler, true)
// Stop propagation: event.stopPropagation(), event.stopImmediatePropagation()
