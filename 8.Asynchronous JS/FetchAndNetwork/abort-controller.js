const controller = new AbortController();
const { signal } = controller;

async function fetchWithTimeout(url, timeout = 3000) {
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

// Example:
// fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000)
//   .then(console.log)
//   .catch((error) => console.error("Request cancelled:", error.name));
