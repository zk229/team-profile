const Manager = require("../lib/Manager.js");

test("create a Manager object", () => {
    const manager = new Manager("Olivia", "olivia@olivia.su", 4, 234);

    expect(manager.getName()).toBe("Olivia");
    expect(manager.getEmail()).toBe("olivia@olivia.su");
    expect(manager.getId()).toBe(4);
    expect(manager.getRoomNumber()).toBe(234);
    expect(manager.getRole()).toBe("Manager");
});