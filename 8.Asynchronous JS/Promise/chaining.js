const fetchUser = () =>
  Promise.resolve({ id: 1, name: "Ada" });

fetchUser()
  .then((user) => {
    console.log("User", user);
    return { ...user, role: "admin" };
  })
  .then((userWithRole) => console.log("Role set", userWithRole))
  .catch((error) => console.error(error));

// Always return a value or promise in each then to chain cleanly.
