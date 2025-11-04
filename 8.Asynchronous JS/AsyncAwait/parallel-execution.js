const delayValue = (value, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });

async function runInParallel() {
  const [first, second] = await Promise.all([delayValue("A", 200), delayValue("B", 400)]);
  console.log(first, second);
}

runInParallel();
