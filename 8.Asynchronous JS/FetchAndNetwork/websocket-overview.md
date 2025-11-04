# WebSocket Overview

- Create a connection: `const socket = new WebSocket("wss://example.com");`
- Listen for `open`, `message`, `error`, `close` events.
- Send data with `socket.send(JSON.stringify({ type: "ping" }))`.
- Reconnect strategies: exponential backoff, heartbeat messages.
- Useful for chat apps, dashboards, multiplayer games.
