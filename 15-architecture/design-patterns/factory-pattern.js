function createUser({ name, role = "user" }) {
  return {
    name,
    role,
    canEdit() {
      return role === "admin";
    },
  };
}

const admin = createUser({ name: "Ada", role: "admin" });
console.log(admin.canEdit());

// Factories return new objects without requiring `new` and help with composition.
