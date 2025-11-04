const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function run() {
  console.log("before");
  await delay(300);
  console.log("after 300ms");
}

run();
