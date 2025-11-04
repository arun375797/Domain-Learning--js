/**
 * WebSockets
 * 
 * WHAT TO LEARN:
 * 
 * 1. WEBSOCKET
 *    - const ws = new WebSocket('ws://example.com')
 *    - Full-duplex communication
 *    - Persistent connection
 *    - Real-time updates
 * 
 * 2. CONNECTION STATES
 *    - ws.readyState
 *    - CONNECTING, OPEN, CLOSING, CLOSED
 *    - ws.CONNECTING = 0
 *    - ws.OPEN = 1
 * 
 * 3. EVENTS
 *    - ws.onopen - connection opened
 *    - ws.onmessage - message received
 *    - ws.onerror - error occurred
 *    - ws.onclose - connection closed
 * 
 * 4. SENDING
 *    - ws.send(data)
 *    - Can send strings, ArrayBuffer, Blob
 *    - Must be OPEN
 * 
 * 5. RECEIVING
 *    - ws.onmessage = (event) => {
 *        console.log(event.data)
 *      }
 * 
 * 6. CLOSING
 *    - ws.close()
 *    - ws.close(code, reason)
 *    - Clean shutdown
 * 
 * 7. USE CASES
 *    - Real-time chat
 *    - Live updates
 *    - Gaming
 *    - Trading platforms
 */

// WebSocket: full-duplex communication
// const ws = new WebSocket('ws://example.com');
// ws.onmessage = (event) => { console.log(event.data); };
// ws.send('Hello Server');
