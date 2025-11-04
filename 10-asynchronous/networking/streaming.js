/**
 * Streaming Responses
 * 
 * WHAT TO LEARN:
 * 
 * 1. STREAMING
 *    - Process data as it arrives
 *    - Don't wait for full response
 *    - Memory efficient
 *    - Real-time processing
 * 
 * 2. READABLESTREAM
 *    - Response.body
 *    - ReadableStream
 *    - Can read chunks
 * 
 * 3. READING STREAM
 *    - const reader = response.body.getReader()
 *    - while (true) {
 *        const { done, value } = await reader.read()
 *        if (done) break
 *        process(value)
 *      }
 * 
 * 4. USE CASES
 *    - Large files
 *    - Real-time data
 *    - Progress tracking
 *    - Memory efficiency
 */

// Streaming: process data as it arrives
// Use Response.body for ReadableStream
// Useful for large files and real-time data
