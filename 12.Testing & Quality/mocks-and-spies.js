// Jest mock example
const sendEmail = jest.fn();

function notify(user) {
  if (!user.email) return;
  sendEmail(user.email, "Welcome!");
}

test("notifies when email exists", () => {
  notify({ email: "ada@example.com" });
  expect(sendEmail).toHaveBeenCalledWith("ada@example.com", "Welcome!");
});
