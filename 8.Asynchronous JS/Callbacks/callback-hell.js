// Nested callbacks become hard to read quickly:
setTimeout(() => {
  console.log("step 1");
  setTimeout(() => {
    console.log("step 2");
    setTimeout(() => {
      console.log("step 3");
    }, 300);
  }, 500);
}, 700);

// Refactor these patterns using promises or async/await to improve clarity.
