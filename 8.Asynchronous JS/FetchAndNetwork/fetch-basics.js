async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

// Uncomment to test in the browser or Node with fetch available.
// fetchUsers();
