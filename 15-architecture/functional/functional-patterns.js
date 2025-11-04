const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const trim = (value) => value.trim();
const toLower = (value) => value.toLowerCase();
const removeSpaces = (value) => value.replace(/\s+/g, "-");

const slugify = compose(removeSpaces, toLower, trim);
console.log(slugify("  Hello Functional Patterns  "));

// Functional patterns favour pure functions, immutability, and composition.
