const Manager = require("../lib/Manager.js");

test("create a Manager object", () => {
    const manager = new Manager("Olivia", "olivia@olivia.su", 234);

    expect(manager.getName()).toBe("Olivia");
    expect(manager.getEmail()).toBe("olivia@olivia.su");
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getRoomNumber()).toBe(234);
    expect(manager.getRole()).toBe("Manager");
});