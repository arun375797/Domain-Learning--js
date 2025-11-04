const a = Promise.resolve("A");
const b = Promise.resolve("B");
const c = Promise.reject("C failed");

Promise.all([a, b])
  .then((values) => console.log("all:", values))
  .catch((error) => console.error("all error:", error));

Promise.allSettled([a, c]).then((results) => console.log("allSettled:", results));

Promise.race([a, c]).then((winner) => console.log("race winner:", winner)).catch((error) => console.error("race error:", error));

Promise.any([c, a]).then((value) => console.log("any:", value)).catch((error) => console.error("any error:", error));
