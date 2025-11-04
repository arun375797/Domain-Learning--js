/**
 * Creating and Appending Elements
 * 
 * WHAT TO LEARN:
 * 
 * 1. CREATEELEMENT
 *    - document.createElement('tag')
 *    - Creates new element
 *    - Not yet in DOM
 *    - Must append to add
 * 
 * 2. TEXT CONTENT
 *    - element.textContent = 'text'
 *    - element.innerText = 'text'
 *    - Sets text content
 *    - textContent preserves formatting
 * 
 * 3. APPEND
 *    - parent.append(child)
 *    - Adds to end
 *    - Can append multiple
 *    - Modern method
 * 
 * 4. PREPEND
 *    - parent.prepend(child)
 *    - Adds to beginning
 *    - Modern method
 * 
 * 5. APPENDCHILD
 *    - parent.appendChild(child)
 *    - Adds to end
 *    - Legacy method
 *    - Returns appended child
 * 
 * 6. INSERTBEFORE
 *    - parent.insertBefore(new, reference)
 *    - Inserts before reference
 *    - Legacy method
 * 
 * 7. INSERTADJACENTHTML
 *    - element.insertAdjacentHTML(position, html)
 *    - Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
 *    - Parses HTML
 *    - Useful for templating
 * 
 * 8. INSERTADJACENTELEMENT
 *    - element.insertAdjacentElement(position, element)
 *    - Inserts element
 *    - No parsing
 */

// const article = document.createElement("article");
// article.textContent = "Hello DOM";
// document.body.append(article);
// Methods: append, prepend, appendChild, insertBefore
// Try insertAdjacentHTML for templating without frameworks.
