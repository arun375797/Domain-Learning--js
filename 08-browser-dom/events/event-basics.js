/**
 * Event Basics
 * 
 * WHAT TO LEARN:
 * 
 * 1. ADDEVENTLISTENER
 *    - element.addEventListener('click', handler)
 *    - Attach event handler
 *    - Can add multiple
 *    - Preferred method
 * 
 * 2. EVENT HANDLER
 *    - function handler(event) { }
 *    - Receives event object
 *    - event.target - element that triggered
 *    - event.currentTarget - element with listener
 * 
 * 3. PREVENTDEFAULT
 *    - event.preventDefault()
 *    - Prevents default behavior
 *    - Link clicks, form submission
 * 
 * 4. REMOVEEVENTLISTENER
 *    - element.removeEventListener('click', handler)
 *    - Remove handler
 *    - Must be same function reference
 * 
 * 5. EVENT OBJECT
 *    - event.type - event type
 *    - event.target - target element
 *    - event.timeStamp - when occurred
 *    - Many more properties
 * 
 * 6. ONEVENT PROPERTIES
 *    - element.onclick = handler
 *    - Legacy method
 *    - Only one handler
 *    - Use addEventListener instead
 */

// element.addEventListener("click", handleClick);
// function handleClick(event) {
//   event.preventDefault();
//   console.log("Clicked", event.target);
// }
