const response = {
  user: {
    name: "Ada",
    contact: { email: "ada@example.com" },
  },
};

const phone = response?.user?.contact?.phone ?? "No phone on file";
console.log(phone);

// Optional chaining prevents runtime errors on missing nested properties.
