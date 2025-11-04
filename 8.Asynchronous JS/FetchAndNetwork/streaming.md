# Streaming Responses

- Use `response.body` (ReadableStream) to process data chunks progressively.
- Browser example: `const reader = response.body.getReader();`
- ReadableStream default reader returns `{ value, done }` objects.
- Great for large downloads, incremental rendering, or SSE (Server Sent Events).
