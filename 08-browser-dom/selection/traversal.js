/**
 * DOM Traversal
 * 
 * WHAT TO LEARN:
 * 
 * 1. PARENT
 *    - element.parentElement - parent element
 *    - element.parentNode - parent node
 *    - Usually same
 * 
 * 2. CHILDREN
 *    - element.children - HTMLCollection of child elements
 *    - element.childNodes - NodeList (includes text nodes)
 *    - element.firstElementChild - first child element
 *    - element.lastElementChild - last child element
 * 
 * 3. SIBLINGS
 *    - element.nextElementSibling - next sibling element
 *    - element.previousElementSibling - previous sibling element
 *    - element.nextSibling - next node (may be text)
 *    - element.previousSibling - previous node
 * 
 * 4. CLOSEST
 *    - element.closest(selector)
 *    - Nearest ancestor matching selector
 *    - Includes element itself
 *    - Returns null if not found
 * 
 * 5. MATCHES
 *    - element.matches(selector)
 *    - Checks if element matches selector
 *    - Returns boolean
 * 
 * 6. CONTAINS
 *    - parent.contains(child)
 *    - Checks if child is descendant
 *    - Returns boolean
 */

// DOM traversal: parentElement, children, nextElementSibling, previousElementSibling
// closest(selector) - find nearest ancestor matching selector
// matches(selector) - check if element matches selector
