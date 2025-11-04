/**
 * FormData API
 * 
 * WHAT TO LEARN:
 * 
 * 1. FORMDATA
 *    - new FormData(form)
 *    - Creates FormData from form
 *    - Or new FormData() for empty
 * 
 * 2. APPEND
 *    - formData.append('key', 'value')
 *    - Adds field
 *    - Can have multiple with same key
 * 
 * 3. GET / GETALL
 *    - formData.get('key') - first value
 *    - formData.getAll('key') - all values
 * 
 * 4. HAS / DELETE
 *    - formData.has('key')
 *    - formData.delete('key')
 * 
 * 5. SET
 *    - formData.set('key', 'value')
 *    - Sets value (replaces)
 *    - Different from append
 * 
 * 6. ITERATION
 *    - for (const [key, value] of formData)
 *    - Iterate entries
 * 
 * 7. FILE UPLOADS
 *    - Works with file inputs
 *    - Automatically includes files
 *    - Ready for fetch()
 */

// FormData API: const formData = new FormData(form)
// Methods: append, get, getAll, has, delete, set
// Useful for file uploads and form submission
