const counterModule = (() => {
  let count = 0;

  function increment() {
    count += 1;
  }

  function value() {
    return count;
  }

  return { increment, value };
})();

counterModule.increment();
console.log(counterModule.value());

// Revealing module pattern keeps private state and exposes a public API.
