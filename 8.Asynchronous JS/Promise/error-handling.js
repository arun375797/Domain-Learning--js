const fetchData = (shouldFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network issue"));
        return;
      }
      resolve({ data: [1, 2, 3] });
    }, 200);
  });

fetchData(true)
  .then((result) => console.log(result))
  .catch((error) => console.error("Caught:", error.message))
  .finally(() => console.log("Cleanup here"));
