console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("microtask");
});

console.log("end");

// Expected output order: start, end, microtask, timeout
// Modify to add queueMicrotask and observe changes.
