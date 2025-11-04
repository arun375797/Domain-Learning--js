class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function assertEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must include @");
  }
}

try {
  assertEmail("invalid-email");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation issue:", error.message);
  } else {
    throw error;
  }
}
