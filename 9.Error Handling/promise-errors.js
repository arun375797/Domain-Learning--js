Promise.resolve()
  .then(() => {
    throw new Error("Something broke");
  })
  .catch((error) => {
    console.error("Caught promise error:", error.message);
    return "recovered";
  })
  .then((value) => console.log("Next value:", value));

// Always return from catch to avoid unhandled promise rejections.
