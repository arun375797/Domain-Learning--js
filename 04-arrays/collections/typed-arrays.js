/**
 * Typed Arrays
 * 
 * WHAT TO LEARN:
 * 
 * 1. WHAT ARE TYPED ARRAYS
 *    - Arrays of raw binary data
 *    - Fixed length
 *    - Specific numeric types
 *    - High performance
 * 
 * 2. ARRAYBUFFER
 *    - Raw binary data buffer
 *    - new ArrayBuffer(byteLength)
 *    - Cannot read/write directly
 *    - Need view to access
 * 
 * 3. TYPED ARRAY TYPES
 *    - Int8Array - signed 8-bit integer
 *    - Uint8Array - unsigned 8-bit integer
 *    - Int16Array - signed 16-bit integer
 *    - Uint16Array - unsigned 16-bit integer
 *    - Int32Array - signed 32-bit integer
 *    - Uint32Array - unsigned 32-bit integer
 *    - Float32Array - 32-bit float
 *    - Float64Array - 64-bit float
 * 
 * 4. CREATING TYPED ARRAYS
 *    - new Int32Array(length)
 *    - new Int32Array([1, 2, 3])
 *    - new Int32Array(buffer, byteOffset, length)
 *    - From ArrayBuffer
 * 
 * 5. ARRAY-LIKE INTERFACE
 *    - Similar to regular arrays
 *    - Indexed access: arr[0]
 *    - Has length property
 *    - Many array methods work
 * 
 * 6. AVAILABLE METHODS
 *    - map, filter, reduce, forEach
 *    - slice, subarray
 *    - find, findIndex, some, every
 *    - fill, copyWithin
 *    - NOT: push, pop, shift, unshift, splice
 * 
 * 7. FIXED LENGTH
 *    - Cannot resize
 *    - Length set at creation
 *    - No push/pop/splice
 *    - More like C arrays
 * 
 * 8. TYPED ARRAY VIEWS
 *    - Multiple views on same buffer
 *    - const buffer = new ArrayBuffer(8);
 *    - const ints = new Int32Array(buffer);
 *    - const floats = new Float32Array(buffer);
 * 
 * 9. WHEN TO USE
 *    - Binary data manipulation
 *    - WebGL graphics
 *    - Audio processing
 *    - Network protocols
 *    - File I/O
 *    - WebAssembly
 * 
 * 10. PERFORMANCE BENEFITS
 *     - Much faster than regular arrays
 *     - Fixed type = optimizations
 *     - Contiguous memory
 *     - No type checking
 * 
 * 11. UINT8CLAMPEDARRAY
 *     - Special case: 0-255 clamped
 *     - Used for Canvas ImageData
 *     - Out of range values clamped
 *     - Not wrapped like other types
 * 
 * 12. DATAVIEW
 *     - More flexible buffer access
 *     - Mix different types
 *     - Control endianness
 *     - dataView.getInt32(byteOffset, littleEndian)
 * 
 * 13. CONVERTING TO REGULAR ARRAY
 *     - [...typedArray]
 *     - Array.from(typedArray)
 *     - typedArray.slice()
 *     - Loses performance benefits
 * 
 * 14. COMMON USE CASES
 *     - Image data manipulation
 *     - Audio samples
 *     - 3D graphics
 *     - Binary file formats
 *     - Network packets
 * 
 * 15. WHEN NOT TO USE
 *     - General purpose arrays
 *     - Dynamic sizing needed
 *     - Mixed types
 *     - Most JavaScript code
 * 
 * 16. BROWSER APIS
 *     - Canvas: getImageData returns Uint8ClampedArray
 *     - Web Audio: audio buffers use Float32Array
 *     - WebGL: vertex data in typed arrays
 *     - Fetch: response.arrayBuffer()
 */

// Typed arrays: ArrayBuffer, Int8Array, Uint8Array, Float32Array, etc.
// Used for binary data, WebGL, WebAssembly.
// See typed-arrays-overview.md for more details.
