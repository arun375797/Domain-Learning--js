const maybeReject = (fail) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(new Error("Something went wrong"));
        return;
      }
      resolve("Success!");
    }, 200);
  });

async function demo() {
  try {
    const result = await maybeReject(false);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

demo();
