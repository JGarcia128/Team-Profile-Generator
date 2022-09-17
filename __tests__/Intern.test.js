const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UT";
  const e = new Intern("Jerry", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("James", 1, "test@test.com", "UT");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UT";
  const e = new Intern("Alice", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
