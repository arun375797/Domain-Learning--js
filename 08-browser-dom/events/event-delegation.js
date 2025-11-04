/**
 * Event Delegation
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT IS DELEGATION
 *    - Attach listener to parent
 *    - Handle events from children
 *    - Use event.target/closest
 * 
 * 2. BENEFITS
 *    - Fewer listeners
 *    - Works with dynamic content
 *    - Better performance
 *    - Memory efficient
 * 
 * 3. PATTERN
 *    - parent.addEventListener('click', (e) => {
 *        if (e.target.matches('.child')) {
 *          // handle
 *        }
 *      })
 * 
 * 4. CLOSEST
 *    - event.target.closest('.class')
 *    - Find nearest matching ancestor
 *    - Or element itself
 *    - Better than checking target directly
 * 
 * 5. USE CASES
 *    - Dynamic lists
 *    - Tables with many rows
 *    - Any repeating elements
 */

// Delegate events to a parent:
// list.addEventListener("click", (event) => {
//   const button = event.target.closest("button");
//   if (!button) return;
//   console.log(button.dataset.id);
// });
