# Security & Accessibility

- XSS: sanitise user input, escape dynamic content, use Content Security Policy.
- CSRF: prefer `SameSite=Lax` cookies, use anti-CSRF tokens for critical actions.
- Accessibility: semantic HTML, proper ARIA roles, keyboard navigation support.
- Run automated tools (axe, Lighthouse) and manual tests with screen readers.
