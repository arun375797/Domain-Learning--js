# Module Setup

- Node.js: add `"type": "module"` to package.json or use `.mjs` file extension.
- Browsers: add `<script type="module" src="main.js"></script>` to HTML.
- Bundlers: configure entry points and ensure Babel/TypeScript targets module syntax.
- Remember that modules are deferred automatically; no need for DOMContentLoaded guard unless manipulating HTML immediately.
