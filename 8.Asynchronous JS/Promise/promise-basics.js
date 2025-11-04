const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

delay(500).then(() => console.log("Resolved after 500ms"));

// Reject example:
// const failing = new Promise((_, reject) => reject(new Error("Oops")));
// failing.catch((error) => console.error(error.message));
