/**
 * DOM Query Methods
 * 
 * WHAT TO LEARN:
 * 
 * 1. GETELEMENTBYID
 *    - document.getElementById('id')
 *    - Returns single element
 *    - Fast lookup
 *    - Returns null if not found
 * 
 * 2. GETELEMENTSBYCLASSNAME
 *    - element.getElementsByClassName('class')
 *    - Returns HTMLCollection
 *    - Live collection (updates)
 *    - Multiple elements
 * 
 * 3. GETELEMENTSBYTAGNAME
 *    - element.getElementsByTagName('tag')
 *    - Returns HTMLCollection
 *    - Live collection
 * 
 * 4. QUERYSELECTOR / QUERYSELECTORALL
 *    - Modern methods
 *    - CSS selector syntax
 *    - querySelectorAll returns static NodeList
 * 
 * 5. HTMLCOLLECTION VS NODELIST
 *    - HTMLCollection: live, array-like
 *    - NodeList: static (querySelectorAll) or live (childNodes)
 *    - Both array-like
 * 
 * 6. CONVERTING TO ARRAY
 *    - [...collection] - spread
 *    - Array.from(collection)
 *    - For array methods
 */

// Query methods: getElementById, getElementsByClassName, getElementsByTagName
// Modern: querySelector, querySelectorAll (CSS selector syntax)
// Differences: live vs static NodeLists
