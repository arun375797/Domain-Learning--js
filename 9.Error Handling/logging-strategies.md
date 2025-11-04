# Logging Strategies

- Use structured logs: `console.log("user.login", { id, timestamp: Date.now() });`
- Differentiate log levels: `console.info`, `console.warn`, `console.error`.
- In Node, use libraries like `pino` or `winston` for JSON logs.
- In the browser, label timers: `console.time("load"); ... console.timeEnd("load");`
- Redact sensitive data before logging to avoid leaking secrets.
