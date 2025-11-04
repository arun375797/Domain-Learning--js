/**
 * Modifying and Removing Elements
 * 
 * WHAT TO LEARN:
 * 
 * 1. TEXT CONTENT
 *    - element.textContent = 'text'
 *    - Replaces all text
 *    - Preserves formatting
 *    - Escapes HTML
 * 
 * 2. INNERTEXT
 *    - element.innerText = 'text'
 *    - Visible text only
 *    - Respects CSS (hidden elements ignored)
 * 
 * 3. INNERHTML
 *    - element.innerHTML = '<b>HTML</b>'
 *    - Parses HTML
 *    - Security risk (XSS)
 *    - Use carefully
 * 
 * 4. SETATTRIBUTE
 *    - element.setAttribute('name', 'value')
 *    - Sets attribute
 *    - String values
 * 
 * 5. REMOVE
 *    - element.remove()
 *    - Removes from DOM
 *    - Modern method
 * 
 * 6. REMOVECHILD
 *    - parent.removeChild(child)
 *    - Legacy method
 *    - Must have parent reference
 * 
 * 7. REPLACEWITH
 *    - element.replaceWith(newElement)
 *    - Replaces element
 *    - Modern method
 * 
 * 8. REPLACECHILD
 *    - parent.replaceChild(new, old)
 *    - Legacy method
 */

// Modify: textContent, innerHTML, innerText, setAttribute
// Remove: remove(), removeChild()
// Replace: replaceWith(), replaceChild()
