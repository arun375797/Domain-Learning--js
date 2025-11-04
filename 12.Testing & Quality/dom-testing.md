# DOM Testing

- Use `@testing-library/dom` or `@testing-library/react` for framework tests.
- Prefer queries that match how users find elements: `getByRole`, `getByLabelText`.
- Avoid asserting implementation details like class names unless necessary.
- Mock browser APIs (localStorage, fetch) when needed.
