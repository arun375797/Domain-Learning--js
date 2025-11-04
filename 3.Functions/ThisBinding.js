// `this` depends on how a function is called, not where it is defined.
// Example: const user = { name: "Ada", greet() { console.log(this.name); } };
// Bind manually: const greet = user.greet.bind(user);
// Arrow functions capture `this` from the surrounding scope.
