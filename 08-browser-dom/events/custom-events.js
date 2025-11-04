/**
 * Custom Events
 * 
 * WHAT TO LEARN:
 * 
 * 1. CUSTOMEVENT
 *    - new CustomEvent('name', { detail: data })
 *    - Creates custom event
 *    - detail holds data
 * 
 * 2. DISPATCHEVENT
 *    - element.dispatchEvent(event)
 *    - Fires custom event
 *    - Listeners receive it
 * 
 * 3. LISTENING
 *    - element.addEventListener('custom:event', handler)
 *    - Listen for custom events
 *    - event.detail contains data
 * 
 * 4. USE CASES
 *    - Component communication
 *    - Decoupling
 *    - Event-driven architecture
 *    - Custom interactions
 * 
 * 5. NAMING
 *    - Use namespaced names
 *    - 'app:user:login'
 *    - Avoid conflicts
 */

// const event = new CustomEvent("cart:add", { detail: { id: 42 } });
// document.dispatchEvent(event);
// document.addEventListener("cart:add", (event) => console.log(event.detail));
// Custom events help decouple components in vanilla JS apps.
