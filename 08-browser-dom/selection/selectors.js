/**
 * DOM Selectors
 * 
 * WHAT TO LEARN:
 * 
 * 1. QUERYSELECTOR
 *    - document.querySelector(selector)
 *    - Returns first matching element
 *    - CSS selector syntax
 *    - Returns null if not found
 * 
 * 2. QUERYSELECTORALL
 *    - document.querySelectorAll(selector)
 *    - Returns NodeList of all matches
 *    - Static NodeList
 *    - Convert to array: [...list]
 * 
 * 3. CSS SELECTORS
 *    - '.class' - class selector
 *    - '#id' - ID selector
 *    - 'tag' - tag selector
 *    - '[data-role="cta"]' - attribute selector
 *    - 'div > p' - child selector
 *    - 'div p' - descendant selector
 * 
 * 4. DATA ATTRIBUTES
 *    - '[data-role="cta"]'
 *    - Custom data attributes
 *    - Accessible via dataset
 * 
 * 5. COMPLEX SELECTORS
 *    - Combine multiple selectors
 *    - '.class#id'
 *    - 'div.class p'
 * 
 * 6. SCOPE
 *    - element.querySelector() - within element
 *    - document.querySelector() - entire document
 */

// document.querySelector(".card") selects the first matching element.
// querySelectorAll returns a NodeList; convert to array with [...list] before map/filter.
// Practice selecting by data attributes: document.querySelector('[data-role="cta"]').
