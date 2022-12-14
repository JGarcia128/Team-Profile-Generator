const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor", () => {
  const testValue = 100;
  const e = new Manager("Janice", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("James", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jerry", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
