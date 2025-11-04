const user = { name: "Ada", role: "Engineer" };

const userProxy = new Proxy(user, {
  get(target, property, receiver) {
    if (!(property in target)) {
      console.warn(`Property ${String(property)} is missing`);
    }
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${String(property)} to`, value);
    return Reflect.set(target, property, value, receiver);
  },
});

userProxy.role = "Admin";
console.log(userProxy.name);
console.log(userProxy.email);
