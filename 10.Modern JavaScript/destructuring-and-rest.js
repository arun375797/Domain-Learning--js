const user = { name: "Ada", role: "Engineer", active: true };
const { name, role, ...rest } = user;
console.log(name, role, rest);

const values = [1, 2, 3, 4];
const [first, ...others] = values;
console.log(first, others);

// Use defaults: const { missing = "fallback" } = user;
