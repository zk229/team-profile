const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Bob", "bob@example.com", 1);

    expect(employee.getName()).toBe("Bob");
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe("bob@example.com");
    expect(employee.getRole()).toBe("Employee");
});