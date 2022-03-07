const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Bob", "bob@example.com");

    expect(employee.getName()).toBe("Bob");
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe("bob@example.com");
    expect(employee.getRole()).toBe("Employee");
});